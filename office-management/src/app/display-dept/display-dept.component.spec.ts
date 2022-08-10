import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDeptComponent } from './display-dept.component';

describe('DisplayDeptComponent', () => {
  let component: DisplayDeptComponent;
  let fixture: ComponentFixture<DisplayDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
