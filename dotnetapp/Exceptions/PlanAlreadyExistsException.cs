using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
<<<<<<< HEAD

namespace dotnetapp.Exceptions
{
    public class PlanAlreadyExistsException
    {
        
=======
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
>>>>>>> ce1b8d34e2a787eb8fc079f47814a350d7854e18
    }
}