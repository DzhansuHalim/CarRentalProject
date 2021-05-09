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
using System.IO;

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
            return new SuccessResult(Messages.CreatedImage);
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
            IResult imageResult = BusinessRules.Run(CheckIfCarImageImageCountNull(id));
            if (imageResult != null)
            {
                string path = @"\Images\default.jpg";
                List<CarImage> carImage = new List<CarImage>();
                carImage.Add(new CarImage { CarId = id, ImagePath = path, UploadDate = DateTime.Now });
                return new SuccessDataResult<List<CarImage>>(carImage);

            }
            return new SuccessDataResult<List<CarImage>>(CheckIfCarImageNull(id));

        }

        public IResult Update(IFormFile file,CarImage carImage)
        {
            ////carImage.ImagePath = FileHelper.Update(_carImageDal.Get(p => p.CarId == carImage.CarImageId).ImagePath, file);
            //var oldPath = Path.GetFullPath(Path.Combine(AppContext.BaseDirectory, "..\\..\\..\\wwwroot")) + _carImageDal.Get(p => p.CarId == carImage.CarId).ImagePath;

            //carImage.ImagePath = FileHelper.Update(oldPath, file);
            //carImage.UploadDate = DateTime.Now;
            //_carImageDal.Update(carImage);
            //return new SuccessResult();

            IResult result = BusinessRules.Run(CheckIfCarImagesCountCorrect(carImage.CarId));
            if (result != null)
            {
                return result;
            }
            carImage.ImagePath = FileHelper.Update(_carImageDal.Get(c => c.CarImageId == carImage.CarImageId).ImagePath, file);
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
            //string path = @"default.jpg";
            //var result = _carImageDal.GetAll(c => c.CarId == id).Any();
            //if (!result)
            //{
            //    return new List<CarImage> { new CarImage { CarId = id, ImagePath = path, UploadDate = DateTime.Now } };
            //}

            var result = _carImageDal.GetAll(c => c.CarId == id).Any();
            if (!result)
            {
                List<CarImage> carimage = new List<CarImage>();
                carimage.Add(new CarImage { CarId = id, ImagePath = @"\Images\default.jpg" });
                return new List<CarImage>(carimage);
            }

            return _carImageDal.GetAll(p => p.CarId == id);
        }


        private IDataResult<List<CarImage>> CheckIfCarImageImageCountNull(int carId)
        {

            var result = _carImageDal.GetAll(c => c.CarId == carId).Any();
            if (!result)
            {
                return new ErrorDataResult<List<CarImage>>("Error");
            }

            return new SuccessDataResult<List<CarImage>>();
        }

    }
}
