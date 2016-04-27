import { Injectable } from 'angular2/core';

import { Todo } from './todo';
import { TODOS } from './mock-todo';

@Injectable()
export class TodoService {
  getTodos(){
    return TODOS;
  }

  getTodosByDate(d:Date){
    if(d != undefined)
      return TODOS.filter(todo => todo.date.getTime() == d.getTime());
  }
}
