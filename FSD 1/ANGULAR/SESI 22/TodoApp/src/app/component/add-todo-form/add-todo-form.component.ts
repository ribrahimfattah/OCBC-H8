import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {

  @Input() inputTodo: string = "";
  @Input() inputDesc: string = "";

  @Output() newTodoEvent = new EventEmitter<Todo>();
  @Output() updateTodoEvent = new EventEmitter<Todo>();

  @Input() formState: string = "add";

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

  updateTodo() {
    // this.inputTodo = "sdfsfsdfsd";
    // this.inputDesc = todo.desc;
    const todo: Todo = {
      title: 'tesss',
      desc: 'tesss',
      completed: false
    };

    this.updateTodoEvent.emit(todo)
    console.log('okeee');
  }
  deleteTodo(id: number) {
  }
}
