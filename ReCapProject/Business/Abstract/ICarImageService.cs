using Core.Utilities.Results.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using System.Text;

namespace Business.Abstract
{
    public interface ICarImageService
    {
        //CRUD
        IResult Create(IFormFile file, CarImage carImage);
        IDataResult<List<CarImage>> GetAll();
        IDataResult<CarImage> GetById(int id);
        IDataResult<List<CarImage>> GetImagesByCarId(int id);
        IResult Update(IFormFile file, CarImage carImage);
        IResult Delete(IFormFile file, CarImage carImage);
    }
}
