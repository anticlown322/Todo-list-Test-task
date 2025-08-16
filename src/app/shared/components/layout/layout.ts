import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header.js';

@Component({
  imports: [RouterOutlet, Header],
  templateUrl: './layout.html',
  styleUrl: './layout.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-layout',
})
export class Layout {}
