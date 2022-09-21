import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { InputNameComponent } from '../input-name/input-name.component';
import { EditNameComponent } from '../edit-name/edit-name.component';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
})
export class NameComponent implements OnInit {
  userList: any = [];
  userForm: any;
  id: any;
  object: any = [];

  constructor(
    private data: DataService,
    private builder: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userList = this.data.allUsers();
    console.table(this.userList);
    this.userForm = this.builder.group({
      userId: ['', Validators.required],
      userName: ['', Validators.required],
      displayName: ['', Validators.required],
      emailAdd: ['', Validators.required],
    });
  }
  openDialog() {
    this.dialog.open(InputNameComponent);
  }
  openEdit(value: string) {
    this.dialog.open(EditNameComponent, {
      data: {
        userId: value,
      },
    });
  }
  setupdatevalue() {
    this.userForm.controls['userId'].setValue(this.object.userId);
    this.userForm.controls['userName'].setValue(this.object.userName);
    this.userForm.controls['displayName'].setValue(this.object.displayName);
    this.userForm.controls['emailAdd'].setValue(this.object.emailAdd);
  }

  updateForm() {
    this.data.editUser(this.userForm.value);
    this.id = '';
  }

  getInfo(value: any) {
    this.id = value;
    this.object = this.data.getUserByUserId(value);
  }

  delete(obj: any) {
    this.data.deleteUser(obj);
  }
}
