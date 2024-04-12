import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';

const materials:any = [MatDialogModule]

@NgModule({
  
  imports: [materials],
  exports: [materials]
})
export class MaterialModule { }
