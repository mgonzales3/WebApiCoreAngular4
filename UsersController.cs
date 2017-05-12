using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SampleCore.Models;
using Microsoft.AspNetCore.Mvc;
using SampleCore.Interfaces;

namespace SampleCore.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly IUser _repository;


        [HttpGet]
        public IEnumerable<User> GetUsers()
        {
            return _repository.GetUsers();
        }

        public UsersController(IUser repository)
        {
            _repository = repository;
        }
    }
}
