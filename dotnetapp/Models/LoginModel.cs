using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace dotnetapp.Models
{
    public class LoginModel
    {
        


        [Required]
        [EmailAddress]
<<<<<<< HEAD
        public string Email { get; set; }
=======
        public string? Email { get; set; }
>>>>>>> 04d3539a76545b9ca4205aee6010c4fb3771e946

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
