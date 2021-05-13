using Business.Abstract;
using Business.BusinessAspects.Autofac;
using Business.Constants;
using Core.Utilities.Results.Abstract;
using Core.Utilities.Results.Concrete;
using DataAccess.Abstract;
using Entities.Concrete;
using Entities.DTO_s;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class CarManager : ICarService
    {
        ICarDal _carDal;
        ICarImageDal _carImageDal;
        IRentalDal _rentalDal;



        public CarManager(ICarDal carDal , ICarImageDal carImageDal, IRentalDal rentalDal)
        {
            _carDal = carDal;
            _carImageDal = carImageDal;
            _rentalDal = rentalDal;

        }

        [SecuredOperation("admin")]
        public IResult Create(Car car)
        {
            _carDal.Create(car);
            return new SuccessResult(Messages.CarAdded);
        }

        [SecuredOperation("admin")]
        public IResult Delete(Car car)
        {
            var deleteRentals = _rentalDal.GetAll(c => c.CarId == car.CarId);
            var deleteItems = _carImageDal.GetAll(c => c.CarId == car.CarId);

            if(deleteRentals != null)
            {
                foreach (var deleteRental in deleteRentals)
                {
                    _rentalDal.Delete(deleteRental);

                }
            }

            if( deleteItems != null)
            {
                foreach (var item in deleteItems)
                {
                    _carImageDal.Delete(item);

                }
            }

              _carDal.Delete(car);
            return new SuccessResult(Messages.CarDeleted);


        }

        public IDataResult<List<Car>> GetAll()
        {
            return new SuccessDataResult<List<Car>>( _carDal.GetAll());
        }

        public IDataResult<List<Car>> GetAllByBrandId(int brandId)
        {
            return new SuccessDataResult<List<Car>>(_carDal.GetAll(b => b.BrandId == brandId));
        }

        public IDataResult<List<Car>> GetAllByColorId(int colorId)
        {
            return new SuccessDataResult<List<Car>>(_carDal.GetAll(c => c.ColorId == colorId));
        }

        public IDataResult<Car> GetById(int id)
        {
            return new  SuccessDataResult<Car>(_carDal.Get(c => c.CarId == id));
        }

        public IDataResult<List<CarDetailDto>> GetCarDetails()
        {
            return new SuccessDataResult<List<CarDetailDto>>(_carDal.GetCarDetails());
        }

        public IDataResult<List<CarDetailDto>> GetCarDetailsById(int carId)
        {
            return new SuccessDataResult<List<CarDetailDto>>(_carDal.GetCarDetails(c => c.CarId == carId));
        }

        public IDataResult<List<CarDetailDto>> GetDetailsByBrandId(int brandId)
        {
            return new SuccessDataResult<List<CarDetailDto>>(_carDal.GetCarDetails(b => b.BrandId == brandId));
        }

        public IDataResult<List<CarDetailDto>> GetDetailsByColorId(int colorId)
        {
            return new SuccessDataResult<List<CarDetailDto>>(_carDal.GetCarDetails(c => c.ColorId == colorId));
        }

        [SecuredOperation("admin")]
        public IResult Update(Car car)
        {
            _carDal.Update(car);
            return new SuccessResult(Messages.CarUpdated);
        }

        public IDataResult<CarDetailDto> GetCarDetail(int carId)
        {
            return new SuccessDataResult<CarDetailDto>(_carDal.GetCarDetail(c => c.CarId == carId));
        }
    }
}
