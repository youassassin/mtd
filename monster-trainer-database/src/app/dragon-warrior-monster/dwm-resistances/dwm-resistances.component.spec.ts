import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwmResistancesComponent } from './dwm-resistances.component';

describe('DwmResistancesComponent', () => {
  let component: DwmResistancesComponent;
  let fixture: ComponentFixture<DwmResistancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwmResistancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwmResistancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
