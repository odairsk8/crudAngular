import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { OrderModel } from './../shared/order.model';
import { ErrorService } from './../../shared/utils/error.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  form: FormGroup;
  model: OrderModel = new OrderModel({ });

  constructor(private errorService: ErrorService) { }

  ngOnInit() {
    this.initialiseForm();
  }

  public initialiseForm() {
    this.form = new FormGroup({
      'customerId': new FormControl(this.model.customer.customerId)
    });
  }

  public getValue() {
    return this.form.value;
  }

  public isValid() {
    return this.form.valid;
  }

  public disableFields() {
    this.errorService.disabledAllFormFields(this.form, false);
  }

}
