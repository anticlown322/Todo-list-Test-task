import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-ui-checkbox',
  imports: [],
  templateUrl: './ui-checkbox.html',
  styleUrl: './ui-checkbox.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCheckbox {
  private readonly _id = `checkbox-${Math.random().toString(36).substring(2, 9)}`;

  readonly id = input<string>(this._id);
  readonly checked = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly boxChange = output<boolean>();
}
