// side-menu.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SideMenuService {
  isOpen = signal(false);

  toggle() {
    this.isOpen.update(prev => !prev);
  }
}