import { Component, Input, OnInit } from '@angular/core';
import { TODO } from '../todo-input/Todo';

@Component({
  selector: 'app-todo-output',
  templateUrl: './todo-output.component.html',
  styleUrls: ['./todo-output.component.scss'],
})
export class TodoOutputComponent implements OnInit {
  @Input() displayList!: TODO[];

  ngOnInit() {
    const data = localStorage.getItem('data');
    this.displayList = JSON.parse(data ?? '{}') as TODO[];
  }

  checkTask(val: { isActive: boolean }) {
    val.isActive = !val.isActive;
  }
  deleteTask(val: {}) {
    const newList = this.displayList.filter((task) => task !== val);
    this.displayList = newList;
    localStorage.setItem('data', JSON.stringify(this.displayList));
  }
}
