import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  id: number = 0
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
    this.isEdit = false
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
        this.id = id
        this.title = v.title
        this.desc = v.desc
        this.isEdit = true
      };
      console.log(v)
      return v;
    })
  }

  updateTodo(todo: any[]) {


    todo.map((v) => {
      this.id = v.id
      this.title = v.title
      this.desc = v.desc
    })
    this.todos.map((v, i) => {
      if (i == this.id) {
        v.title = this.title
        v.desc = this.desc
      };
      console.log(v)
      return v;
    })

    this.title = ""
    this.desc = ""
  }

}
