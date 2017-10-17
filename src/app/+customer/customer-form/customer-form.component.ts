import { CustomerAddress } from './../shared/customer-address.model';
import { CustomerModel } from './../shared/customer.model';
import { AppSettings } from './../../shared/settings/app-settings';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ErrorService } from './../../shared/utils/error.service';
import { NotificationService } from './../../shared/utils/notification.service';
import { CustomerService } from './../shared/customer.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  form: FormGroup;
  errors = [];
  savedSuccessfuly: boolean = false;
  formMode: String;
  customerModel: CustomerModel = new CustomerModel({customerId: 0, address: new CustomerAddress({})});

  constructor(private customerService: CustomerService,
    private notificationService: NotificationService,
    private errorService: ErrorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscribeInitializerEvents();
    this.initialiseForm();
  }

  private subscribeInitializerEvents() {
    this.setFormMode();
    this.setLoadDataVerification();
  }

  private setFormMode() {
    this.route.data.subscribe(data => {
      if (data && data["formMode"] != null) {
        this.formMode = data["formMode"];
      }
      else {
        this.navigateToList();
      }
    });
  }

  private setLoadDataVerification() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      if (id != null) {
        this.customerService.getById(+id).subscribe(response => {
          console.log(response);
          this.customerModel = new CustomerModel(response);
          console.log(this.customerModel);
          this.initialiseForm();
        });
      }
    });
  }

  private initialiseForm() {

    this.form = new FormGroup({
      'customerId': new FormControl(this.customerModel.customerId),
      'name': new FormControl(this.customerModel.name),
      'cpfCnpj': new FormControl(this.customerModel.cpfCnpj),
      'email': new FormControl(this.customerModel.email),
      'phone1': new FormControl(this.customerModel.phone1),
      'phone2': new FormControl(this.customerModel.phone2),
      'comment': new FormControl(this.customerModel.comment),
      'address': new FormGroup({
        'address': new FormControl(this.customerModel.address.address),
        'additionalInformation': new FormControl(this.customerModel.address.additionalInformation),
        'postcode': new FormControl(this.customerModel.address.postcode),
        'city': new FormControl(this.customerModel.address.city),
        'state': new FormControl(this.customerModel.address.state),
        'comment': new FormControl(this.customerModel.address.comment),
      })
    });

    if (this.formMode == AppSettings.formModeDelete)
      this.errorService.disabledAllFormFields(this.form, false);

    
  }

  private save() {
    if (this.form.valid) {

      this.customerModel = new CustomerModel(this.form.value);
      this.errors = [];

      this.customerService.save(this.customerModel)
        .subscribe(response => {
          this.notificationService.SuccessfullMessage('Customer Salvo com sucesso', () => {
            this.navigateToList();
          });
        },
        (err) => {
          if (err.status === 400) {
            const errors = this.errorService.getModelStateErrors(err);
            errors.forEach(item => {
              this.errors.push(item.error);
            });
            this.notificationService.ErrorMessageBox('Some information need to be filled up.', () => {
            });
          } else {
            this.notificationService.GenericErroMessage();
          }
        });
    }
    else {
      this.errorService.validateAllFormFields(this.form);
      this.notificationService.ErrorMessageBox('Some information need to be filled up.', () => {
      });
    }
  }

  private delete() {
    const id = this.form.controls['customerId'].value;
    this.customerService.delete(+id).subscribe(() => {
       this.notificationService.SuccessfullMessage(
         'Registro excluído com sucesso.',  
         () => {
           this.navigateToList();
         });
     });
  }

  private navigateToList(){
    this.router.navigate(['/customer']);
  }

}
