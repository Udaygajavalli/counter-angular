import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularfirst';
  error = '';
  status = 'false';

  count = 10;

  displayErr = (pos: any) => {
    this.status = pos;
  };
  handleIncrease = () => {
    this.displayErr(false);
    this.count = this.count + 1;
  };

  handleDecrease = () => {
    if (this.count === 0) {
      this.error = "Can't Decrement";
      this.displayErr(true);
    } else {
      this.count = this.count - 1;
    }
  };

  handleReset = () => {
    this.count = 0;
  };
}
