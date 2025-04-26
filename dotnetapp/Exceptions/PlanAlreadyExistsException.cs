using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnetapp.Models;
using dotnetapp.Data;
using Microsoft.EntityFrameworkCore;
namespace dotnetapp.Exceptions
{

    public class PlanAlreadyExistsException : Exception
    {
        public PlanAlreadyExistsException(string message) : base(message)
        {
        }
    }
}