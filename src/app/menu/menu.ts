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
      console.log(this.isOpen)
      return this.isOpen=true
    }
    else{
      console.log(this.isOpen)
      return this.isOpen=false
    }
  }
}
