import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonMonsterWarriorComponent } from './dragon-warrior-monster.component';

describe('DragonMonsterWarriorComponent', () => {
  let component: DragonMonsterWarriorComponent;
  let fixture: ComponentFixture<DragonMonsterWarriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragonMonsterWarriorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonMonsterWarriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
