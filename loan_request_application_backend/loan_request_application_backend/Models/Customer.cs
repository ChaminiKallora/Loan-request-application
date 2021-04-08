 using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace loan_request_application_backend.Models
{
    public class Customer
    {
        [Key]
        [JsonPropertyName("customerId")]
        public int CustomerId { get; set; }

        [Required]
        [JsonPropertyName("name")]
        [StringLength(60, MinimumLength = 3)]
        public string Name { get; set; }

        [Required]
        [JsonPropertyName("dob")]
        [DataType(DataType.Date)]
        public string DOB { get; set; }
        
        [Required]
        [JsonPropertyName("nic")]
        [RegularExpression(@"(.{10})", ErrorMessage = "This field must be 10 characters")]
        public string NIC { get; set; }

        [Required]
        [JsonPropertyName("email")]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [JsonPropertyName("phoneNumber")]
        [Phone]
        public string PhoneNumber { get; set; }

        [Required]
        [JsonPropertyName("loanReason")]
        [StringLength(1000, ErrorMessage = "Can't have more than 1000.")]
        public string LoanReason { get; set; }
    }
}
