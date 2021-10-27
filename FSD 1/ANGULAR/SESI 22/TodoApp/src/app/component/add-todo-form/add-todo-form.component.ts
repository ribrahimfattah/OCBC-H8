import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {

  @Output() newTodoEvent = new EventEmitter<Todo>();

  inputTodo: string = "";
  inputDesc: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    const todo: Todo = {
      title: this.inputTodo,
      desc: this.inputDesc,
      completed: false
    };

    this.newTodoEvent.emit(todo)
    this.inputTodo = "";
    this.inputDesc = "";
  }
}
