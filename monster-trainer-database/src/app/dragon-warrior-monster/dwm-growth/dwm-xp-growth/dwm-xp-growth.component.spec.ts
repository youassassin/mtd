import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwmXpGrowthComponent } from './dwm-xp-growth.component';

describe('DwmXpGrowthComponent', () => {
  let component: DwmXpGrowthComponent;
  let fixture: ComponentFixture<DwmXpGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwmXpGrowthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwmXpGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
