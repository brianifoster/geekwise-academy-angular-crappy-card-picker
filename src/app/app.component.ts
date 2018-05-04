import { Component, OnInit } from "@angular/core";
import ICard from "../interfaces/ICard";
import Deck from "../classes/Deck";

@Component({
	selector: "application",
	templateUrl: "./app.html"
})
export class AppComponent implements OnInit {
	// write your component code here; create the properties and methods you need to get the job
	// done as described in "app.html"; start by importing modules you need such as "./../classes/Deck"
	public deck: Deck;
	public lastDrawnCard:ICard;
	public userHand: ICard[];
	public deckHand: number = 52;

	public ngOnInit():void {
		this.deck = new Deck();
		this.userHand = [];
	}

	public drawCard() {
		this.lastDrawnCard = this.deck.drawCard();
		this.userHand.push(this.lastDrawnCard);
		this.deckHand = (52 - (this.userHand.length));
	}

	public returnCard(card:ICard) {
		this.deck.returnCardToDeck(card);
		this.userHand.splice(this.userHand.indexOf(card), 1);
		this.deckHand = (52 - (this.userHand.length));
	}
}

