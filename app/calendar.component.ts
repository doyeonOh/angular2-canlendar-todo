import { Component, Input, OnInit } from 'angular2/core';

import { MonthBoxComponent } from './month-box.component';
import { CalendarService } from './calendar.service';
import { TodoService } from './todo.service';


@Component({
  selector: 'my-calendar',
  template: `
    <span> This is my Calendar!</span>
    <div style="text-align:center;">
      <div>
        <h3>{{_year}} / {{_month}}</h3>
        <button type="button" class="btn btn-primary" (click)="moveToPrevMonth(getCurrentDate())">
            <i class="fa fa-chevron-left"></i>before
        </button>
        <button type="button" class="btn btn-primary" (click)="moveToNextMonth(getCurrentDate())">
            after<i class="fa fa-chevron-right"></i>
        </button>
      </div>
      <my-month-box [monthArr]="_monthArr" ></my-month-box>
    </div>
  `,
  directives: [
    MonthBoxComponent
  ],
  providers: [
    CalendarService
  ]
})


export class CalendarComponent implements OnInit{
  _monthArr : number[][];
  _todayDate : Date;
  _currentDate : Date;

  _year: number;
  _month: number;
  _day: number;

  constructor(
    private _calendarService: CalendarService,
    private _todoService: TodoService
  ) {}

  getTodayDate(){
    return this._calendarService.getToday();
  }

  setCurrentDate(d:Date){
    this._calendarService.setCurrentDate(d);
  }

  setCalendar(d:Date){
    this._monthArr     = this._calendarService.getMonthArray(d);
    this._year         = d.getFullYear();
    this._month        = d.getMonth() + 1;
    this._day          = d.getDate();
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
    this._todayDate =  this.getTodayDate();
    this.setCalendar(this._todayDate);
    this.setCurrentDate(this._todayDate);
  }

}
