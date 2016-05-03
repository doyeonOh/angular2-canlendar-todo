import { Injectable } from 'angular2/core';


@Injectable()
export class CalendarService {
  _lenthOfWeek: number = 7;
  _monthArr: number[][];

  _currentDate: Date;

  getToday() {
    return new Date();
  }

  getWeekOfMonth(endDate:number, startDayOfFirstWeek:number){
    var weekOfMonth = Math.floor((endDate + startDayOfFirstWeek) / this._lenthOfWeek);
    var adder = (endDate + startDayOfFirstWeek) % this._lenthOfWeek;

    if(adder > 0)
      weekOfMonth = weekOfMonth + 1;

    return weekOfMonth;
  }
  
  getMonthArray(d:Date){
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var startDayOfFirstWeek = new Date(year, month - 1, 1).getDay(); // 1일의 요일 반환
    var startDate = 1;
    var endOfDate = new Date(year, month, 0).getDate(); // 마지막 일 반환 ( 0 으로 넣으면 전달의 마지막 날 나옴)
    var weekOfMonth = this.getWeekOfMonth(endOfDate, startDayOfFirstWeek);
    var monthArr = [];

    for(let i = 0; i < weekOfMonth; i++){
      monthArr[i] = [];
      for(let j = 0; j < this._lenthOfWeek; j++){
        if(!(i == 0 && startDayOfFirstWeek > j || startDate > endOfDate)){
          monthArr[i][j] = startDate;
          startDate++;
        }else{
          monthArr[i][j] = "";     // 달력 마지막 주의 빈 공간 채우기 위해서;
        }
      }
    }

    this._monthArr = monthArr;

    return monthArr;
  }

  getPrevMonthDate(d:Date){
    var prevMonthDate = d;
    prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
    this._currentDate = prevMonthDate;
    return prevMonthDate;
  }

  getNextMonthDate(d:Date){
    var nextMonthDate = d;
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    this._currentDate = nextMonthDate;
    return nextMonthDate;
  }

  getCurrentDate(){
    return this._currentDate;
  }

  setCurrentDate(d:Date){
    this._currentDate = d;
  }

  isSameDate(d1:Date, d2:Date){
    var tmpDate1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
    var tmpDate2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());

    return tmpDate1.getTime() == tmpDate2.getTime();
  }
}
