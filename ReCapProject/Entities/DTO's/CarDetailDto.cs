using Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.DTO_s
{
    public class CarDetailDto : IEntity
    {
        public int CarId { get; set; }
        public string BrandName { get; set; }
        public string CarDescription { get; set; }
        public string ColorName { get; set; } 

    }
}
