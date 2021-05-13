import { CarDeatils } from "./carDetails";
import { CarImage } from "./carImage";

export interface Car{
    carId:number;
    brandId:number; 
    colorId:number;
    modelYear:number;
    dailyPrice:number; 
    descriptionCar:string; 
    carImages:CarImage[];
    carDetail:CarDeatils;
}