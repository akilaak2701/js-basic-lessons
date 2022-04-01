import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoa-app';
  location = 'Chennai';
  total: number = 1000;
  hits: number = 50;

 onBoxValueChange(paramData: any)
 {
   console.log("app component: " + paramData.value);
 } 
}
