import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { SmartadminModule } from './../shared/smartadmin.module';
import { SmartadminDatatableModule } from './../shared/ui/datatable/smartadmin-datatable.module';
import { SmartadminInputModule } from './../shared/forms/input/smartadmin-input.module';
import { SmartadminValidationModule } from './../shared/forms/validation/smartadmin-validation.module';

import { BagModule } from './../+bags/bag.module';
import { CustomerModule } from './../+customer/customer.module';

import { OrderRoutes } from './shared/order.routing';

import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderFormComponent } from './order-form/order-form.component';

import { OrderService } from './shared/order.service';
import { OrderDetailsItemsComponent } from './order-details-items/order-details-items.component';

@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      SmartadminModule,
      SmartadminDatatableModule,
      SmartadminValidationModule,
      SmartadminInputModule,
  
      OrderRoutes
    ],
    declarations: [
        OrderListComponent,
        OrderDetailsComponent,
        OrderFormComponent,
    OrderDetailsItemsComponent
],
    providers: [OrderService],
  })
  export class OrderModule {
  
  }