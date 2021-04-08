using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using loan_request_application_backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace loan_request_application_backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LoanController : Controller
    {
        private readonly ApplicationDbContext _db;
        public LoanController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET: loan
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Loan>>> GetLoansDetails()
        {
            return Json(new { status = 200, data = await _db.Loan.ToListAsync() });
        }

        // GET: loan/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Loan>> GetLoanDetail(int id)
        {
            var loan = await _db.Loan.FindAsync(id);

            if (loan == null)
            {
                return NotFound();
            }

            return Json(new { status = 200, data = loan });
        }

        // GET: loan/by-customer/1
        [HttpGet("by-customer/{id}")]
        public ActionResult<Loan> GetLoanDetailByCustomerId(int id)
        {
            var existingLoan = _db.Loan.FirstOrDefault(loan => loan.CustomerID == id);

            if (existingLoan == null)
            {
                return NotFound();
            }

            return Json(new { status = 200, data = existingLoan });
        }

        // PUT: loan/1
        [HttpPut("{id}")]
        public async Task<ActionResult<Loan>> UpdateLoanDetail(int id, Loan loan)
        {
            if (id != loan.LoanId)
            {
                return BadRequest();
            }
            else
            {
                try
                {
                    _db.Loan.Update(loan);
                    await _db.SaveChangesAsync();

                    return Json(new { status = 200, data = loan });
                }
                catch (Exception e)
                {
                    return Json(new { status = 500, data = "Error - " + e });
                }
            }
        }

        // POST: loan
        [HttpPost]
        public async Task<ActionResult<Loan>> addLoan(Loan loan)
        {
                _db.Loan.Add(loan);
                await _db.SaveChangesAsync();

                return Json(new { status = 201, data = loan });
        }

        // POST: loan/calculateLoan
        [HttpPost]
        [Route("[action]")]
        public ActionResult<Loan> CalculateLoan(Loan loan)
        {
            var numberOfPayments = loan.LoanTerm;
            var rateOfInterest = (float)loan.InterestRate / 1200;

            // calculate the interest, loan installment and capital payment
            var interest = rateOfInterest * loan.Amount;
            var paymentAmount = interest / (1 - Math.Pow(1 + rateOfInterest, numberOfPayments * -1));
            var capitalPayment = paymentAmount - interest;

            return Json(new { status = 200, capitalPayment = Math.Round((Double)capitalPayment, 2), interest = Math.Round((Double)interest, 2), loanInstallment = Math.Round((Double)paymentAmount, 2) });
        }

        // DELETE: loan/1
        [HttpDelete("{id}")]
        public async Task<ActionResult<Loan>> DeleteLoan(int id)
        {
            var loan = await _db.Loan.FindAsync(id);
            if (loan == null)
            {
                return NotFound();
            }

            _db.Loan.Remove(loan);
            await _db.SaveChangesAsync();

            return Json(new { status = 200, data = loan });
        }
    }
}
