import { Component, OnInit } from '@angular/core';
import { User } from '../user'; 


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(
        
  ) { }
  ngOnInit(): void {
  }
  userData = new User(1, "Sourabh", "Mumbai", "Sales");
}
