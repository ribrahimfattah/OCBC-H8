import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Todo } from '../../models/Todo';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {

  todos: Todo[] = [];

  @Input() inputTodo: string = "";
  @Input() inputDesc: string = "";
  @Input() id: number = 0;
  @Input() isEdit = false;

  @Output() newTodoEvent = new EventEmitter<Todo>();
  @Output() updateTodoEvent = new EventEmitter<number>();
  @Output() deleteTodoEvent = new EventEmitter<number>();
  @Output() tesTodoEvent = new EventEmitter<any[]>();

  constructor() { }

  ngOnInit(): void {
  }

  todoData = new FormGroup({
    inputTodo: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50)
    ])
  })

  get title() {
    return this.todoData.get('inputTodo')
  }

  addTodo() {
    if (this.inputTodo == "") {

    } else {

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

  updateTodo() {
    if (this.inputTodo == "") {

    } else {
      const tes: any[] = [
        {
          "id": this.id,
          "title": this.inputTodo,
          "desc": this.inputDesc

        }
      ]
      this.tesTodoEvent.emit(tes)
    }

  }


  deleteTodo() {
    this.deleteTodoEvent.emit(this.id)
    this.inputTodo = "";
    this.inputDesc = "";
    this.isEdit = false
  }
}
