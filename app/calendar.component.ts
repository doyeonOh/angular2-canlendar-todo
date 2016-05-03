import { Component, Input, OnInit } from 'angular2/core';

import { MonthBoxComponent } from './month-box.component';
import { TodoFormComponent } from './todo-form.component';
import { CalendarService } from './calendar.service';
import { TodoService } from './todo.service';


@Component({
  selector: 'my-calendar',
  template: `
    <div>
      <div style="text-align:center;">
        <div>
          <todo-form (todoUpdate)="todoUpdateCallback()"></todo-form>
        </div>
        <div>
          <div>
            <h3>{{_year}} / {{_month}}</h3>
          </div>
          <div>
            <button type="button" class="btn btn-primary" (click)="moveToPrevMonth(getCurrentDate())">
                <i class="fa fa-chevron-left"></i> 이전달
            </button>
            <button type="button" class="btn btn-primary" (click)="moveToNextMonth(getCurrentDate())">
              다음달 <i class="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div>
        <my-month-box [monthArr]="_monthArr" ></my-month-box>
      </div>
    </div>
  `,
  directives: [
    MonthBoxComponent,
    TodoFormComponent
  ],
  providers: [
    CalendarService
  ]
})


export class CalendarComponent implements OnInit{
  _monthArr : number[][];

  _year: number;
  _month: number;

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

  todoUpdateCallback(){
    this.setCalendar(this.getCurrentDate());
  }

  setCalendar(d:Date){
    this._monthArr     = this._calendarService.getMonthArray(d);
    this._year         = d.getFullYear();
    this._month        = d.getMonth() + 1;
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
