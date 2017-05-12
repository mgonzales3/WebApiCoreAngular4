using System;
using System.Collections.Generic;
using SampleCore.Models;

namespace SampleCore.Interfaces
{
    public interface ISample
    {
        IEnumerable<SamplesViewModel> GetAllSamples();
        IEnumerable<SamplesViewModel> GetSamplesByStatus(int value);
        IEnumerable<SamplesViewModel> GetSamplesByUser(string user);
        Boolean CreateSample(SamplesViewModel newSample);
    }
}
