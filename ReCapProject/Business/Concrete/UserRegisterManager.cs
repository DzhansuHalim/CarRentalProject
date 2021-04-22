using Business.Abstract;
using Core.Entities.Concrete;
using Core.Utilities.Results.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
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

        public void Add(UserRegister user)
        {
            _userDal.Create(user);
        }

        public UserRegister GetByMail(string email)
        {
            return _userDal.Get(u => u.Email == email);
        }
    }
}
