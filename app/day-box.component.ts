import { Component, Input } from 'angular2/core';

import { TodoListComponent } from './todo-list.component';

@Component({
  selector: 'my-day-box',
  template: `
    <div>
      <my-todo-list
        [date]="date"
        [showType]="_dayBoxShowType">
      </my-todo-list>
    </div>
  `,
  directives: [TodoListComponent]
})

export class DayBoxComponent{
  @Input()
  date: Date;

  _dayBoxShowType : string = "color";
}
