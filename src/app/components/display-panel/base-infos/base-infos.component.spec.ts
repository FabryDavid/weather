import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseInfosComponent } from './base-infos.component';

describe('BaseInfosComponent', () => {
  let component: BaseInfosComponent;
  let fixture: ComponentFixture<BaseInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
