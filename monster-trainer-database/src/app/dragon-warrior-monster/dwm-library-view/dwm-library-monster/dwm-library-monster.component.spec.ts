import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwmLibraryMonsterComponent } from './dwm-library-monster.component';

describe('DwmLibraryMonsterComponent', () => {
  let component: DwmLibraryMonsterComponent;
  let fixture: ComponentFixture<DwmLibraryMonsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwmLibraryMonsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwmLibraryMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
