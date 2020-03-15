import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'sixth-man';
  version = 'Sixth Man version 1.0';

  // getBackgroundColor(){
  //   const color = 'orange';
  //   return color;
  // }
}