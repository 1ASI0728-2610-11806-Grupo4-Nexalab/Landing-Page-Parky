import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('landing-page-parky');
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
