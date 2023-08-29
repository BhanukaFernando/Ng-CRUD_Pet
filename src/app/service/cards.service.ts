import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { card } from '../models/card.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardsService {

  bassUrl ='http://darshana99-001-site1.dtempurl.com/api/cards'

  constructor(private http: HttpClient) { }

  //get all cards
  getAllCards() : Observable<card[]> { 
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.get<card[]>(this.bassUrl,{ headers: headers });
  }

  // Add cards
  addCard(card: card) : Observable<card>{
    card.id = '00000000-0000-0000-0000-000000000000';
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
   return this.http.post<card>(this.bassUrl, card, { headers: headers })
  }

  // Delete cards
  deleteCard(id: string) : Observable<card>{
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
   return this.http.delete<card>(this.bassUrl + '/' + id, { headers: headers });
  }

  // Update cards
  updateCard(card: card): Observable<card>{
    const jwtToken = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    return this.http.put<card>(this.bassUrl + '/' + card.id, card, { headers: headers });
  }
}
