import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { InputLocationComponent } from '../input-location/input-location.component';
import { EditLocationComponent } from '../edit-location/edit-location.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  locations: any = [];
  locForm: any;
  id: any;
  object: any = [];

  constructor(
    private data: DataService,
    private builder: UntypedFormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.locations = this.data.allLocations();
    this.locForm = this.builder.group({
      locationCode: ['', Validators.required],
      location: ['', Validators.required],
    });
  }
  openDialog() {
    this.dialog.open(InputLocationComponent);
  }
  openEdit(value: string) {
    this.dialog.open(EditLocationComponent, {
      data: {
        locationCode: value,
      },
    });
  }

  updateForm() {
    this.data.editLoc(this.locForm.value);
    this.id = '';
  }

  getInfo(value: any) {
    this.id = value;
    this.object = this.data.getLocationByCode(value);
    console.log(this.object);
  }

  delete(obj: any) {
    this.data.deleteLoc(obj);
  }
}
