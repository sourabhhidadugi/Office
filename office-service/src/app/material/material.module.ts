import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';

const materials:any = [MatDialogModule]

@NgModule({
  
  imports: [materials],
  exports: [materials]
})
export class MaterialModule { }
