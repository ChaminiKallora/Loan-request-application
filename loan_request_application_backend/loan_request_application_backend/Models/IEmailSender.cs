using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace loan_request_application_backend.Models
{
    public interface IEmailSender
    {
        void SendEmail(EmailMessage message);
    }
}
