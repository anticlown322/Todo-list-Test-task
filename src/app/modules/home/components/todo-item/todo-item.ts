import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Task } from '../../../../types/interfaces/task.interface.js';
import { UiCheckbox } from '../../../../shared/components/ui-checkbox/ui-checkbox.js';
import { UiIconButton } from '../../../../shared/components/ui-icon-button/ui-icon-button.js';

@Component({
  selector: 'app-todo-item',
  imports: [UiCheckbox, UiIconButton],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  readonly task = input<Task>({
    id: 1,
    text: '',
    completed: false,
  });
  readonly completeChange = output<boolean>();
  readonly edit = output<Task>();
  readonly delete = output<Task>();

  toggleComplete(): void {
    if (this.task()) {
      this.completeChange.emit(!this.task().completed);
    }
  }
}
