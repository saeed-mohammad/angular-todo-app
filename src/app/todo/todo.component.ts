import { Component } from '@angular/core';
import { TODO } from './todo-input/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  list!: TODO[];

  addList(val: TODO[]) {
    this.list = val;
  }
}
