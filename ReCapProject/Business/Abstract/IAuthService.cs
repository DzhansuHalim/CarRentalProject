using Core.Entities.Concrete;
using Core.Utilities.Results.Abstract;
using Core.Utilities.Security.JWT;
using Entities.DTO_s;

namespace Business.Abstract
{
    public interface IAuthService
    {
        IDataResult<UserRegister> Register(UserForRegisterDto userForRegisterDto, string password);
        IDataResult<UserRegister> Login(UserForLoginDto userForLoginDto);
        IResult UserExists(string email);
        IDataResult<AccessToken> CreateAccessToken(UserRegister user);
    }
}
