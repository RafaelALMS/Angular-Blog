import { Component, ElementRef, inject, signal, viewChild, viewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopMenu} from './menu/menu'
import { SideMenuService } from './menu/menu-service';
import { MainBlog } from './main-blog/main-blog';
import { Recomendacoes } from "./recomendacoes/recomendacoes";
import { SideMenu } from './side-menu/side-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopMenu, MainBlog, Recomendacoes,SideMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-Blog');
  constructor(public sideMenuService: SideMenuService) {}
}