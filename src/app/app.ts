import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopMenu} from './menu/menu'
import { MainBlog } from './main-blog/main-blog';
import { Recomendacoes } from "./recomendacoes/recomendacoes";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopMenu, MainBlog, Recomendacoes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-Blog');
  IsOpen=inject(TopMenu)
  ngOnInit():void{
  console.log(this.IsOpen.isOpen);
  }
}