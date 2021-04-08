import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpRequestsService } from 'src/app/shared-services/http/http-requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  loanForm: FormGroup;
  capitalAmount: any;
  interest: any;
  loanInstallment: any;

  constructor(
    private formBuilder: FormBuilder,
    private httpReq: HttpRequestsService,
    private router: Router) { }

  ngOnInit(): void {
    this.loanForm = this.formBuilder.group({
      'amount':['', [Validators.required]],
      'loanTerm':['', [Validators.required]],
      'interestRate':['', [Validators.required]]
    });
  }

  loanCalculate(){
    this.httpReq.calculateLoan(this.loanForm.value)
      .subscribe(
        res => {
          console.log(res);
          this.capitalAmount = res.capitalPayment;
          this.interest = res.interest;
          this.loanInstallment = res.loanInstallment
        }, 
        err => {
          console.log("Error - " + err);
        }
      )
  }

  loanRequest(){
    console.log("this.loanForm.value");
    localStorage.setItem("LOAN_AMOUNT", this.loanForm.value.amount);
    localStorage.setItem("LOAN_INTERESTRATE", this.loanForm.value.interestRate);
    localStorage.setItem("LOAN_TERM", this.loanForm.value.loanTerm);
    this.router.navigate(['/customer']);
  }

}
