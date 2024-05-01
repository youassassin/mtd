import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwmMonsterComponent } from './dwm-monster.component';

describe('DwmMonsterComponent', () => {
  let component: DwmMonsterComponent;
  let fixture: ComponentFixture<DwmMonsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwmMonsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwmMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
