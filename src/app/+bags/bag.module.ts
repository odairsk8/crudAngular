
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SmartadminModule } from '../shared/smartadmin.module'
import { SmartadminDatatableModule } from './../shared/ui/datatable/smartadmin-datatable.module';
import {NotificationService} from "../shared/utils/notification.service";


import { routing } from './shared/bag.routing';

import { BagListComponent } from './bag-list/bag-list.component';
import { BagFormComponent } from './bag-form/bag-form.component';

import { UrlService } from './../shared/http/url.service';
import { BagService } from './shared/bag.service';
import { ErrorService } from './../shared/utils/error.service';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SmartadminModule,
    SmartadminDatatableModule,

    routing,
  ],
  declarations: [
    BagListComponent,
    BagFormComponent
  ],
  providers: [BagService],
})
export class BagModule {

}

