import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwmBreederComponent } from './dwm-breeder.component';

describe('DwmBreederComponent', () => {
  let component: DwmBreederComponent;
  let fixture: ComponentFixture<DwmBreederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwmBreederComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwmBreederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
