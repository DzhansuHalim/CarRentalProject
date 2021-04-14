using Core.Utilities.Results.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IColorService
    {
        //CRUD
        IResult Create(Color color);
        IDataResult<List<Color>> GetAll();
        IDataResult<Color> GetById(int id);
        IResult Update(Color color);
        IResult Delete(Color color); 
    }
}
