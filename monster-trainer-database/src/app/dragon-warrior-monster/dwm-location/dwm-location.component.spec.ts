import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwmLocationComponent } from './dwm-location.component';

describe('DwmLocationComponent', () => {
  let component: DwmLocationComponent;
  let fixture: ComponentFixture<DwmLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwmLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwmLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
