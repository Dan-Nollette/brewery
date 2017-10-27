import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
  <div>
    <label>Enter Keg Name: </label>
    <input #newName><br>
    <label>Enter Keg Brand: </label>
    <input #newBrand><br>
    <label>Enter Keg Price: </label>
    <input #newPrice><br>
    <label>Enter Keg Alcohol Content: </label>
    <input #newAlcoholContent><br>
  </div>
  <div>
    <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value); newDescription.value='';">Add</button>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, priceInUSD: number, alcoholContent: number) {
    let newKegToAdd: Keg = new Keg(name, brand, priceInUSD, alcoholContent);
    this.newKegSender.emit(newKegToAdd);
  }
}
