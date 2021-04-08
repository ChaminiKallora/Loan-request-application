import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpRequestsService } from 'src/app/shared-services/http/http-requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-loan-request',
  templateUrl: './view-loan-request.component.html',
  styleUrls: ['./view-loan-request.component.css']
})
export class ViewLoanRequestComponent implements OnInit {

  id: any;
  customer: any;
  loan: any;

  constructor(
    private route: ActivatedRoute,
    private httpReq: HttpRequestsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    this.httpReq.getCustomer(this.id)
      .subscribe(
        res => {
          this.customer = res.data;
        },
        err => {
          console.log(err);
        }
      )

    this.httpReq.getLoanByCustomer(this.id)
      .subscribe(
        res => {
          this.loan = res.data;
        },
        err => {
          console.log(err);
        }
      ) 
  }

}
