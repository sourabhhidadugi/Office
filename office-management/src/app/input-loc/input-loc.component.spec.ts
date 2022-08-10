import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLocComponent } from './input-loc.component';

describe('InputLocComponent', () => {
  let component: InputLocComponent;
  let fixture: ComponentFixture<InputLocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputLocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
