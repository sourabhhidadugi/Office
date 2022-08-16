import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-display-loc',
  templateUrl: './display-loc.component.html',
  styleUrls: ['./display-loc.component.css']
})
export class DisplayLocComponent implements OnInit {
  checkForm : any;
  list: any;
  id: any;
  constructor(private formBuilder: FormBuilder) {
    this.getCrudData()
  }
  ngOnInit(): void {
    this.checkForm = this.formBuilder.group({
      first: ['',Validators.required],
      last: ['',Validators.required],
  });
  }

  getCrudData(){
    let arr = JSON.parse(localStorage.getItem('LIST') || "[]");
    this.list = arr
    return arr;
  }
  
  setCrudData(arr: any){
    localStorage.setItem('LIST',JSON.stringify(arr));
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
    this.checkForm.controls['first'].setValue(arr[data].first);
    this.checkForm.controls['last'].setValue(arr[data].last);
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