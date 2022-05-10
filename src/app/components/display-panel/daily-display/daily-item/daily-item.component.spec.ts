import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyItemComponent } from './daily-item.component';

describe('DailyItemComponent', () => {
  let component: DailyItemComponent;
  let fixture: ComponentFixture<DailyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
