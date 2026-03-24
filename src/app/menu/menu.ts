import { Component, Injectable } from '@angular/core';

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
  ngOnChanges(){
    
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
