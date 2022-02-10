import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title: string
  desc : string
  
  @Output() todoAdd : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    let todo = {
      Sno : 8,
      title : this.title,
      desc : this.desc,
      active : true
    }
    this.todoAdd.emit(todo);
  }
 
}
