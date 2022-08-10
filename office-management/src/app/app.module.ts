import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { DisplayNameComponent } from './display-name/display-name.component';
import { InputNameComponent } from './input-name/input-name.component';
import { EditNameComponent } from './edit-name/edit-name.component';
import { DisplayDeptComponent } from './display-dept/display-dept.component';
import { InputDeptComponent } from './input-dept/input-dept.component';
import { EditDeptComponent } from './edit-dept/edit-dept.component';
import { DisplayLocComponent } from './display-loc/display-loc.component';
import { InputLocComponent } from './input-loc/input-loc.component';
import { EditLocComponent } from './edit-loc/edit-loc.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayNameComponent,
    InputNameComponent,
    EditNameComponent,
    DisplayDeptComponent,
    InputDeptComponent,
    EditDeptComponent,
    DisplayLocComponent,
    InputLocComponent,
    EditLocComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatTabsModule,
    FormsModule, MatSelectModule, ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
