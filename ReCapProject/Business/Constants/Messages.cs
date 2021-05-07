using Core.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Business.Constants
{
    public static class Messages
    {
        //Brand
        public static string InvalidBrandName = "The brand name is invalid";
        public static string BrandAdded = "The brand is added";
        public static string BrandDeleted = "The brand is deleted";
        public static string BrandsListed = "List of all brands";
        public static string MaintenanceTime = "System is under maintenance";
        public static string BrandUpdated = "The brand is updated";
        public static string BrandNameAlreadyExists = "The brand name already exists";


        //Car
        public static string CarAdded = "The car is added";
        public static string CarDeleted = "The car is deleted";
        public static string CarUpdated = "The car is updated";

        //Color
        public static string InvalidColorName = "The color name is invalid";
        public static string ColorAdded = "The color is added";
        public static string ColorDeleted = "The color is deleted";
        public static string ColorUpdated = "The color is updated";
        public static string ColorNameAlreadyExists = "The color already exists";



        //User
        public static string UserAdded = "The user is added";
        public static string UserDeleted = "The user is deleted";
        public static string UserUpdated = "The user is updated";

        //Customer
        public static string CustomerAdded = "The customer is added";
        public static string CustomerDeleted = "The customer is deleted";
        public static string CustomerUpdated = "The customer is updated";

        //Rental
        public static string RentalAdded = "The rental is added";
        public static string RentalDeleted = "The rental is deleted";
        public static string RentalUpdated = "The rental is updated";

        //CarImages
        public static string ImagesLimitExceded = "The limit of images are exceded";


        //Security
        public static string AuthorizationDenied = "The authorization is denied";
        public static string UserRegistered = "The user is registred";
        public static string UserNotFound = "User is not found";
        public static string PasswordError = "Password error";
        public static string SuccessfulLogin = "Login was successful";
        public static string UserAlreadyExists = "User is already exist";
        public static string AccessTokenCreated = "The accesstoken is created";
    }
}
