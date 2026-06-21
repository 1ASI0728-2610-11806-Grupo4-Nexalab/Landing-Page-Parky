import { Component, signal } from '@angular/core';
import { HowItWorks } from './how-it-works/how-it-works';

@Component({
  selector: 'app-root',
  imports: [HowItWorks],
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
