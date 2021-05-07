using Business.Abstract;
using Business.Constants;
using Core.Entities.Concrete;
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
    public class UserRegisterManager : IUserRegisterService
    {
        IUserRegisterDal _userDal;

        public UserRegisterManager(IUserRegisterDal userDal)
        {
            _userDal = userDal;
        }

        public List<OperationClaim> GetClaims(UserRegister user)
        {
            return _userDal.GetClaims(user);
        }

        public IResult Add(UserRegister user)
        {
            _userDal.Create(user);
            return new SuccessResult(Messages.UserAdded);

        }

        public UserRegister GetByMail(string email)
        {
            return _userDal.Get(u => u.Email == email);
        }

        public IResult Delete(UserRegister user)
        {
            _userDal.Delete(user);
            return new SuccessResult(Messages.UserDeleted); 
        }

        public IDataResult<List<UserRegister>> GetAll()
        {
            return new SuccessDataResult<List<UserRegister>>(_userDal.GetAll());
        }

        public IDataResult<UserRegister> GetById(int id)
        {
            return new SuccessDataResult<UserRegister>(_userDal.Get(u => u.Id == id));
        }

        public IResult Update(UserRegister user)
        {
            _userDal.Update(user);
            return new SuccessResult(Messages.UserUpdated);
        }

    }
}
