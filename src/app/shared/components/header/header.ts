import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.less',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private router = inject(Router);

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
