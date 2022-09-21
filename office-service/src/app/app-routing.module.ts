import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { LocationComponent } from './location/location.component';
import { NameComponent } from './name/name.component';

const routes: Routes = [
//  {path:"", component: LocationComponent},
 {path:"location", component: LocationComponent},
 {path:"user", component: NameComponent},
 {path:"department", component: DepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
