import { Injectable } from 'angular2/core';


@Injectable()
export class CalendarService {
  weekDay: number = 7;
  monthArr: number[][];

  currentDate: Date;


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
    var startDayOfWeek = new Date(year, month - 1, 1).getDay(); // 1일의 요일 반환
    var endDate = new Date(year, month, 0).getDate(); // 마지막 일의 요일 반환 ( 0 으로 넣으면 전달의 마지막 날 나옴)

    var totalWeekOfMonth = this.getTotalWeekOfMonth(endDate, startDayOfWeek);

    var startDate = 1;

    var monthArr = [];

    for(let i = 0; i < totalWeekOfMonth; i++){
      monthArr[i] = [];
      for(let j = 0; j < this.weekDay; j++){
        if(!(i == 0 && startDayOfWeek > j || startDate > endDate)){
          monthArr[i][j] = startDate;
          startDate++;
        }else{
          monthArr[i][j] = "";     // 달력 마지막 주의 빈 공간 채우기 위해서;
        }
      }
    }

    this.monthArr = monthArr;

    return monthArr;
  }

  getPrevMonthDate(d:Date){
    var prevMonthDate = d;
    prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
    this.currentDate = prevMonthDate;
    return prevMonthDate;
  }

  getNextMonthDate(d:Date){
    var nextMonthDate = d;
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    this.currentDate = nextMonthDate;
    return nextMonthDate;
  }

  getCurrentDate(){
    return this.currentDate;
  }

  setCurrentDate(d:Date){
    this.currentDate = d;
  }

  isSameDate(d1:Date, d2:Date){
    var tmpDate1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
    var tmpDate2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());

    return tmpDate1.getTime() == tmpDate2.getTime();
  }
}
