import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf="childSelectedKeg">
      <h3>{{childSelectedKeg.name}}</h3>
      <hr>
      <h3>Edit Keg</h3>
      <label>Enter Keg Name:</label>
      <input [(ngModel)]="childSelectedKeg.name"><br>
      <label>Enter Keg Brand:</label>
      <input [(ngModel)]="childSelectedKeg.brand"><br>
      <label>Enter Keg Price in US Dollars:</label>
      <input [(ngModel)]="childSelectedKeg.priceInUSD"><br>
      <label>Enter Keg Alcohol Content by volume:</label>
      <input [(ngModel)]="childSelectedKeg.alcoholContent"><br>
      <button (click)="doneButtonClicked()">Done</button>
      <hr>
    </div>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
