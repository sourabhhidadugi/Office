import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-dept',
  templateUrl: './input-dept.component.html',
  styleUrls: ['./input-dept.component.css']
})
export class InputDeptComponent implements OnInit {
  checkForm : any;
  list: any;
  id: any;
  constructor(private formBuilder: FormBuilder) {
    this.getCrudData()
  }
  ngOnInit(): void {
    this.checkForm = this.formBuilder.group({
      dept: ['',Validators.required],
  });
  }

  getCrudData(){
    let arr = JSON.parse(localStorage.getItem('DEPT') || "[]");
    this.list = arr
    return arr;
  }
  
  setCrudData(arr: any){
    localStorage.setItem('DEPT',JSON.stringify(arr));
    this.id = null
  }

  onSubmit(){
      let arr=this.getCrudData();
			arr[this.id]=this.checkForm.value;
			this.setCrudData(arr);
      this.checkForm.reset()
  }

  edit(data:any){
    this.id = data
    console.log(data)
    let arr = this.getCrudData();
    console.log(arr[data]);
   if(arr[data] != undefined){
    this.checkForm.controls['dept'].setValue(arr[data].dept);
   }
   else{
    console.log(arr[data])
   }
  }
  delete(data:any){
    let arr = this.getCrudData();
    arr.splice(data,1);
    this.setCrudData(arr);
    this.edit(data);
    this.checkForm.reset();
  }
}