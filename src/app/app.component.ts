import { Component } from '@angular/core';
import { Model } from './model';

@Component({
  selector: 'todo-app',
  templateUrl: 'app.component.html'
  // styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';
  model = new Model();
  todoTT: string = "";
  getName() {
    return this.model.taisyou.user;
  };
  getData() {
    return this.model.taisyou.data.filter(item => { return !item.done });
  };
  addItem(val: string) {
    if (val !== "") {
      this.model.taisyou.data.push({ action: val, done: false });
      this.todoTT = "";
    }
  }
}
