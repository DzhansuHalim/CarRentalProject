using Core.DataAccess.Abstract;
using Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccess.Abstract
{
    public interface IUserRegisterDal : IEntityRepository<UserRegister>
    {
        List<OperationClaim> GetClaims(UserRegister userRegister);
    }
}
