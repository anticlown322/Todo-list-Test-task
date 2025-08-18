import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Task } from '../../../../types/interfaces/task.interface.js';
import { TodoItemComponent } from '../todo-item/todo-item.js';
import { UiButton } from '../../../../shared/components/ui-button/ui-button.js';
import { constants } from '../../../../shared/constants/constants.js';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent, UiButton],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  readonly tasks = input<Task[]>([]);
  readonly taskCompleteChange = output<{ task: Task; completed: boolean }>();
  readonly taskEdit = output<Task>();
  readonly deleteSelected = output<void>();

  exampleTask: Task = { completed: true, id: 1, text: 'string' };

  onTaskCompleteChange(task: Task, completed: boolean): void {
    this.taskCompleteChange.emit({ task, completed });
  }

  onTaskEdit(task: Task): void {
    this.taskEdit.emit(task);
  }

  isMobile(): boolean {
    return window.innerWidth <= constants.ui.maxMobileWidth;
  }
}
