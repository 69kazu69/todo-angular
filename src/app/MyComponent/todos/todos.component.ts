import { Component, OnInit } from '@angular/core';
import {Todo} from "../../todos"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos : Todo[]
  localItem : any

  constructor() {

    
      this.localItem = localStorage.getItem("todos")
      this.localItem === null ?
      this.todos = []
      : this.todos = JSON.parse(this.localItem)

   }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo){
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  addTodo(todo : Todo){
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  toggleTodo(todo : Todo){
    let index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos))

  }

  
}
