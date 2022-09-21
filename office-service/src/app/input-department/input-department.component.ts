import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Department, Location } from '../model';
import { DataService } from '../data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-department',
  templateUrl: './input-department.component.html',
  styleUrls: ['./input-department.component.css'],
})
export class InputDepartmentComponent implements OnInit {
  departments: Array<Department> = Array<Department>();
  deptForm: any;

  constructor(private data: DataService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.deptForm = this.formBuilder.group({
      departmentCode: ['', Validators.required],
      departmentName: ['', Validators.required],
      HOD: [''],
    });
  }

  onAdd() {
    let depCode = this.deptForm.value;

    this.data.storeDepartment(
      depCode.departmentCode,
      depCode.departmentName,
      depCode.HOD
    ); 
    this.deptForm.reset(); //works
  }
  //   let depCode = this.deptForm.value;
  //   if (
  //     this.data.isDeratmentCodeUnique(this.deptForm.departmentCode) === false
  //   ) {
  //      else {
  //     alert('Department Code cannot be duplicated');
  //   }
  // }
}
