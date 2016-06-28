import { Injectable } from '@angular/core';

import { Todo } from '../models/todo';
import { lastId, TODOS } from '../mock/mock-todo';


@Injectable()
export class TodoService {
  _todos : Todo[] = TODOS;
  _id : number;

  get todos(){
    return this._todos;
  }

  set todos(todos : Todo[]){
    this._todos = todos;
  }

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
    return this.todos;
  }

  getTodosByDate(d:Date){
    if(d != undefined)
      return this.todos.filter(todo => todo.date.getTime() == d.getTime());
  }

  addTodo(todo : Todo){
    todo.id = this.id;
    this.todos.push(todo);
  }

  updateTodo(todo: Todo){
    this.todos = this.todos.map((t)=> t.id == todo.id ? todo : t );
  }

  deleteTodo(todo: Todo){
    // this.TODOS = this.TODOS.map((t)=> t.id != todo.id ? todo : new Todo())
    this.todos = this.todos.filter(t => t.id != todo.id );
  }

}
