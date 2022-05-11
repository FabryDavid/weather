import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTemperatureDetailsComponent } from './current-temperature-details.component';

describe('CurrentTemperatureDetailsComponent', () => {
  let component: CurrentTemperatureDetailsComponent;
  let fixture: ComponentFixture<CurrentTemperatureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTemperatureDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTemperatureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
