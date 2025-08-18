import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-ui-icon-button',
  imports: [],
  templateUrl: './ui-icon-button.html',
  styleUrl: './ui-icon-button.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiIconButton {
  readonly iconPath = input.required<string>();
  readonly altText = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly size = input<'small' | 'medium' | 'large'>('medium');

  readonly clicked = output<MouseEvent>();

  handleClick(event: MouseEvent): void {
    if (!this.disabled()) {
      this.clicked.emit(event);
    }
    event.stopPropagation();
  }
}
