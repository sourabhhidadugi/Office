import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-display-dept',
  templateUrl: './display-dept.component.html',
  styleUrls: ['./display-dept.component.css']
})
export class DisplayDeptComponent implements OnInit {
  checkForm : any;
  list: any;
  id: any;
  constructor(private formBuilder: UntypedFormBuilder) {
    this.getCrudData()
  }
  ngOnInit(): void {
    this.checkForm = this.formBuilder.group({
      dept: ['',Validators.required],
  });
  }

  getCrudData(){
    let arr = JSON.parse(localStorage.getItem('D_LIST') || "[]");
    this.list = arr
    return arr;
  }
  
  setCrudData(arr: any){
    localStorage.setItem('D_LIST',JSON.stringify(arr));
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