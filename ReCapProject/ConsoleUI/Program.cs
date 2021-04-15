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
            GetUserTest();
            GetCustomerTest();
            GetRentalTest();
        }

        private static void GetRentalTest()
        {
            Console.WriteLine("====================== Customers ======================");
            RentalManager rentalManager = new RentalManager(new EfRentalDal());
            foreach (var rental in rentalManager.GetAll().Data)
            {
                Console.WriteLine(rental.RentalId);
            }
        }

        private static void GetCustomerTest()
        {
            Console.WriteLine("====================== Customers ======================");
            CustomerManager customerManager = new CustomerManager(new EfCustomerDal());
            foreach (var customer in customerManager.GetAll().Data)
            {
                Console.WriteLine(customer.CompanyName);
            }
        }

        private static void GetUserTest()
        {
            Console.WriteLine("====================== Users ======================");
            UserManeger userManeger = new UserManeger(new EfUserDal());
            foreach (var user in userManeger.GetAll().Data)
            {
                Console.WriteLine(user.FirstName + " " + user.LastName);
            }
        }

        private static void GetBrandTest()
        {
            Console.WriteLine("====================== Brands ======================");
            BrandManager brandManager = new BrandManager(new EfBrandDal());

            var result = brandManager.GetAll();
            if (result.Success)
            {
                foreach (var brand in result.Data)
                {
                    Console.WriteLine(brand.BrandName);
                }
            }
            else
            {
                Console.WriteLine(result.Message); 
            }

        }

        private static void GetColorTest()
        {
            Console.WriteLine("====================== Colors ======================");
            ColorManager colorManager = new ColorManager(new EfColorDal());
            foreach (var color in colorManager.GetAll().Data)
            {
                Console.WriteLine(color.ColorName);
            }
        }

        private static void GetCarTest()
        {
            Console.WriteLine("====================== Cars ======================");
            CarManager carManager = new CarManager(new EfCarDal());
            foreach (var car in carManager.GetCarDetails().Data)
            {
                Console.WriteLine(car.BrandName + "\n Description: " + car.CarDescription + "\n Color: " + car.ColorName + "\r\n");
            }
        }
    }
}
