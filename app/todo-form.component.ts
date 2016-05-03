import { Component, Output, OnInit, EventEmitter } from 'angular2/core';

import { DatePicker } from 'fuel-ui/fuel-ui';
import { Alert } from 'fuel-ui/fuel-ui';

import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'todo-form',
  template: `
  <div class="todo-form-container">
    <alert [(displayed)]="_showAlert" [type]="_alertType" [closeButton]="true">
      {{ _alertMsg }}
    </alert>
    <form (ngSubmit)="onSubmit(todoform)" #todoform>
      <div class="form-group row">
        <label class="col-sm-2 form-control-label">날짜</label>
        <div class="col-sm-9">
          <date-picker #picker
            label="날짜를 선택하세요"
            (valueChange)="changeDatePickerValue(picker.selectedDate)">
          </date-picker>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 form-control-label">Todo</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" (blur)="onBlur($event)" [value]="_todo.todo" placeholder="Todo를 입력하세요" />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-11" style="text-align:right;">
          <input type="submit" class="btn btn-default" value="추가하기" />
        </div>
      </div>
    </form>
  </div>
  `,
  styles:[`
    .todo-form-container{
      margin: 0.5em;
      padding: 1em;
    }


  `],
  directives : [
    DatePicker,
    Alert
  ]
})

export class TodoFormComponent implements OnInit{
  _datePickerValue : Date;
  _todo : Todo;
  _showAlert : boolean = false;
  _alertMsg : string;
  _alertType : string;

  @Output()
  todoUpdate = new EventEmitter<any>();


  constructor(
    private _todoService: TodoService
  ) {}

  changeDatePickerValue(d : Date){
    this._datePickerValue = d;
  }

  // ngModel 사용시 글이 중복되는 현상이 발생함...버그
  onBlur(event){
    this._todo.todo = event.target.value;

  }

  onSubmit(todoform:any){
    this._todo.isComplete = false;
    this._todo.date = this._datePickerValue;
    if(!this.checkValidTodo(this._todo)) return ;
    this.addTodo(this._todo);
    this.showAlert("success", "성공적으로 등록되었습니다");
    this.todoUpdate.next(null);  // 부모로 보내는 event trigger
    this.makeNewTodo();
  }

  checkValidTodo(todo : Todo) : boolean{
    if(todo.todo.length == 0){
      this.showAlert("danger", "Todo를 입력하셔야 합니다.");
      return false;
    }

    if(!(todo.date instanceof Date)){
      this.showAlert("danger", "날짜를 선택해주세요");
      console.log(todo.date);
      return false;
    }
    return true;
  }

  showAlert(type:string, msg:string){
    this._alertMsg = msg;
    this._alertType = type;
    this._showAlert = true;
    setTimeout(()=> this._showAlert = false, 3000);
  }

  addTodo(todo: Todo){
    this._todoService.addTodo(todo);
  }

  makeNewTodo(){
    this._todo = new Todo();
    this._todo.todo = "";
  }

  ngOnInit(){
    this.makeNewTodo();
  }

}
