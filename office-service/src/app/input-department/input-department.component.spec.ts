import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDepartmentComponent } from './input-department.component';

describe('InputDepartmentComponent', () => {
  let component: InputDepartmentComponent;
  let fixture: ComponentFixture<InputDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
