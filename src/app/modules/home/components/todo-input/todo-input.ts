import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { UiButton } from '../../../../shared/components/ui-button/ui-button.js';
import { constants } from '../../../../shared/constants/constants.js';

@Component({
  selector: 'app-todo-input',
  imports: [UiButton],
  templateUrl: './todo-input.html',
  styleUrl: './todo-input.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoInputComponent {
  readonly addTask = output<string>();
  readonly editTask = output<string>();

  taskText = '';
  isEditing = false;

  handleAddOrEdit(): void {
    if (!this.taskText.trim()) {
      return;
    }

    if (this.isEditing) {
      this.editTask.emit(this.taskText);
    } else {
      this.addTask.emit(this.taskText);
    }

    this.taskText = '';
    this.isEditing = false;
  }

  startEdit(text: string): void {
    this.taskText = text;
    this.isEditing = true;
  }

  isMobile(): boolean {
    return window.innerWidth <= constants.ui.maxMobileWidth;
  }
}
