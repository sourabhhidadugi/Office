import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { InputDepartmentComponent } from '../input-department/input-department.component';
import { AssignHodComponent } from '../assign-hod/assign-hod.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  departments: any = [];
  deptForm: any;
  id: any;
  object: any = [];

  constructor(
    private data: DataService,
    private builder: UntypedFormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.departments = this.data.allDepartments();
    console.table(this.departments);
    this.deptForm = this.builder.group({
      departmentCode: ['', Validators.required],
      departmentName: ['', Validators.required],
      HOD: [''],
      
    });
  }
  openDialog() {
    this.dialog.open(InputDepartmentComponent);
  }
  assignHead(value: string) {
    this.dialog.open(AssignHodComponent, {
      data: {
        departmentCode: value,
        departmentName: value,
        hod: value,
      },
    });
  }
  setupdatevalue() {
    this.deptForm.controls['departmentCode'].setValue(this.object.departmentCode);
    this.deptForm.controls['departmentName'].setValue(this.object.departmentName);
    this.deptForm.controls['hod'].setValue(this.object.hod);

  }

  updateForm() {
    this.data.AssignHod(this.deptForm.value);
    this.id = '';
  }

  getInfo(value: any) {
    this.id = value;
    this.object = this.data.getDepartmentByCode(value);
  }

  delete(obj: any) {
    this.data.deleteDepartment(obj);
  }
}
