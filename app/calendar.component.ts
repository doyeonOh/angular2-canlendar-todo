import { Component, Input, OnInit } from 'angular2/core';

import { MonthBoxComponent } from './month-box.component';
import { CalendarService } from './calendar.service';


@Component({
  selector: 'my-calendar',
  template: `
    <span> This is my Calendar!</span>
    <div>
      <h3>{{year}} / {{month}}</h3>
    </div>
    <my-month-box [todayDate]="todayDate" [monthArr]="monthArr" ></my-month-box>
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

  year: number;
  month: number;
  date: number;

  constructor(
    private _calendarService: CalendarService
  ) {}

  getToday(){
    return this._calendarService.getToday();
  }

  getMonth(d:Date){
    return this._calendarService.getMonthArray(d);
  }

  ngOnInit(){
    this.todayDate =  this.getToday();
    this.monthArr = this.getMonth(new Date());
    this.year = this.todayDate.getFullYear();
    this.month = this.todayDate.getMonth() + 1;
    this.date = this.todayDate.getDate();
  }

}
