import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularfirst';
  error = '';

  count: number = 1000;
  handleIncrease = () => {
    this.count = this.count + 10;
  };

  handleDecrease = () => {
    if (this.count === 0) {
      console.log("Can't Decrease");
    } else {
      this.count = this.count - 1;
    }
  };

  handleReset = () => {
    this.count = 0;
  };
}
