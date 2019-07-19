import { Component } from '@angular/core';
import {HttpService} from '../../service/app.service';

@Component({
  selector: 'demo',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css'],
  providers:[HttpService]
})
export class DemoComponent {
  arr:Array<Object>;
  constructor(public http:HttpService){};
  ngOnInit(){
    this.http.get('/home',data=>{
      console.log(data);
      this.arr = data;
    });
  }
}
