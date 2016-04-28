import { Component, OnInit, Input } from 'angular2/core';
import { Modal } from 'fuel-ui/fuel-ui';

import { TodoService } from './todo.service';
import { CalendarService } from './calendar.service';
import { DayBoxComponent } from './day-box.component';
import { TodoListComponent } from './todo-list.component';
import { TODOS } from './mock-todo';


@Component({
  selector: 'my-month-box',
  template: `
      <div style="display:inline-block;" class="month-box">
        <ul class="subject">
          <li>일</li>
          <li>월</li>
          <li>화</li>
          <li>수</li>
          <li>목</li>
          <li>금</li>
          <li>토</li>
        </ul>
        <ul *ngFor="#week of monthArr" class="month_body">
          <li *ngFor="#day of week" class="day"  (click)="showModal(day,modal,mytodolist)">
            <span class="day"
              [class.day_sun]="week[0] == day"
              [class.day_sat]="week[6] == day"
              [class.today]="isToday(day)">
              {{day}}
            </span>
            <my-day-box [date]=getDate(day) [showColor]="true"></my-day-box>
          </li>
        </ul>
      </div>
      <modal #modal
          modalTitle="Modal Title"
          [closeButton]="true"
          [closeOnUnfocus]="true" style="text-align:initial;">
          <div class="modal-body" >
              <my-todo-list #mytodolist>
                [(date)]="_date"
                [showColor]="false"
              </my-todo-list>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-primary" (click)="modal.closeModal()">
                  <i class="fa fa-chevron-left"></i> Go Back
              </button>
          </div>
      </modal>
  `,
  styleUrls: ['app/month-box.component.css'],
  directives: [DayBoxComponent, Modal, TodoListComponent]
})

export class MonthBoxComponent implements OnInit{

  @Input()
  monthArr: number[][];

  _date: Date;

  constructor(
    private _calendarService: CalendarService,
    private _todoService: TodoService
  ) {}

  ngOnInit(){

  }

  showModal(day:number, modal:any, mytodolist:any){
    console.log(modal);
    this._date = this.getDate(day);
    modal.modalTitle = this.getModalTitle();
    mytodolist.refresh(this._date, false);
    return day > 0 ? modal.showModal() : '';
  }

  getModalTitle(){
    var year  = this._date.getFullYear();
    var month = this._date.getMonth() +1;
    var day   = this._date.getDate();
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
