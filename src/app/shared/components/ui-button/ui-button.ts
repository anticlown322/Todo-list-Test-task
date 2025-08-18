import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-ui-button',
  imports: [],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButton {
  readonly minWidth = input<string>();
  readonly fullWidth = input<boolean>(false);
  readonly variant = input<'primary' | 'secondary' | 'danger'>('primary');
  readonly disabled = input<boolean>(false);
  readonly buttonClick = output<MouseEvent>();

  get buttonClass(): string {
    return `btn btn-${this.variant()}`;
  }
}
