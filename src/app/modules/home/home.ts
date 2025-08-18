import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.js';
import { TodoInputComponent } from './components/todo-input/todo-input.js';
import { Task } from '../../types/interfaces/task.interface.js';
import { constants } from '../../shared/constants/constants.js';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  imports: [TodoListComponent, TodoInputComponent],
  templateUrl: './home.html',
  styleUrl: './home.less',
})
export class Home {
  tasks: Task[] = [];
  editingTask: Task | null = null;

  addTask(text: string): void {
    this.tasks.push({
      id: 1,
      text,
      completed: false,
    });
  }

  updateTask(text: string): void {
    if (!this.editingTask) {
      return;
    }

    this.editingTask.text = text;
    this.editingTask = null;
  }

  toggleTaskComplete({
    task,
    completed,
  }: {
    task: Task;
    completed: boolean;
  }): void {
    task.completed = completed;
  }

  startEditTask(task: Task): void {
    this.editingTask = task;
  }

  deleteSelectedTasks(): void {
    this.tasks = this.tasks.filter((t) => !t.completed);
  }

  isMobile(): boolean {
    return window.innerWidth <= constants.ui.maxMobileWidth;
  }
}
