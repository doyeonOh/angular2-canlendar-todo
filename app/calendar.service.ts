import { Injectable } from 'angular2/core';
import { Todo } from './todo';
import { TODOS } from './mock-todo';

@Injectable()
export class CalendarService {
  weekDay: number = 7;
  monthArr: number[][];

  getToday() {
    return new Date();
  }

  getTotalWeekOfMonth(endDate:number, startDayOfWeek:number){
    var totalWeek = Math.floor((endDate + startDayOfWeek) / this.weekDay);
    var adder = (endDate + startDayOfWeek) % this.weekDay;

    if(adder > 0)
      totalWeek = totalWeek + 1;

    return totalWeek;
  }

  getMonthArray(d:Date){
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var startDayOfWeek = d.getDay();
    var endDate = new Date(year, month, 0).getDate();

    var totalWeekOfMonth = this.getTotalWeekOfMonth(endDate, startDayOfWeek);

    var startDate = 1;

    var monthArr = [];

    for(var i = 0; i < totalWeekOfMonth; i++){
      monthArr[i] = [];
      for(var j = 0; j < this.weekDay; j++){
        if(!(i == 0 && startDayOfWeek > j || startDate > endDate)){
          monthArr[i][j] = startDate;
          startDate++;
        }
      }
    }

    this.monthArr = monthArr;

    return monthArr;
  }
}
