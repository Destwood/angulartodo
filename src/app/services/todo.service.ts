import { Injectable } from '@angular/core';
import {Todo} from '../todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  private nextId = 1;

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    this.todos.push({id: this.nextId++, title, completed: false})
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find(i=>i.id === id);
    if(todo) todo.completed !== todo.completed;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(i=> i.id !== id)
  }
}
