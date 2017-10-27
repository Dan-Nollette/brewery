import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'keg-list',
  template:`
  <ul>
    <li *ngFor="let currentKeg of childKegList"> {{currentKeg.name}}
      <br>
      <ul>
        <li>Brand: {{currentKeg.brand}}</li>
        <li>Price: \${{currentKeg.priceInUSD}}</li>
        <li>ABV: {{currentKeg.alcoholContent}}%</li>
        <li>pints left: {{currentKeg.pintsRemaining}}</li>
      </ul>
      <button (click)="sellPintButtonClicked(currentKeg)">Sell Pint</button>
      <button (click)="editKeg(currentKeg)">Edit Keg</button>
      <br><br>
    </li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() clickSender2 = new EventEmitter();

   sellPintButtonClicked(kegToPourFrom: Keg) {
     this.clickSender.emit(kegToPourFrom);
   }
   
   editKeg(kegToEdit: Keg) {
     this.clickSender2.emit(kegToEdit);
   }
}
