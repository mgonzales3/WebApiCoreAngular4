using System;
using System.ComponentModel.DataAnnotations;

namespace SampleCore.Models
{

    public class SamplesViewModel : IEquatable<SamplesViewModel>
    {
        public int ID { get; set; }
        [Required]
        [StringLength(6, MinimumLength = 6)]
        public string Barcode { get; set; }
        public DateTime CreatedAt { get; set; }
        public string createdByUser { get; set; }
        public string labstatus { get; set; }

        public SamplesViewModel()
        { }

        public override string ToString()
        {
            return "ID: " + ID + "   CreatedBy: " + createdByUser;
        }

        public override bool Equals(object obj)
        {
            if (obj == null) return false;
            SamplesViewModel objAsSample = obj as SamplesViewModel;
            if (objAsSample == null) return false;
            else return Equals(objAsSample);
        }

        public override int GetHashCode()
        {
            return ID;
        }

        public bool Equals(SamplesViewModel other)
        {
            if (other == null) return false;
            return (this.ID.Equals(other.ID));
        }
    }

}
