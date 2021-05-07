using Business.Abstract;
using Core.Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        IUserRegisterService _userSevice;

        public UsersController(IUserRegisterService userService)
        {
            _userSevice = userService;
        }

        //CRUD

        [HttpPost("add")]
        public IActionResult Add(UserRegister user)
        {
            var result = _userSevice.Add(user);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }


        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var result = _userSevice.GetAll();
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }



        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _userSevice.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }



        [HttpPut("update")]
        public IActionResult Update(UserRegister user)
        {
            var result = _userSevice.Update(user);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }


        [HttpDelete("delete")]
        public IActionResult Delete(UserRegister user)
        {
            var result = _userSevice.Delete(user);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }


    }
}
