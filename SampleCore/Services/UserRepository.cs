using System;
using System.Collections.Generic;
using System.Linq;
using SampleCore.Models;
using SampleCore.Interfaces;
using System.IO;

namespace SampleCore.Services
{
    public class UserRepository : IUser
    {
        public IEnumerable<User> GetUsers()
        {
            return GetAll();
        }

        private IEnumerable<User> GetAll()
        {
            FileInfo fs = new FileInfo(AppContext.BaseDirectory + @"\Services\Users.txt");

            IEnumerable<User> Users = File.ReadAllLines(fs.FullName)
               .Select(l => l.Split(' '))
               .Select(m => new User(Convert.ToInt32(m[0].ToString().Split(new char[] { ',' })[0])) { FirstName = m[0].ToString().Split(new char[] { ',' })[1], LastName = m[0].ToString().Split(new char[] { ',' })[2] })
               .ToList<User>();

            return Users;
        }
    }
}
