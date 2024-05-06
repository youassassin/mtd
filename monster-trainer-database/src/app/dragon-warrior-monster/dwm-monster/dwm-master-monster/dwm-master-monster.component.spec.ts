import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwmMasterMonsterComponent } from './dwm-master-monster.component';

describe('DwmMasterMonsterComponent', () => {
  let component: DwmMasterMonsterComponent;
  let fixture: ComponentFixture<DwmMasterMonsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwmMasterMonsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwmMasterMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
