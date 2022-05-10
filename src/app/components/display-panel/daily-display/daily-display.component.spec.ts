import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDisplayComponent } from './daily-display.component';

describe('DailyDisplayComponent', () => {
  let component: DailyDisplayComponent;
  let fixture: ComponentFixture<DailyDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
