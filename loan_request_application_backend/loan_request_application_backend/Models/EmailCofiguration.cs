using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace loan_request_application_backend.Models
{
    public class EmailCofiguration
    {
        public string From { get; set; }
        public string SmtpServer { get; set; }
        public int Port { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
