import { Component } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Dan's Public House</h1>
    <keg-list [childKegList]="masterKegList" (clickSender)="sellPint($event)" (clickSender2)="editKeg($event)"></keg-list>
    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
  </div>
  `
})

export class AppComponent {
  selectedKeg = null;
  masterKegList: Keg[] = [
    new Keg('PBR', 'Pabst', 3.5, 4.74),
    new Keg('Moose Drool', 'Big Sky Brewing', 5, 5.3),
    new Keg('Higher Math', 'Dogfish Head Craft Brewed Ales', 11, 17)
  ];

  sellPint(clickedKeg) {
    if(clickedKeg.pintsRemaining >= 1) {
      clickedKeg.pintsRemaining -= 1;
    } else {
      alert("This keg is empty. Maybe Tap another.")
    }
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
