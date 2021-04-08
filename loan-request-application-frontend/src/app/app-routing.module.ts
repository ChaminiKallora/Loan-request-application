import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { ViewLoanRequestComponent } from './view-loan-request/view-loan-request.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'loan',
    component: LoanComponent
  },
  {
    path: 'customer',
    component: CustomerDetailsComponent
  },
  {
    path: 'view-request/:id',
    component: ViewLoanRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
