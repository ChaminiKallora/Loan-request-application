import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpRequestsService } from 'src/app/shared-services/http/http-requests.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../shared-services/dialog-box/dialog-box.component';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customerForm: FormGroup;
  currentDate = new Date();
  date: any;

  constructor(
    private formBuilder: FormBuilder,
    private httpReq: HttpRequestsService,
    private router: Router,
    public dialog: MatDialog, ) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'dob': ['', [Validators.required]],
      'nic': ['', [Validators.required]],
      'email': ['', [Validators.required, Validators.email]],
      'phoneNumber': ['', [Validators.required]],
      'loanReason': ['', [Validators.required]],
    });
  }

  openDialog() {
    this.dialog.open(DialogBoxComponent,
      {
        data: {
          title: "You have already requested a loan.",
          content: "Sorry. Can't request more than one loan."
        }
      });
  }

  openDialogAge() {
    this.dialog.open(DialogBoxComponent,
      {
        data: {
          title: "Not allowed",
          content: "Sorry. Personal loans are allowed only for users above 18 years."
        }
      });
  }

  openDialogEmail() {
    this.dialog.open(DialogBoxComponent,
      {
        data: {
          title: "Success",
          content: "Your success message has been sent to your email."
        }
      });
  }

  addCustomer() {
    // calculate age
    var age = Math.round((Date.now() - this.customerForm.value.dob) / (1000 * 60 * 60 * 24));
    age = age / 365;

    // change date picker format to YYYY/MM/DD
    const formattedDate = moment(this.customerForm.value.dob).format("YYYY/MM/DD");
    this.customerForm.get('dob').setValue(formattedDate);

    //check age
    if (age < 18) {
      this.openDialogAge();
    }
    else {
      //add customer details
      this.httpReq.registerCustomer(this.customerForm.value)
        .subscribe(
          res => {
            // check customers who have reqested loans before
            if (res.status == 409) {
              this.openDialog();
            } else {

              var loanAmount = localStorage.getItem('LOAN_AMOUNT');
              var loanInterestRate = localStorage.getItem('LOAN_INTERESTRATE');
              var loanTerm = localStorage.getItem('LOAN_TERM');

              var loan = {
                amount: loanAmount,
                loanTerm: loanTerm,
                interestRate: loanInterestRate,
                customerID: res.data.customerId
              }

              //add loan
              this.httpReq.addLoan(loan)
                .subscribe(
                  res2 => {
                    console.log(res);
                    console.log(res.data.customerId);
                    this.router.navigate(['/view-request/', + res.data.customerId]);

                    //send email 
                    this.httpReq.sendEmail(this.customerForm.value)
                      .subscribe(
                        res3 => {
                          this.openDialogEmail();
                        },
                        err => {
                          console.log(err);
                        }
                      )
                  },
                  err => {
                    console.log(err);
                  }
                )
            }
          },
          err => {
            console.log(err);
          }
        )
    }
  }

}
