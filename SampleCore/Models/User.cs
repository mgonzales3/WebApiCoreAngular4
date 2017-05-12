using System;
using SampleCore.Core;


namespace SampleCore.Models  
{
    public class User : Entity<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public override string ToString()
        {
            return FirstName + ' ' + LastName;
        }
        public User(int id)
        {            
             Id = id;
        }
    }
       
}