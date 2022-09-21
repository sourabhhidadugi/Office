import { Component, Inject, OnInit } from '@angular/core';
import { UserList } from '../model';
import { DataService } from '../data.service';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.css'],
})
export class EditNameComponent implements OnInit {
  userList: any = [];
  editUserForm: any;
  id: any;
  object: any = [];
  usersList: UserList;

  constructor(
    private dataService: DataService,
    private builder: FormBuilder,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.usersList = this.dataService.allUsers();
    this.usersList = this.dataService.getUserByUserId(data.userId);
    console.log('To Edit: ', this.userList);
  }

  ngOnInit(): void {
    this.editUserForm = this.builder.group({
      userId: [this.usersList.userId, Validators.required],
      userName: [this.usersList.userName, Validators.required],
      displayName: [this.usersList.displayName, Validators.required],
      emailAdd: [this.usersList.emailAdd, Validators.required],
    });
  }
  setupdatevalue() {
    this.editUserForm.controls['userId'].setValue(this.usersList.userId);
    this.editUserForm.controls['userName'].setValue(this.usersList.userName);
    this.editUserForm.controls['displayName'].setValue(
      this.usersList.displayName
    );
    this.editUserForm.controls['emailAdd'].setValue(this.usersList.emailAdd);
  }

  updateForm() {
    this.dataService.editUser(this.editUserForm.value); // Writing to the EDIT form.
    this.id = '';
  }
}
