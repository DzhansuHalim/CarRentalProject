import { Brand } from "./brand";
import { CarImage } from "./carImage";
import { Color } from "./color";

export interface CarDeatils{
    carId:number;
    brandName:string;
    colorName:string;
    carDescription:string;
    modelYear:number;
    dailyPrice:number;
    carImage:string;
    brandId:string;
    colorId:string;
    carImages:CarDeatils[];
    
}