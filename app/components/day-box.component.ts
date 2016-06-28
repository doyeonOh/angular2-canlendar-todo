import { Component, Input } from '@angular/core';

import { TodoListComponent } from './todo-list.component';

@Component({
  selector: 'my-day-box',
  template: `
    <div>
      <my-todo-list
        [date]="date"
        [showType]="dayBoxShowType">
      </my-todo-list>
    </div>
  `,
  directives: [TodoListComponent]
})

export class DayBoxComponent{
  @Input()
  date: Date;

  dayBoxShowType : string = "color";
}
