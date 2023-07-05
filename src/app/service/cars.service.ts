import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { car } from '../models/car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  bassUrl = 'http://darshana99-001-site1.dtempurl.com/api/Cars';

  constructor(private http: HttpClient) { }

    getAllCars() : Observable<car[]>{
      return this.http.get<car[]>(this.bassUrl);
    }

    addCar(car: car) : Observable<car> {
      car.id = '00000000-0000-0000-0000-000000000000';
     return this.http.post<car>(this.bassUrl, car )
    }

    deleteCar(id: string) : Observable<car>{
      return this.http.delete<car>(this.bassUrl + '/' + id);
    }

    updateCar(car: car) : Observable<car>{
      return this.http.put<car>(this.bassUrl + '/' + car.id, car);
    }
}
