import { Component} from '@angular/core';
import { SideMenuService } from './menu-service';
@Component({
  selector: 'Top-Menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})




export class TopMenu {
  constructor(private sideMenuService: SideMenuService) {}

  ativarSideMenu() {
    this.sideMenuService.toggle();
  }

}


