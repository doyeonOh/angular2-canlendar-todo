import { Component, OnInit, Input } from 'angular2/core';

import { DayBoxComponent } from './day-box.component';
import { TODOS } from './mock-todo';

@Component({
  selector: 'my-month-box',
  template: `
      <div>
        <ul class="subject">
          <li>일</li>
          <li>월</li>
          <li>화</li>
          <li>수</li>
          <li>목</li>
          <li>금</li>
          <li>토</li>
        </ul>
        <ul *ngFor="#week of monthArr">
          <li *ngFor="#day of week" class="day" [class.today]="currentDay == day">
            <span class="day" [class.day_sun]="week[0] == day" [class.day_sat]="week[6] == day">{{day}}</span>
            <my-day-box [todos]="getTodoList(day)" [showColor]="true"></my-day-box>
          </li>
        </ul>
      </div>
  `,
  styles:[`
    li{
      float:left;
      width:7em;
      height:7em;
      border: 1px dotted black;
      text-overflow: ellipsis;
      word-wrap:normal;
      white-space: nowrap;
      overflow: hidden;
      overflow-y:hidden;
    }
    ul.subject li{
      height:2em;
      border: 0px;
      text-align:center;
    }
    .day_sun{
      color:red;
    }
    .day_sat{
      color:blue;
    }
    .day:hover{
      background-color: #BBD8DC !important;
    }
    .today{
      background-color: #CCA3FA !important;
    }
  `],
  directives: [DayBoxComponent]
})

export class MonthBoxComponent implements OnInit{

  @Input()
  monthArr: number[][];
  @Input()
  todayDate : Date;

  currentDay: number;


  getTodoList(day:number){
    return TODOS.filter(item => item.yyyymmdd.slice(6) == day+"");

  }
  ngOnInit(){
    this.currentDay = 100; //test 임시로..
  }
}
