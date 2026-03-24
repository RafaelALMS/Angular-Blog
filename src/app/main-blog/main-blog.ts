import { Component } from '@angular/core';
import jsonData from './PostMockTest.json';
@Component({
  selector: 'main-blog',
  imports: [],
  templateUrl: './main-blog.html',
  styleUrl: './main-blog.css',
})



export class MainBlog{
  teste:any[]=jsonData
  dados:any=jsonData
}
