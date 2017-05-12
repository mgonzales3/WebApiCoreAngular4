using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;
using System.Text;
using SampleCore.Models;
using Microsoft.Extensions.Logging;
using SampleCore.Interfaces;

namespace SampleCore.Services
{
    public class SampleRepository : ISample
    {
        public IEnumerable<SamplesViewModel> GetAllSamples()
        {
            return AllSamples();
        }

        public IEnumerable<SamplesViewModel> GetSamplesByStatus(int value)
        {
            return SamplesByStatus(value);
        }

        public IEnumerable<SamplesViewModel> GetSamplesByUser(string user)
        {
            return SamplesByUserSearch(user);
        }

        public bool CreateSample(SamplesViewModel newSample)
        {
            throw new NotImplementedException();
        }

        List<Sample> samples;
        private readonly ILogger _logger;

        private IEnumerable<Sample> BaseData()
        {
            FileInfo fsSamples = new FileInfo(AppContext.BaseDirectory + @"\Services\Samples.txt");
            List<Sample> Samples = File.ReadAllLines(fsSamples.FullName)
                .Select(l => l.Split(' '))
                .Select(m => new Sample(Convert.ToInt32(m[0].ToString().Split(new char[] { ',' })[0])) { Barcode = m[0].ToString().Split(new char[] { ',' })[1], CreatedAt = Convert.ToDateTime(m[0].ToString().Split(new char[] { ',' })[2]), CreatedBy = Convert.ToInt32(m[0].ToString().Split(new char[] { ',' })[3]), status = Convert.ToInt32(m[0].ToString().Split(new char[] { ',' })[4]) })
                .ToList<Sample>();

            return Samples;
        }

        private IEnumerable<SamplesViewModel> AllSamples()
        {
            List<SamplesViewModel> mret = new List<SamplesViewModel>();

            if (samples == null)
            {
                samples = new List<Sample>(BaseData());
            }

            foreach (var item in samples)
            {
                SamplesViewModel l = new SamplesViewModel();

                l.ID = item.Id;
                l.Barcode = item.Barcode;
                l.CreatedAt = item.CreatedAt;
                l.createdByUser = GetUser(item.CreatedBy);
                l.labstatus = GetStatus(item.status);
                mret.Add(l);
            }


            return mret;
        }

        private IEnumerable<SamplesViewModel> SamplesByStatus(int value)
        {
            List<SamplesViewModel> mret = new List<SamplesViewModel>();

            if (samples == null)
            {
                samples = new List<Sample>(BaseData());
                samples = samples.Where(l => l.status == value).ToList();
            }
            else
            {
                samples = samples.Where(l => l.status == value).ToList();
            }


            foreach (var item in samples)
            {
                SamplesViewModel l = new SamplesViewModel();

                l.ID = item.Id;
                l.Barcode = item.Barcode;
                l.CreatedAt = item.CreatedAt;
                l.createdByUser = GetUser(item.CreatedBy);
                l.labstatus = GetStatus(item.status);
                mret.Add(l);
            }

            return mret;
        }

        private IEnumerable<SamplesViewModel> SamplesByUserSearch(string user)
        {
            List<SamplesViewModel> mret = new List<SamplesViewModel>();

            samples = new List<Sample>(BaseData());

            foreach (var item in samples)
            {
                SamplesViewModel l = new SamplesViewModel();

                l.ID = item.Id;
                l.Barcode = item.Barcode;
                l.CreatedAt = item.CreatedAt;
                l.createdByUser = GetUser(item.CreatedBy).ToUpper();
                l.labstatus = GetStatus(item.status);
                mret.Add(l);
            }

            mret = mret.FindAll(l => l.createdByUser.Split(new char[] { ' ' })[0].Equals(user.ToUpper()) || l.createdByUser.Split(new char[] { ' ' })[1].Equals(user.ToUpper()));

            return mret;
        }

        private bool InsertSample(SamplesViewModel sample)
        {
            bool mret = false;
            DateTime today = new DateTime();
            FileInfo fsSamples = new FileInfo(AppContext.BaseDirectory + @"\Services\Samples.txt");
            StringBuilder s = new StringBuilder();
            if (samples == null)
            {
                samples = new List<Sample>(BaseData());
            }

            s.Append(samples.Count + 1 + ',');
            s.Append(sample.Barcode + ',');
            s.Append(today.ToString() + ',');
            s.Append(GetUser(sample.createdByUser) + ',');
            s.Append('0');

            try
            {
                using (Stream stream = File.Open(fsSamples.FullName, FileMode.Append))
                {
                    byte[] newrecord = Encoding.ASCII.GetBytes(s.ToString());
                    stream.Write(newrecord, 0, newrecord.Length);
                }

                mret = true;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }

            return mret;
        }

        private string GetStatus(int value)
        {
            Status enumDisplayStatus = (Status)value;
            return enumDisplayStatus.ToString();
        }

        private string GetUser(int value)
        {
            string user = string.Empty;
            User u = null;
            FileInfo fsUsers = new FileInfo(AppContext.BaseDirectory + @"\Services\Users.txt");
            List<User> Users = File.ReadAllLines(fsUsers.FullName)
               .Select(l => l.Split(' '))
               .Select(m => new User(Convert.ToInt32(m[0].ToString().Split(new char[] { ',' })[0])) { FirstName = m[0].ToString().Split(new char[] { ',' })[1], LastName = m[0].ToString().Split(new char[] { ',' })[2] })
               .ToList<User>();

            u = Users.Find(s => s.Id == value);

            return u.ToString();
        }

        private int GetUser(string value)
        {
            string user = string.Empty;
            User u = null;
            FileInfo fsUsers = new FileInfo(AppContext.BaseDirectory + @"\Services\Users.txt");
            List<User> Users = File.ReadAllLines(fsUsers.FullName)
               .Select(l => l.Split(' '))
               .Select(m => new User(Convert.ToInt32(m[0].ToString().Split(new char[] { ',' })[0])) { FirstName = m[0].ToString().Split(new char[] { ',' })[1], LastName = m[0].ToString().Split(new char[] { ',' })[2] })
               .ToList<User>();

            u = Users.Find(s => s.FirstName.Contains(value) || s.LastName.Contains(value));

            return u.Id;
        }

    }
}
