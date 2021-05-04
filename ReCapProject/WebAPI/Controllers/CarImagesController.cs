using Business.Abstract;
using Entities.Concrete;
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
    public class CarImagesController : ControllerBase
    {
        ICarImageService _carImageService;

        public CarImagesController(ICarImageService carImageService)
        {
            _carImageService = carImageService;
        }

        //CRUD
        [HttpPost("add"), DisableRequestSizeLimit]
        public IActionResult Add(IFormFile file, int id)
        {
            CarImage carImage = new CarImage { CarId = id };
            var result = _carImageService.Create(file, carImage);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }


        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var result = _carImageService.GetAll();
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }


        [HttpGet("getimagesbycarid")]
        public IActionResult GetImagesByCarId(int id) 
        {
            var result = _carImageService.GetImagesByCarId(id);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }


        [HttpGet("getbyid")]
        public IActionResult GetById(int id)
        {
            var result = _carImageService.GetById(id);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }


        //[HttpGet("getfilebyid")]
        //public IActionResult GetFileById(int id)
        //{
        //    var result = _carImageService.GetById(id);

        //    if (result.Success)
        //    {
        //        Byte[] b = System.IO.File.ReadAllBytes(result.Data.ImagePath);
        //        return File(b, "image/jpeg");
        //    }

        //    return BadRequest(result);
        //}


        [HttpPut("update")]
        public IActionResult Update(IFormFile file,CarImage carImage)
        {
            var result = _carImageService.Update(file, carImage);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }


        [HttpDelete("delete")]
        public IActionResult Delete(IFormFile file, CarImage carImage)
        {
            var result = _carImageService.Delete(file,carImage);
            if (result.Success)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

    }
}
