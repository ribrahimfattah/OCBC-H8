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
  @Input() id: number = 0;
  @Input() isEdit = false;

  @Output() newTodoEvent = new EventEmitter<Todo>();
  @Output() updateTodoEvent = new EventEmitter<number>();
  @Output() deleteTodoEvent = new EventEmitter<number>();

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
    // todo: any[] = {
    //   title: 'tesss',
    //   desc: 'tesss',
    //   completed: false
    // };

    this.updateTodoEvent.emit(this.id)
    console.log('okeee');
  }

  deleteTodo() {
    this.deleteTodoEvent.emit(this.id)
    this.inputTodo = "";
    this.inputDesc = "";
  }
}
