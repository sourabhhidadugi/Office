import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLocComponent } from './display-loc.component';

describe('DisplayLocComponent', () => {
  let component: DisplayLocComponent;
  let fixture: ComponentFixture<DisplayLocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayLocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
