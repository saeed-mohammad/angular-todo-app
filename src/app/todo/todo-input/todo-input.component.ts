import { Component, EventEmitter, Output } from '@angular/core';
import { TODO } from './Todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent {
  taskList: TODO[] = [];
  task: string = '';

  @Output() outputList = new EventEmitter<TODO[]>();

  onInput(val: string) {
    this.task = val;
  }
  AddTodo() {
    const obj = {
      todo: this.task,
      isActive: false,
    };
    this.taskList.push(obj);
    localStorage.setItem('data', JSON.stringify(this.taskList));
    this.outputList.emit(this.taskList);
    this.task = '';
  }
}
