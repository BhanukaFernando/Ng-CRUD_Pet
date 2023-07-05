
import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/service/cards.service';
import { card } from 'src/app/models/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './Cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit  {
  title = 'cards';
  cards: card[] = [];
  card: card = {
    id: '',
    cardNumber: '',
    cardholderName: '',
    cvc: '',
    expiryMonth: '',
    expiryYear: '',
  }

  constructor(private cardsService: CardsService) {

  }

  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    this.cardsService.getAllCards()
      .subscribe(
        Response => {
          this.cards = Response;
          console.log(Response);
        }
      );
  }
  onSubmit() {

    if (this.card.id === ''){
      this.cardsService.addCard(this.card).subscribe(
        Response => {
          this.getAllCards();
          this.card = {
            id: '',
            cardNumber: '',
            cardholderName: '',
            cvc: '',
            expiryMonth: '',
            expiryYear: '',
          }
        }
      );
    } else{
      this.updateCard(this.card)
    }
  }

  deleteCard(id: string){
    this.cardsService.deleteCard(id)
    .subscribe(
      Response => {
        this.getAllCards();
      }
    );
  }
  populateForm(card: card){
    this.card = card;
  }

  updateCard(card: card){
    this.cardsService.updateCard(card)
    .subscribe(
      Response => {
        this.getAllCards();
      }
    );
  }
}
