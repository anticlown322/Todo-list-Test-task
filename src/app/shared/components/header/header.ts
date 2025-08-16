import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  OnInit,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.less',
  imports: [RouterLink, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header implements OnInit {
  private router = inject(Router);
  isMobileView = false;
  menuOpen = false;

  ngOnInit(): void {
    this.checkViewport();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkViewport();
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  private checkViewport(): void {
    this.isMobileView = window.innerWidth < 720;
    if (!this.isMobileView) {
      this.menuOpen = false;
    }
  }
}
