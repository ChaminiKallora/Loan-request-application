import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoanRequestComponent } from './view-loan-request.component';

describe('ViewLoanRequestComponent', () => {
  let component: ViewLoanRequestComponent;
  let fixture: ComponentFixture<ViewLoanRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLoanRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoanRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
