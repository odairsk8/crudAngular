import { AppSettings } from './../../shared/settings/app-settings';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotificationService } from './../../shared/utils/notification.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BagModel } from './../shared/bag.model';
import { HttpService } from './../../shared/http/http.service';
import { BagService } from './../shared/bag.service';
import { ErrorService } from 'app/shared/utils/error.service';

@Component({
  selector: 'app-bag-form',
  templateUrl: './bag-form.component.html',
  styleUrls: ['./bag-form.component.css']
})
export class BagFormComponent implements OnInit, OnDestroy {

  @Input() public bagModel: BagModel = new BagModel({ BagId: 0 });

  bagForm: FormGroup;
  errors = [];
  savedSuccessfuly: boolean = false;
  public formMode: String;

  constructor(private bagService: BagService,
    private notificationService: NotificationService,
    private errorService: ErrorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscribeInitializerEvents();
    this.initialiseForm();
  }

  ngOnDestroy(): void {

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
        this.bagService.getById(+id).subscribe(response => {
          this.bagModel = new BagModel(response);
          this.initialiseForm();
        });
      }
    });
  }

  private initialiseForm() {

    this.bagForm = new FormGroup({
      'bagId': new FormControl(this.bagModel.bagId),
      'name': new FormControl(this.bagModel.name,
        [Validators.required, Validators.minLength(3), Validators.maxLength(25)],
        this.nameIsInUse.bind(this)),
      'shortDescription': new FormControl(this.bagModel.shortDescription,
        [Validators.required, Validators.maxLength(250)]),
      'longDescription': new FormControl(this.bagModel.longDescription, Validators.maxLength(500))
    });

    if (this.formMode == AppSettings.formModeDelete)
      this.errorService.disabledAllFormFields(this.bagForm, false);
  }

  private save() {
    if (this.bagForm.valid) {

      this.bagModel = new BagModel(this.bagForm.value);
      this.errors = [];

      this.bagService.save(this.bagModel)
        .subscribe(response => {
          this.notificationService.SuccessfullMessage('Bag Salva com sucesso', () => {
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
      this.errorService.validateAllFormFields(this.bagForm);
      this.notificationService.ErrorMessageBox('Some information need to be filled up.', () => {
      });
    }
  }

  private delete() {
    this.bagService.delete(this.bagForm.controls['BagId'].value).subscribe(() => {
       this.notificationService.SuccessfullMessage(
         'Registro excluído com sucesso.',  
         () => {
           this.navigateToList();
         });
     });
  }

  private navigateToList(){
    this.router.navigate(['/bag']);
  }

  nameIsInUse(control: FormControl): Promise<any> | Observable<any> {
    return this.bagService.VerifyNameIsInUse(control.value);
  }

}
