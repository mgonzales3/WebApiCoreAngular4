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
    public class SamplesController : Controller 
    {
        private readonly ISample _repository;

        [HttpGet]        
        public IEnumerable<SamplesViewModel> GetSamples()
        {
            return _repository.GetAllSamples();
        }
                
        [HttpGet("status/{id}", Name = "SamplesByStatus")]        
        public IEnumerable<SamplesViewModel> GetSamplesByStatus(int id)
        {
            return _repository.GetSamplesByStatus(id);
        }
        
        [HttpGet("user/{user}", Name = "SamplesByUserSearch")]
        public IEnumerable<SamplesViewModel> GetSamplesByUserSearch(string user)
        {
            return _repository.GetSamplesByUser(user);
        }

        [HttpPost]
        public IActionResult Post([FromBody]SamplesViewModel newsample)
        {
            if(ModelState.IsValid)
            {
                //return Created($"api/samples/{newsample.Barcode}", newsample);                
                return Ok(true);
            }

            return BadRequest("Bad data");

        }
        public SamplesController(ISample repository)
        {
            _repository = repository;
        }
    }
}
