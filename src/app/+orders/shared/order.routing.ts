import { Routes, RouterModule } from '@angular/router';

import { AppSettings } from './../../shared/settings/app-settings';
import { OrderDetailsComponent } from './../order-details/order-details.component';
import { OrderListComponent } from './../order-list/order-list.component';

const routes: Routes = [
  {
    path: '',
    data: {pageTitle: 'Order List'},
    component: OrderListComponent
  },
  {
    path: 'new',
    data: {pageTitle: 'New order', formMode: AppSettings.formModeNew},
    component: OrderDetailsComponent
  },
  {
    path: 'edit/:id',
    data: {pageTitle: 'Editing order', formMode: AppSettings.formModeEdit },
    component: OrderDetailsComponent
  },
  {
    path: 'delete/:id',
    data: {pageTitle: 'Deleting order', formMode: AppSettings.formModeDelete },
    component: OrderDetailsComponent
  },
];

export const OrderRoutes = RouterModule.forChild(routes);
