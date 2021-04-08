import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';

import { HeaderComponent } from './shared-services/header/header.component';
import { FooterComponent } from './shared-services/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { ViewLoanRequestComponent } from './view-loan-request/view-loan-request.component';
import { DialogBoxComponent } from './shared-services/dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoanComponent,
    ViewLoanRequestComponent,
    DialogBoxComponent
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
