using Business.Concrete;
using DataAccess.Concrete.EntityFramework;
using DataAccess.Concrete.InMemory;
using Entities.Concrete;
using System;

namespace ConsoleUI
{
    class Program
    {
        static void Main(string[] args)
        {
            GetCarTest();
            GetColorTest();
            GetBrandTest();

        }

        private static void GetBrandTest()
        {
            Console.WriteLine("====================== Brands ======================");

            BrandManager brandManager = new BrandManager(new EfBrandDal());
            Brand brand1 = new Brand()
            {
                BrandName = "Volvo"
            };
            //foreach (var brand in brandManager.GetAll())
            //{
            //    Console.WriteLine(brand.BrandName);
            //}
        }

        private static void GetColorTest()
        {
            Console.WriteLine("====================== Colors ======================");

            ColorManager colorManager = new ColorManager(new EfColorDal());
            Color color1 = new Color()
            {
                ColorName = "Red"
            };
            colorManager.Create(color1);
            //foreach (var color in colorManager.GetAll())
            //{
            //    Console.WriteLine(color.ColorName);
            //}
        }

        private static void GetCarTest()
        {
            Console.WriteLine("====================== Cars ======================");
            CarManager carManager = new CarManager(new EfCarDal());
            Car car1 = new Car()
            {
                BrandId = 0,
                ColorId = 0,
                DailyPrice = 8.9,
                ModelYear = 1980,
                DescriptionCar = "Wow"
            };
            carManager.Create(car1);
            //foreach (var car in carManager.GetAll())
            //{
            //    Console.WriteLine(car.DescriptionCar);
            //}
        }
    }
}
