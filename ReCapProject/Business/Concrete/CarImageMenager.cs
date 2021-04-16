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
            var resultUpload = FileHelper.Upload(file, FileConstants.FileImageExtensions, FileConstants.RescourceFolderName, FileConstants.ImageFolderName);
            if (!resultUpload.Item1.Success)
            {
                return resultUpload.Item1;
            }


            carImage.ImagePath = resultUpload.dbPath;
            carImage.UploadDate = DateTime.Now;

            _carImageDal.Create(carImage);
            return new SuccessResult();
        }


        public IResult Delete(IFormFile file, CarImage carImage)
        {
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
            var result = _carImageDal.GetAll(c => c.CarId == id);
            if (result.Count == 0)
            {
                result.Add(new CarImage { ImagePath = FileConstants.DefaultImagePath });
            }
            return new SuccessDataResult<List<CarImage>>(result);

        }

        public IResult Update(IFormFile file,CarImage carImage)
        {
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
    }
}
