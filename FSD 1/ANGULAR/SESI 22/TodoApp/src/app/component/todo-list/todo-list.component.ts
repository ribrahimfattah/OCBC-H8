import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // @Output() updateTodoEvent = new EventEmitter<Todo>();

  formState: string = "add"
  todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        title: 'First todo',
        desc: 'masih proses improve',
        completed: false
      },
      {
        title: 'Second todo',
        desc: 'masih proses improve',
        completed: false
      }
    ]
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      console.log(v)
      return v;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodooo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(todo: Todo) {
    console.log(todo)
    // this.updateTodoEvent.emit(todo)
    // console.log("halooo")
  }

  showForm() {
    this.formState = "edit"
  }
}
