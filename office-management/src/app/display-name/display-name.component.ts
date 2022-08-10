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
  selector: 'app-display-name',
  templateUrl: './display-name.component.html',
  styleUrls: ['./display-name.component.css']
})
export class DisplayNameComponent implements OnInit {
  userData: Array<UserData> = data;
  constructor() { }

  ngOnInit(): void {
  }

}
