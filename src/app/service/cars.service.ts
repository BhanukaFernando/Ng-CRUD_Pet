import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { car } from '../models/car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  bassUrl = 'http://darshana99-001-site1.dtempurl.com/api/Cars';

  constructor(private http: HttpClient) { }
// Get All cars Item
  getAllCars(): Observable<car[]> {
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.get<car[]>(this.bassUrl, { headers: headers });
  }
// Add Cars Item
  addCar(car: car): Observable<car> {
    car.id = '00000000-0000-0000-0000-000000000000';
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.post<car>(this.bassUrl, car, { headers: headers })
  }
// Deleye cars Item
  deleteCar(id: string): Observable<car> {
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.delete<car>(this.bassUrl + '/' + id, { headers: headers });
  }
// Update Cars Item
  updateCar(car: car): Observable<car> {
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.put<car>(this.bassUrl + '/' + car.id, car, { headers: headers });
  }
}
