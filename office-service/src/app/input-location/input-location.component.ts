import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { Location } from '../model';
import { DataService } from '../data.service';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-location',
  templateUrl: './input-location.component.html',
  styleUrls: ['./input-location.component.css'],
})
export class InputLocationComponent implements OnInit {
  locations: Array<Location> = Array<Location>();
  locForm: any;
  timestamp = Math.floor(new Date().valueOf() * Math.random()); // Generates an Unique LocationCode

  constructor(private data: DataService, private formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.locForm = this.formBuilder.group({
      locationCode: [this.timestamp, Validators.required],
      location: ['', Validators.required],
    });
  }

  onSubmit() {
    let locCode = this.locForm.value;
    if (this.data.islocationCodeUnique(this.locForm.locationCode) === false) {
      this.data.storeLocation(locCode.locationCode, locCode.location); // Passes the value to Service
      this.locForm.reset();
    } else {
      alert('Location ID Exists');
    }
  }
}
