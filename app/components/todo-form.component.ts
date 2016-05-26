import { Component, Output, OnInit, EventEmitter } from 'angular2/core';

import { DatePicker } from 'fuel-ui/fuel-ui';

import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'todo-form',
  templateUrl : 'app/templates/todo-form.component.html',
  styles:[`
    .todo-form-container{
      margin: 0.5em;
      padding: 1em;
    }


  `],
  directives : [
    DatePicker
  ]
})

export class TodoFormComponent implements OnInit{
  datePickerValue : Date;
  todo : Todo;

  @Output()
  alertTrigger = new EventEmitter();


  constructor(
    private _todoService: TodoService
  ) {}

  changeDatePickerValue(d : Date){
    this.datePickerValue = d;
  }

  // ngModel 사용시 글이 중복되는 현상이 발생함...버그
  onKeyup(event){
    this.todo.todo = event.target.value;
  }

  onSubmit(todoform:any){
    this.todo.isComplete = false;
    this.todo.date = this.datePickerValue;
    if(!this.checkValidTodo(this.todo)) return ;
    this.addTodo(this.todo);
    this.showAlert("success", "성공적으로 등록되었습니다");
    this.makeNewTodo();
  }

  checkValidTodo(todo : Todo) : boolean{
    if(todo.todo.length == 0){
      this.showAlert("danger", "Todo를 입력하셔야 합니다.");
      return false;
    }

    if(!(todo.date instanceof Date)){
      this.showAlert("danger", "날짜를 선택해주세요");
      return false;
    }
    return true;
  }

  showAlert(type:string, msg:string){
    var alertObj = {
      type: type,
      msg: msg
    };

    this.alertTrigger.emit(alertObj); //  parameter 와 함께 상위로 emit
  }

  addTodo(todo: Todo){
    this._todoService.addTodo(todo);
  }

  makeNewTodo(){
    this.todo = new Todo();
    this.todo.todo = "";
  }

  ngOnInit(){
    this.makeNewTodo();
  }

}
