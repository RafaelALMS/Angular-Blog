import { Component, Injectable } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'Top-Menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})

@Injectable({
  providedIn:'root',
})

export class TopMenu {
  isOpen:boolean=false

  ngOnInit():void{
  console.log(this.isOpen);
  }

  ativarSideMenu(){
    if(this.isOpen==false){
      return this.isOpen=true
    }
    else{
      return this.isOpen=false
    }
  }
}
