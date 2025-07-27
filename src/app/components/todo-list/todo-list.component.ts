import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../todo.model';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  newTodo = '';

  constructor(public todoService: TodoService) {}

  addTodo() {
    if (!this.newTodo.trim()) return;
    this.todoService.addTodo(this.newTodo.trim());
    this.newTodo = '';
  }

  toggleTodo(id: number) {
    this.todoService.toggleTodo(id);console.log(this.todos);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  get todos(): Todo[] {
    return this.todoService.getTodos();
  }

}
