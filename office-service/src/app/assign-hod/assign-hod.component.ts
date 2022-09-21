import { Component, Inject, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Department, UserList } from '../model';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-assign-hod',
  templateUrl: './assign-hod.component.html',
  styleUrls: ['./assign-hod.component.css'],
})
export class AssignHodComponent implements OnInit {
  assignHodForm: any;
  id: any;
  object: any = [];
  department: Department;
  // usersList: UserList | undefined;
  allUsers: UserList;
  
  constructor(
    private dataService: DataService,
    private builder: FormBuilder,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: any, 
  ) {
    this.department = this.dataService.allDepartments();
    this.department = this.dataService.getDepartmentByCode(data.departmentCode);
    console.log('Assigning HOD to: ', this.department.departmentName);
  }
  assignableUsers(){
     return this.allUsers;
   } 
  ngOnInit(): void {
    this.assignHodForm = this.builder.group({
      departmentCode: [this.department?.departmentCode, Validators.required],
      departmentName: [this.department?.departmentName, Validators.required],
      hod: ['', Validators.required],
    });
  }
  setupdatevalue() {
    this.assignHodForm.controls['departmentCode'].setValue(
      this.department.departmentCode
    );
    this.assignHodForm.controls['departmentName'].setValue(
      this.department.departmentName
    );
    this.assignHodForm.controls['hod'].setValue(this.department?.hod);
  }

  updateForm() {
    this.dataService.AssignHod(this.assignHodForm.value);
    this.id = '';
  }
  getUsers() {}
}
