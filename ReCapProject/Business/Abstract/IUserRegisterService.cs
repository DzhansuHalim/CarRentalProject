using Core.Entities.Concrete;
using Core.Utilities.Results.Abstract;
using Core.Utilities.Results.Concrete;
using Entities.DTO_s;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IUserRegisterService
    {
        List<OperationClaim> GetClaims(UserRegister user);
        IResult Add(UserRegister user);
        UserRegister GetByMail(string email);

        IResult Delete(UserRegister user);

        IDataResult<List<UserRegister>> GetAll();
        IDataResult<UserRegister> GetById(int id);
        IResult Update(UserRegister user);
    }
}
