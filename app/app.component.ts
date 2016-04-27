import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Modal } from 'fuel-ui/fuel-ui';

import { CalendarComponent } from './calendar.component';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { TODOS } from './mock-todo';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <button class="btn btn-primary" (click)="modal.showModal()">Toggle Modal</button>
    <modal #modal
        modalTitle="Modal Title"
        [closeButton]="true"
        [closeOnUnfocus]="true">
        <div class="modal-body">
            <ul>
                <li>Any</li>
                <li>Html</li>
                <li>Here</li>
            </ul>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" (click)="modal.closeModal()">
                <i class="fa fa-chevron-left"></i> Go Back
            </button>
        </div>
    </modal>
    <my-calendar></my-calendar>
  `,
  directives: [ROUTER_DIRECTIVES, CalendarComponent, Modal],
  providers: [
    ROUTER_PROVIDERS,
    TodoService
  ]
})

@RouteConfig([

])

export class AppComponent implements OnInit {
  title =  'angular2-calendar-todo';
  sampleTodos : Todo[];


  constructor(
    private _todoService: TodoService
  ) {}
  
  ngOnInit(){
  }
}
