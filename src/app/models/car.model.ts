export interface car{
    id: string;
    imageURL:string | URL;
    manufacturer:string ;
    model: string;
    year:string;
    color: string;
    colorHexCode:string;
    mileage: string;
    price:string ;
    chassisNumber:string ;
    vehicleNumber:string;
    isAvailable: boolean;
}