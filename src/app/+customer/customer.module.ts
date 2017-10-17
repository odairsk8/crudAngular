import { CustomerService } from './shared/customer.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SmartadminModule } from '../shared/smartadmin.module'
import { SmartadminDatatableModule } from './../shared/ui/datatable/smartadmin-datatable.module';
import {NotificationService} from "../shared/utils/notification.service";

import { CustomerListComponent } from './customer-list/customer-list.component';

import { CustomerRoutes } from './shared/customer.routing';

import { UrlService } from './../shared/http/url.service';
import { ErrorService } from './../shared/utils/error.service';
import { CustomerFormComponent } from './customer-form/customer-form.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SmartadminModule,
    SmartadminDatatableModule,

    CustomerRoutes,

    
  ],
  declarations: [
    CustomerListComponent,
    CustomerFormComponent
],
  providers: [CustomerService],
})
export class CustomerModule {

}

