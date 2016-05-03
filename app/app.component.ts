import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { CalendarComponent } from './calendar.component';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { TODOS } from './mock-todo';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <my-calendar></my-calendar>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES, CalendarComponent],
  providers: [
    ROUTER_PROVIDERS,
    TodoService
  ]
})

@RouteConfig([

])

export class AppComponent implements OnInit {

  constructor(
    private _todoService: TodoService
  ) {}

  ngOnInit(){
  }
}
