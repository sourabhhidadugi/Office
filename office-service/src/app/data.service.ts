import { Injectable } from '@angular/core';
import { Department, Location, UserList } from './model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private locations: Array<Location> = [];
  loc: any;
  public userList: Array<UserList> = [];
  userNew: any;
  private departments: Array<Department> = [];
  newDept: any;
  constructor() {}

  // ***************** CODE FOR LOCATION COMPONENTS *****************

  allLocations(): any {
    return this.locations; //returns the list of all locations
  }

  getLocationByCode(value: any): any {
    for (let i = 0; i < this.locations.length; i++) {
      let user = this.locations[i];
      if (user.locationCode == value) {
        return this.locations[i]; // Returns Locations by locationCode
      }
    }
  }

  storeLocation(locationCode: number, location: string): any {
    this.loc = { locationCode: locationCode, location: location }; // Inserts values from form field
    this.locations.push(this.loc); // Adds to locations array
  }

  islocationCodeUnique(locationCode: number): Boolean {
    console.log(locationCode);
    let exists = false;
    for (let i = 0; i < this.locations.length; i++) {
      if (this.locations[i].locationCode === locationCode) {
        exists = true;
        console.log('Exists: ' + exists);
      }
    }
    return exists;
  }

  editLoc(obj: any) {
    for (let i = 0; i < this.locations.length; i++) {
      let data = this.locations[i];
      if (data.locationCode == obj.locationCode) {
        data.locationCode = obj.locationCode;
        data.location = obj.location;
      }
    }
  }

  deleteLoc(obj: any) {
    console.log('Location at ' + obj + ' has been Deleted');
    this.locations.splice(obj, 1);
    this.allLocations();
  }

  // ***************** CODE FOR USER COMPONENTS *****************

  allUsers(): any {
    return this.userList;
  }

  getUserByUserId(value: any): any {
    for (let i = 0; i < this.userList.length; i++) {
      let users = this.userList[i];
      if (users.userId == value) {
        console.log(this.userList[i]);
        return this.userList[i]; // Returns Users by User ID
      }
    }
  }

  storeUser(
    userId: number,
    userName: string,
    displayName: string,
    emailAdd: string
  ): any {
    this.userNew = {
      userId: userId,
      userName: userName,
      displayName: displayName,
      emailAdd: emailAdd,
    }; // Inserts values from form field in Store User Component
    this.userList.push(this.userNew); // Adds to UserList array
  }

  isUserIdUnique(userId: string): Boolean {
    // console.log(userId);
    let exists = false;
    for (let i = 0; i < this.userList.length; i++) {
      if (this.userList[i].userId === userId) {
        console.table(this.userList);
        exists = true;
      }
    }
    return exists;
  }

  // editLoc(obj: any) {
  //   for (let i = 0; i < this.locations.length; i++) {
  //     let data = this.locations[i];
  //     if (data.locationCode == obj.locationCode) {
  //       data.locationCode = obj.locationCode;
  //       data.location = obj.location;
  //     }
  //   }
  // }
  editUser(obj: any) {
    for (let i = 0; i < this.userList.length; i++) {
      let nameData = this.userList[i];
      if (nameData.userId == obj.userId) {
        nameData.userId = obj.userId;
        nameData.userName = obj.userName;
        nameData.displayName = obj.displayName;
        nameData.emailAdd = obj.emailAdd;
      }
    }
  }

  deleteUser(obj: any) {
    console.log(obj, 'Has been deleted!');
    this.userList.splice(obj, 1);
    this.allUsers();
  }

  // ***************** CODE FOR DRPARTMENT COMPONENTS *****************

  allDepartments(): any {
    return this.departments; //returns the list of all departments
  }

  getDepartmentByCode(value: any): any {
    for (let i = 0; i < this.departments.length; i++) {
      let dept = this.departments[i];
      if (dept.departmentCode == value) {
        return this.departments[i]; // Returns departments by departmentCode
      }
    }
  }

  storeDepartment(
    departmentCode: number,
    departmentName: string,
    hod: any
  ): any {
    this.newDept = {
      departmentCode: departmentCode,
      departmentName: departmentName,
    }; // Inserts values from form field
    // console.log(this.newDept);
    this.departments.push(this.newDept); // Adds to departments array
    console.log(this.departments);
  }

  isDeratmentCodeUnique(departmentCode: string): Boolean {
    console.log(departmentCode);
    let exists = false;
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].departmentCode === departmentCode) {
        exists = true;
        console.log('Department Code Exists: ' + exists);
      }
    }
    return exists;
  }

  AssignHod(obj: any) {
    for (let i = 0; i < this.departments.length; i++) {
      let data = this.departments[i];
      if (data.departmentCode == obj.departmentCode) {
        data.departmentCode = obj.departmentCode;
        data.departmentName = obj.departmentName;
        data.hod = obj.hod;
      }
    }
  }

  deleteDepartment(obj: any) {
    console.log('Department at ' + obj + ' has been Deleted');
    this.departments.splice(obj, 1);
    this.allDepartments();
  }
}
