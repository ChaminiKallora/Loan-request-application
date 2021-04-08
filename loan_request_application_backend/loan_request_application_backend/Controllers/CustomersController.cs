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
    public class CustomersController : Controller
    {
        private readonly ApplicationDbContext _db;
        public CustomersController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET: customer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomersDetails()
        {
            return Json(new { status = 200, data = await _db.Customer.ToListAsync() });
        }

        // GET: customer/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> GetCustomerDetail(int id)
        {
            var customer = await _db.Customer.FindAsync(id);

            if (customer == null)
            {
                return NotFound();
            }

            return Json(new { status = 200, data = customer });
        }

        // PUT: customer/1
        [HttpPut("{id}")]
        public async Task<ActionResult<Customer>> UpdateCustomerDetail(int id, Customer customer)
        {
            if (id != customer.CustomerId)
            {
                return BadRequest();
            }
            else
            {
                try
                {
                    _db.Customer.Update(customer);
                    await _db.SaveChangesAsync();

                    return Json(new { status = 200, data = customer });
                }
                catch (Exception e) 
                {
                    return Json(new { status = 500, data = "Error - " + e });
                }
            }
        }

        // POST: customer
        [HttpPost]
        public async Task<ActionResult<Customer>> addCustomer(Customer customer)
        {
            var existing = _db.Customer.FirstOrDefault(cus => cus.NIC == customer.NIC);

            if (existing == null)
            {
                try
                {
                    _db.Customer.Add(customer);
                }
                catch (Exception e) {
                    Console.WriteLine();
                    Console.ReadLine();
                }
                await _db.SaveChangesAsync();

                return Json(new { status = 201, data = customer });
            }
            else
                return Json(new { status = 409, data = existing });
        }

        // DELETE: customer/1
        [HttpDelete("{id}")]
        public async Task<ActionResult<Customer>> DeleteCustomer(int id)
        {
            var customer = await _db.Customer.FindAsync(id);
            if (customer == null)
            {
                return NotFound();
            }

            _db.Customer.Remove(customer);
            await _db.SaveChangesAsync();

            return Json(new { status = 200, data = customer });
        }

    }
}
