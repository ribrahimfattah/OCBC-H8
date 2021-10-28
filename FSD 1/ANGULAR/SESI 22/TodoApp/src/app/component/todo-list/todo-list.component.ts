import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  title: string = ""
  desc: string = ""
  isEdit = false
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

  newTodo() {
    this.title = ""
    this.desc = ""
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodooo(todo: Todo) {
    this.todos.push(todo);
  }

  editTodo(id: number) {
    this.todos.map((v, i) => {
      if (i == id) {
        this.title = v.title
        this.desc = v.desc
        this.isEdit = true
      };
      console.log(v)
      return v;
    })
  }

  updateTodo(id: number) {
    this.todos.map((v, i) => {
      if (i == id) {
        v.title = "berhasil ediit"
        v.desc = "yessss"
      };
      console.log(v)
      return v;
    })
  }

}
