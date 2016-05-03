import { Injectable } from 'angular2/core';

import { Todo } from './todo';
import { lastId, TODOS } from './mock-todo';


@Injectable()
export class TodoService {
  TODOS : Todo[] = TODOS;
  _id : number;

  get id(){
    if(this._id == undefined){
      this._id = lastId + 1;
    }else{
      this._id = this._id + 1;
    }
    return this._id;
  }

  set id(newId: number){
    this._id = newId;
  }

  getTodos(){
    return TODOS;
  }

  getTodosByDate(d:Date){
    if(d != undefined)
      return this.TODOS.filter(todo => todo.date.getTime() == d.getTime());
  }

  addTodo(todo : Todo){
    todo.id = this.id;
    this.TODOS.push(todo);
  }

  updateTodo(todo: Todo){
    this.TODOS = this.TODOS.map((t)=> t.id == todo.id ? todo : t );
  }

  deleteTodo(todo: Todo){
    // this.TODOS = this.TODOS.map((t)=> t.id != todo.id ? todo : new Todo())
    this.TODOS = this.TODOS.filter(t => t.id != todo.id );
  }

}
