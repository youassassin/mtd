import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonWarriorMonsterComponent } from './dragon-warrior-monster.component';

describe('DragonWarriorMonsterComponent', () => {
  let component: DragonWarriorMonsterComponent;
  let fixture: ComponentFixture<DragonWarriorMonsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragonWarriorMonsterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonWarriorMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
