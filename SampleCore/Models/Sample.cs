using System;
using System.Collections.Generic;
using System.Linq;
using SampleCore.Core;
using System.IO;
using System.Text;
using Microsoft.Extensions.Logging;
using System.ComponentModel.DataAnnotations;

namespace SampleCore.Models
{
    public class Sample : Entity<int>
    {
        public string Barcode { get; set; }
        public DateTime CreatedAt { get; set; }
        public int CreatedBy { get; set; }
        public int status { get; set; }

        public Sample()
        { }
        public Sample(int id)
        {
            Id = id;
        }
    }    
}