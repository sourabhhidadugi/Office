import { Component, OnInit } from '@angular/core';
import { User } from '../user'; 


@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.css']
})
export class InputNameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userData = new User(1, "Sourabh", "Mumbai", "Sales");

}
