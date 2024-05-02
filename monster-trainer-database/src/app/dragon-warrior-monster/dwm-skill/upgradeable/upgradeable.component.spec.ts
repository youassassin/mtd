import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeableComponent } from './upgradeable.component';

describe('UpgradeableComponent', () => {
  let component: UpgradeableComponent;
  let fixture: ComponentFixture<UpgradeableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpgradeableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
