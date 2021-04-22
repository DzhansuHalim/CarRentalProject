using Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Abstract
{
    public interface IUserRegisterService
    {
        List<OperationClaim> GetClaims(UserRegister user);
        void Add(UserRegister user);
        UserRegister GetByMail(string email);
    }
}
