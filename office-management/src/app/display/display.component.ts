import { Component, OnInit } from '@angular/core';
import { data } from './users'


interface UserData {  
  _id: Number;  
  name: String;  
  department: String;  
  location: String;  
}  

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  userData: Array<UserData> = data;
  constructor() { }

  ngOnInit(): void {
  }

}
