using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace loan_request_application_backend.Models
{
    public class Loan
    {
        [Key]
        [JsonPropertyName("loanId")]
        public int LoanId { get; set; }

        [JsonPropertyName("date")]
        [DataType(DataType.Date)]
        public string Date { get; set; }

        [Required]
        [JsonPropertyName("amount")]
        public double Amount { get; set; }

        [Required]
        [JsonPropertyName("loanTerm")]
        public int LoanTerm { get; set; }

        [Required]
        [JsonPropertyName("interestRate")]
        public int InterestRate { get; set; }

        [JsonPropertyName("customerID")]
        public int CustomerID { get; set; }
        [ForeignKey("CustomerID ")]
        public Customer Customer { get; set; }

        public Loan()
        {
            DateTime dateTime = DateTime.Today;
            string date = dateTime.ToString("yyyy/MM/dd");
            Date = date;
        }

    }
}
