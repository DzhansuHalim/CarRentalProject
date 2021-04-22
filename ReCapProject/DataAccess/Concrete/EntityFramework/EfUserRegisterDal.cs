using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Core.DataAccess.Concrete.EntitiyFramework;
using Core.Entities.Concrete;
using DataAccess.Abstract;
using Entities.Concrete;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfUserRegisterDal : EfEntityRepositoryBase<UserRegister, CarRentalContext>,IUserRegisterDal
    {
        public List<OperationClaim> GetClaims(UserRegister user)
        {
            using (var context = new CarRentalContext())
            {
                var result = from operationClaim in context.OperationClaims
                             join userOperationClaim in context.UserOperationClaims
                                 on operationClaim.Id equals userOperationClaim.OperationClaimId
                             where userOperationClaim.UserId == user.Id
                             select new OperationClaim { Id = operationClaim.Id, Name = operationClaim.Name };
                return result.ToList();

            }
        }
    }
}
