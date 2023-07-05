import { Component, OnInit } from '@angular/core';
import { car } from 'src/app/models/car.model';
import { CarsService } from 'src/app/service/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  title = 'cars'
  cars: car[] = [];
  Car: car = {
    id: '',
    imageURL: '',
    manufacturer: '',
    model: '',
    year: '',
    color: '',
    colorHexCode: '',
    mileage: '',
    price: '',
    chassisNumber: '',
    vehicleNumber: '',
    isAvailable: false,
  }


  constructor(private carsService: CarsService) {

  }
  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.carsService.getAllCars().subscribe(
      Response => {
        this.cars = Response
        console.log(Response);
      }
    );
  }


  onSubmit() {
    if(this.Car.id === ''){
      this.carsService.addCar(this.Car).subscribe(
        Response => {
          this.getAllCars();
          this.Car = {
            id: '',
            imageURL: '',
            manufacturer: '',
            model: '',
            year: '',
            color: '',
            colorHexCode: '',
            mileage: '',
            price: '',
            chassisNumber: '',
            vehicleNumber: '',
            isAvailable: true,
          }
        }
      );
    }else{
     this.updateCar(this.Car);
    }
  }

  deleteCar(id: string) {
    this.carsService.deleteCar(id)
      .subscribe(
        Response => {
          console.log(Response)
          this.getAllCars();
        }
      );
  }
  populateForm(car: car){
    this.Car = car;
  }

  updateCar(car: car){
    this.carsService.updateCar(car).subscribe(
      Response => {
        this.getAllCars();
      }
    );
  }
}
