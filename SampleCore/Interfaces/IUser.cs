using System;
using System.Collections.Generic;
using SampleCore.Models;


namespace SampleCore.Interfaces
{
    public interface IUser
    {
        IEnumerable<User> GetUsers();
    }
}
