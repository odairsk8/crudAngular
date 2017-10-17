import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderFormComponent } from './../order-form/order-form.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @ViewChild(OrderFormComponent) 
  form: OrderFormComponent;

  constructor() { }

  ngOnInit() {
  }

  save(){
    console.log(this.form.getValue());
  };

}
