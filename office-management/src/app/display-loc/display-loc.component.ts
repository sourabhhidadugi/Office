import { Component, OnInit } from '@angular/core';
import { data } from '../users'


interface UserData {  
  _id: Number;  
  name: String;  
  department: String;  
  location: String; 
  dept_id: Number
 
}  

@Component({
  selector: 'app-display-loc',
  templateUrl: './display-loc.component.html',
  styleUrls: ['./display-loc.component.css']
})
export class DisplayLocComponent implements OnInit {
  userData: Array<UserData> = data;
  constructor() { }

  ngOnInit(): void {
  }

}
