import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { DisplayNameComponent } from './display-name/display-name.component';
import { InputNameComponent } from './input-name/input-name.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { DisplayLocComponent } from './display-loc/display-loc.component';
import { DisplayDeptComponent } from './display-dept/display-dept.component';
import { InputLocComponent } from './input-loc/input-loc.component';
import { InputDeptComponent } from './input-dept/input-dept.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayNameComponent,
    InputNameComponent,
    DisplayLocComponent,
    DisplayDeptComponent,
    InputLocComponent,
    InputDeptComponent,
    
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatTabsModule, MatIconModule,
    FormsModule, MatSelectModule, ReactiveFormsModule, MatGridListModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
