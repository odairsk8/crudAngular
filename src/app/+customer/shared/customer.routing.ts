import { AppSettings } from './../../shared/settings/app-settings';
import { CustomerFormComponent } from './../customer-form/customer-form.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './../customer-list/customer-list.component';


const routes: Routes = [
  {
    path: '',
    data: {pageTitle: 'Customer List'},
    component: CustomerListComponent
  },
  {
    path: 'new',
    data: {pageTitle: 'New customer', formMode: AppSettings.formModeNew},
    component: CustomerFormComponent
  },
  {
    path: 'edit/:id',
    data: {pageTitle: 'Editing customer', formMode: AppSettings.formModeEdit },
    component: CustomerFormComponent
  },
  {
    path: 'delete/:id',
    data: {pageTitle: 'Deleting customer', formMode: AppSettings.formModeDelete },
    component: CustomerFormComponent
  },
];

export const CustomerRoutes = RouterModule.forChild(routes);
