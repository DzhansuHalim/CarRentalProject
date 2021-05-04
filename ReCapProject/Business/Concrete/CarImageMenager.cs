using Business.Abstract;
using Business.Constants;
using Core.Utilities.Results.Abstract;
using Core.Utilities.Results.Concrete;
using DataAccess.Abstract;
using Core.Utilities.Business;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using Core.Utilities.Helper;
using System.Linq;

namespace Business.Concrete
{
    public class CarImageMenager : ICarImageService
    {
        ICarImageDal _carImageDal;

        public CarImageMenager(ICarImageDal carImageDal)
        {
            _carImageDal = carImageDal;
        }


        public IResult Create(IFormFile file, CarImage carImage)
        {
            IResult result = BusinessRules.Run(CheckIfCarImagesCountCorrect(carImage.CarId));

            if (result != null)
            {
                return result;
            }
            carImage.ImagePath = FileHelper.Add(file);
            carImage.UploadDate = DateTime.Now;
            _carImageDal.Create(carImage);
            return new SuccessResult();
        }


        public IResult Delete(IFormFile file, CarImage carImage)
        {
            FileHelper.Delete(carImage.ImagePath);
            _carImageDal.Delete(carImage);
            return new SuccessResult();

        }

        public IDataResult<List<CarImage>> GetAll()
        {
            return new SuccessDataResult<List<CarImage>>(_carImageDal.GetAll());
        }

        public IDataResult<CarImage> GetById(int id)
        {
            return new SuccessDataResult<CarImage>(_carImageDal.Get(c => c.CarImageId == id));
        }

        public IDataResult<List<CarImage>> GetImagesByCarId(int id)
        {
     
            return new SuccessDataResult<List<CarImage>>(CheckIfCarImageNull(id));

        }

        public IResult Update(IFormFile file,CarImage carImage)
        {
            carImage.ImagePath = FileHelper.Update(_carImageDal.Get(p => p.CarId == carImage.CarImageId).ImagePath, file);
            carImage.UploadDate = DateTime.Now;
            _carImageDal.Update(carImage);
            return new SuccessResult();

        }


        //Business code

        private IResult CheckIfCarImagesCountCorrect(int carid) 
        {
            var result = _carImageDal.GetAll(c => c.CarId == carid);
            if (result.Count >= 5)
            {
                return new ErrorResult(Messages.ImagesLimitExceded);
            }
            return new SuccessResult();
        }

        private List<CarImage> CheckIfCarImageNull(int id)
        {
            string path = @"default.jpg";
            var result = _carImageDal.GetAll(c => c.CarId == id).Any();
            if (!result)
            {
                return new List<CarImage> { new CarImage { CarId = id, ImagePath = path, UploadDate = DateTime.Now } };
            }
            return _carImageDal.GetAll(p => p.CarId == id);
        }

    }
}
