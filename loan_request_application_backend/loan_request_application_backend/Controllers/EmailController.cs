using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using loan_request_application_backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace loan_request_application_backend.Controllers
{
    [Route("email")]
    [ApiController]
    public class EmailController : Controller
    {
        private readonly ApplicationDbContext _db;
        private readonly IEmailSender _emailSender;
        public EmailController(ApplicationDbContext db, IEmailSender emailSender)
        {
            _db = db;
            _emailSender = emailSender;
        }

        [HttpPost]
        public void Post(Customer customer)
        {
            string name = customer.Name;
            string content = "Hi " + name + ",\n\n Your loan request received successfully.";

            var message = new EmailMessage(new String[] { customer.Email }, "Loan Request received successfully.", content);
            _emailSender.SendEmail(message);
        }
    }
}
