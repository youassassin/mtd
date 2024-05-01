import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwmSkillComponent } from './dwm-skill.component';

describe('DwmSkillComponent', () => {
  let component: DwmSkillComponent;
  let fixture: ComponentFixture<DwmSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwmSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwmSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
