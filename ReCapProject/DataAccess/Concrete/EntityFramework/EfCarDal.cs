using DataAccess.Abstract;
using Entities.Concrete;
using Core.DataAccess.Concrete.EntitiyFramework;
using Entities.DTO_s;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using System.Linq.Expressions;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfCarDal : EfEntityRepositoryBase<Car, CarRentalContext>, ICarDal
    {
        public CarDetailDto GetCarDetail(Expression<Func<CarDetailDto, bool>> filter = null)
        {
            using (CarRentalContext context = new CarRentalContext())
            {
                var result = from c in context.Cars
                             join b in context.Brands on c.BrandId equals b.BrandId
                             join clr in context.Colors on c.ColorId equals clr.ColorId

                             select new CarDetailDto
                             {
                                 CarId = c.CarId,
                                 CarDescription = c.DescriptionCar,
                                 BrandName = b.BrandName,
                                 BrandId = b.BrandId,
                                 ColorId = clr.ColorId,
                                 ColorName = clr.ColorName,
                                 ModelYear = c.ModelYear, 
                                 DailyPrice = c.DailyPrice,
                                 CarImage = (from i in context.CarImages
                                             where (c.CarId == i.CarId)
                                             select i.ImagePath).FirstOrDefault()
                             };
                return result.SingleOrDefault(filter);

            }
        }

        public List<CarDetailDto> GetCarDetails(Expression<Func<CarDetailDto, bool>> filter = null)
        {
            using(CarRentalContext context = new CarRentalContext())
            {
                var result = from c in context.Cars
                             join b in context.Brands on c.BrandId equals b.BrandId
                             join clr in context.Colors on c.ColorId equals clr.ColorId

                             select new CarDetailDto
                             {
                                 CarId = c.CarId,
                                 CarDescription = c.DescriptionCar,
                                 BrandName = b.BrandName,
                                 BrandId = b.BrandId,
                                 ColorId = clr.ColorId,
                                 ColorName = clr.ColorName,
                                 ModelYear = c.ModelYear,
                                 DailyPrice = c.DailyPrice,
                                 CarImage = (from i in context.CarImages
                                             where (c.CarId == i.CarId)
                                             select i.ImagePath).FirstOrDefault()
                             };
                return filter == null ? result.ToList() : result.Where(filter).ToList();

            }
        }

        
    }
}
