import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyDisplayComponent } from './hourly-display.component';

describe('HourlyDisplayComponent', () => {
  let component: HourlyDisplayComponent;
  let fixture: ComponentFixture<HourlyDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
