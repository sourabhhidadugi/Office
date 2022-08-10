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
  selector: 'app-display-dept',
  templateUrl: './display-dept.component.html',
  styleUrls: ['./display-dept.component.css']
})
export class DisplayDeptComponent implements OnInit {
  userData: Array<UserData> = data;
  constructor() { }

  ngOnInit(): void {
  }

}
