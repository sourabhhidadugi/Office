import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    InputComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatTabsModule,
    FormsModule, MatSelectModule, ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
