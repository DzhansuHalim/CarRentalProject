using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace DataAccess.Concrete.InMemory
{
    public class InMemoryCarDal : ICarDal
    {
        List<Car> _cars;

        public InMemoryCarDal() 
        {
            _cars = new List<Car>()
            {
                new Car
                {
                     CarId = 1,
                     BrandId = 1,
                     ColorId = 1,
                     ModelYear = 1987,
                     DailyPrice = 16.8,
                     DescriptionCar = "Wow"

                }
            };
        }

        public void Create(Car car)
        {
            _cars.Add(car);
        }

        public void Delete(Car car)
        {
            Car deleteCar = _cars.SingleOrDefault(c => c.CarId == car.CarId);
            _cars.Remove(deleteCar);
        }

        public Car Get(Expression<Func<Car, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public List<Car> GetAll(Expression<Func<Car, bool>> filter = null)
        {
            return _cars;
        }

        public Car GetById(int carId)
        {
            return _cars.SingleOrDefault(c => c.CarId == carId);
        }

        public Car GetById(Expression<Func<Car, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public void Update(Car car)
        {
            Car  updateCar = _cars.SingleOrDefault(c => c.CarId == car.CarId);
            updateCar.CarId = car.CarId;
            updateCar.BrandId = car.BrandId;
            updateCar.ColorId = car.ColorId;
            updateCar.DailyPrice = car.DailyPrice;
            updateCar.ModelYear = car.ModelYear;
            updateCar.DescriptionCar = car.DescriptionCar;

        }
    }
}
