using DataAccess.Abstract;
using Entities.Concrete;
using Core.DataAccess.Concrete.EntitiyFramework;
using Entities.DTO_s;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfCarDal : EfEntityRepositoryBase<Car, CarRentalContext>, ICarDal
    {
        public List<CarDetailDto> GetCarDetails()
        {
            using(CarRentalContext context = new CarRentalContext())
            {
                var result = from c in context.Cars
                             join b in context.Brands
                             on c.BrandId equals b.BrandId
                             join color in context.Colors
                             on c.ColorId equals color.ColorId
                             select new CarDetailDto
                             {
                                 CarId = c.CarId,
                                 CarDescription = c.DescriptionCar,
                                 BrandName = b.BrandName,
                                 ColorName = color.ColorName
                             };
                return result.ToList();

            }
        }
    }
}
