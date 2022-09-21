import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { InputLocationComponent } from './input-location/input-location.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { InputNameComponent } from './input-name/input-name.component';
import { NameComponent } from './name/name.component';
import { EditNameComponent } from './edit-name/edit-name.component';
import { DepartmentComponent } from './department/department.component';
import { InputDepartmentComponent } from './input-department/input-department.component';
import { AssignHodComponent } from './assign-hod/assign-hod.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    InputLocationComponent,
    EditLocationComponent,
    InputNameComponent,
    NameComponent,
    EditNameComponent,
    DepartmentComponent,
    InputDepartmentComponent,
    AssignHodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  entryComponents: [
    InputLocationComponent,
    EditLocationComponent,
    InputDepartmentComponent,
    AssignHodComponent,
    InputNameComponent,
    EditNameComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
