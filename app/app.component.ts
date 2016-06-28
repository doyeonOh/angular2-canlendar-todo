import { Component, OnInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { CalendarComponent } from './components/calendar.component';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo';
import { TODOS } from './mock/mock-todo';

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
