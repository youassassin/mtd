import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwmLibraryComponent } from './dwm-library.component';

describe('DwmLibraryViewComponent', () => {
  let component: DwmLibraryComponent;
  let fixture: ComponentFixture<DwmLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DwmLibraryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwmLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
