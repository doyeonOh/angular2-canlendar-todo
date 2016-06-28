import { Component, Input, OnInit } from '@angular/core';

import { Alert } from 'fuel-ui/fuel-ui';

import { MonthBoxComponent } from './month-box.component';
import { TodoFormComponent } from './todo-form.component';
import { CalendarService } from '../services/calendar.service';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'my-calendar',
  templateUrl : 'app/templates/calendar.component.html',
  directives: [
    MonthBoxComponent,
    TodoFormComponent,
    Alert
  ],
  providers: [
    CalendarService
  ]
})


export class CalendarComponent implements OnInit{
  monthArr : number[][];

  year: number;
  month: number;

  alertObj = {
    "show" : false,
    "type" : "",
    "msg"  : ""
  };

  constructor(
    private _calendarService: CalendarService,
    private _todoService: TodoService
  ) {}

  onAlertTrigger(alertObj){
    this.alertObj = {
      type: alertObj.type,
      msg : alertObj.msg,
      show : true
    };
    setTimeout(()=>{ this.alertObj.show = false;}, 3000);
  }

  getTodayDate(){
    return this._calendarService.getToday();
  }

  setCurrentDate(d:Date){
    this._calendarService.setCurrentDate(d);
  }

  setCalendar(d:Date){
    this.monthArr     = this._calendarService.getMonthArray(d);
    this.year         = d.getFullYear();
    this.month        = d.getMonth() + 1;
  }

  moveToPrevMonth(d:Date){
    this.setCalendar(this._calendarService.getPrevMonthDate(d));
  }

  moveToNextMonth(d:Date){
    this.setCalendar(this._calendarService.getNextMonthDate(d));
  }

  getCurrentDate(){
    return this._calendarService.getCurrentDate();
  }

  ngOnInit(){
    this.setCalendar(this.getTodayDate());
    this.setCurrentDate(this.getTodayDate());
  }
}
