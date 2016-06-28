import { Component, OnInit, Input } from '@angular/core';
import { Modal } from 'fuel-ui/fuel-ui';

import { TodoService } from '../services/todo.service';
import { CalendarService } from '../services/calendar.service';
import { DayBoxComponent } from './day-box.component';
import { TodoListComponent } from './todo-list.component';
import { TODOS } from '../mock/mock-todo';


@Component({
  selector: 'my-month-box',
  templateUrl : 'app/templates/month-box.component.html',
  styleUrls: ['app/css/month-box.component.css'],
  directives: [DayBoxComponent, Modal, TodoListComponent]
})

export class MonthBoxComponent implements OnInit{

  @Input()
  monthArr: number[][];

  isCheckbox : string = "checkbox";

  date: Date;

  constructor(
    private _calendarService: CalendarService,
    private _todoService: TodoService
  ) {}

  ngOnInit(){

  }

  showModal(day:number, modal:any, mytodolist:any){
    this.date = this.getDate(day);
    modal.modalTitle = this.getModalTitle();
    mytodolist.refresh(this.date, this.isCheckbox);
    return day > 0 ? modal.showModal() : '';
  }

  getModalTitle(){
    var year  = this.date.getFullYear();
    var month = this.date.getMonth() +1;
    var day   = this.date.getDate();
    return year +"/" + month + "/" + day + " Todo List!";
  }

  getDate(day:number){
    // number 가 아닌 값이 들어옴 달력의 빈칸들(monthArr 의 빈값들)
    if(typeof day == "number"){
      var date = this._calendarService.getCurrentDate();
      date = new Date(date.getFullYear(), date.getMonth(), day);
      return date;
    }
  }

  isToday(day:number){
    if(typeof day == "number"){
      var date = this._calendarService.getCurrentDate();
      var todayDate = this._calendarService.getToday();
      date = new Date(date.getFullYear(), date.getMonth(), day);

      return this._calendarService.isSameDate(date, todayDate);
    }
  }
}
