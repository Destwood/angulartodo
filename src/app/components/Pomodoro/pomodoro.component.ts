import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnDestroy {
  private intervals = {
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60
  };

  timeLeft = 0;
  private timerId: any = null;
  public isPaused = false;
  private isRunning = false;

  startTimer(type: 'pomodoro' | 'shortBreak' | 'longBreak') {
    this.stopTimer();
    this.timeLeft = this.intervals[type];
    this.isPaused = true;
    this.isRunning = true;
  }

  togglePause() {
    if (!this.isRunning) return;
    if (this.isPaused) {
      this.isPaused = false;
      this.runTimer();
    } else {
      this.isPaused = true;
      this.clear();
    }
  }

  private runTimer() {
    this.clear();
    this.timerId = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    this.clear();
    this.timeLeft = 0;
    this.isPaused = false;
    this.isRunning = false;
  }

  private clear() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  formatTime(seconds: number) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  ngOnDestroy() {
    this.clear();
  }
}
