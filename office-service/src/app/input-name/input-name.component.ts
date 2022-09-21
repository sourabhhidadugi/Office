import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { UserList } from '../model';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.css'],
})
export class InputNameComponent implements OnInit {
  userList: Array<UserList> = Array<UserList>();
  userForm: any;
  timestamp = Math.floor(new Date().valueOf() * Math.random()); // Generates an Unique UserId

  constructor(private data: DataService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userId: [this.timestamp * 33, Validators.required],
      userName: ['ababab', Validators.required],
      displayName: ['AB ABC', Validators.required],
      emailAdd: ['abc@xyz.com', Validators.required],
    });
  }

  onSubmit() {
    let uId = this.userForm.value;
    if (this.data.isUserIdUnique(this.userForm.userId) === false) {
      this.data.storeUser(uId.userId, uId.userName, uId.displayName, uId.emailAdd); // Passes the value to Service
      this.userForm.reset();
    } else {
      alert('User ID Exists');
      this.userForm.reset();
    }
  }
}
