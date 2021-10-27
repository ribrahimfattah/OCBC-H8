import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = 'Klik saya!';
  name2 = 'Reset';
  counter = 0;
  message = '';
  isDisabled = false;
  class = '';

  addCounter() {

    this.counter++;

    if (this.counter > 5)
      this.message = '';

    if (this.counter == 5)
      this.message = 'dah belum?';

    if (this.counter > 10)
      this.message = 'KLIK TEROOOOSSS!!';

    if (this.counter > 20) {
      this.isDisabled = true;
      this.message = 'BUTTON DISABLED';
    }

  }

  resetCounter() {

    this.counter = 0;

    if (this.counter == 0)
      this.message = '';
  }

  people: any[] = [
    {
      "name": "ibra",
      "age": 17,
      "country": "USA"
    },
    {
      "name": "Rasyid",
      "age": 17,
      "country": "HK"
    },
  ]
}
