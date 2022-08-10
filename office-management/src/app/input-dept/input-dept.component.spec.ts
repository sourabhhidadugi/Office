import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDeptComponent } from './input-dept.component';

describe('InputDeptComponent', () => {
  let component: InputDeptComponent;
  let fixture: ComponentFixture<InputDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
