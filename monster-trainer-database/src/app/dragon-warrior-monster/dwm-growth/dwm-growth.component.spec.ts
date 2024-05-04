import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwmGrowthComponent } from './dwm-growth.component';

describe('DwmGrowthComponent', () => {
  let component: DwmGrowthComponent;
  let fixture: ComponentFixture<DwmGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwmGrowthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwmGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
