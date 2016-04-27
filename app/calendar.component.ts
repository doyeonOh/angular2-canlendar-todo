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
        <h3>{{year}} / {{month}}</h3>
        <a style="cursor:pointer;" (click)="moveToPrevMonth(getCurrentDate())">left</a> <a style="cursor:pointer;" (click)="moveToNextMonth(getCurrentDate())">right</a>
      </div>
      <my-month-box [monthArr]="monthArr" ></my-month-box>
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
  monthArr : number[][];
  todayDate : Date;
  currentDate : Date;

  year: number;
  month: number;
  day: number;

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
    this.monthArr     = this._calendarService.getMonthArray(d);
    this.year         = d.getFullYear();
    this.month        = d.getMonth() + 1;
    this.day          = d.getDate();
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
    this.todayDate =  this.getTodayDate();
    this.setCalendar(this.todayDate);
    this.setCurrentDate(this.todayDate);
  }

}
