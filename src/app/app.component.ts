import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { PomodoroComponent } from './components/Pomodoro/pomodoro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, TodoListComponent, PomodoroComponent]
})
export class AppComponent {
  showTodo = true;
  showTimer = true;
}
