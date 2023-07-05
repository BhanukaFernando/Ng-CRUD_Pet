import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<card[]>(this.bassUrl);
  }

  addCard(card: card) : Observable<card>{
    card.id = '00000000-0000-0000-0000-000000000000';
   return this.http.post<card>(this.bassUrl, card)
  }

  deleteCard(id: string) : Observable<card>{
   return this.http.delete<card>(this.bassUrl + '/' + id);
  }

  updateCard(card: card): Observable<card>{
    return this.http.put<card>(this.bassUrl + '/' + card.id, card);
  }
}
