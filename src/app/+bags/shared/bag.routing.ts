import { AppSettings } from './../../shared/settings/app-settings';
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";

import { BagListComponent } from '../bag-list/bag-list.component';
import { BagFormComponent } from '../bag-form/bag-form.component';

export const routes: Routes = [
  {
    path: '',
    data: {pageTitle: 'Bags List'},
    component: BagListComponent
  },
  {
    path: 'new',
    data: {pageTitle: 'New bag', formMode: AppSettings.formModeNew},
    component: BagFormComponent
  },
  {
    path: 'edit/:id',
    data: {pageTitle: 'Editing bag', formMode: AppSettings.formModeEdit },
    component: BagFormComponent
  },
  {
    path: 'delete/:id',
    data: {pageTitle: 'Deleting bag', formMode: AppSettings.formModeDelete },
    component: BagFormComponent
  },
];

export const routing = RouterModule.forChild(routes);
