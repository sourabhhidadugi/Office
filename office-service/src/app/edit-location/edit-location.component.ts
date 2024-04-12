import { Component, Inject, OnInit } from '@angular/core';
import { Location } from '../model';
import { DataService } from '../data.service';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatLegacyDialog as MatDialog, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css'],
})
export class EditLocationComponent implements OnInit {
  locations: any = [];
  editLocForm: any;
  id: any;
  object: any = [];
  location: Location;

  constructor(
    private dataService: DataService,
    private builder: UntypedFormBuilder,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.locations = this.dataService.allLocations();
    this.location = this.dataService.getLocationByCode(data.locationCode);
    console.log('To Edit: ', this.location);
  }

  ngOnInit(): void {
    this.editLocForm = this.builder.group({
      locationCode: [this.location.locationCode, Validators.required],
      location: [this.location.location, Validators.required],
    });
  }
  setupdatevalue() {
    this.editLocForm.controls['locationCode'].setValue(this.location.locationCode);
    this.editLocForm.controls['location'].setValue(this.location.location);
  }

  updateForm() {
    this.dataService.editLoc(this.editLocForm.value); // Writing to the EDIT form.
    this.id = '';
  }
}
