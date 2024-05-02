import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinableComponent } from './combinable.component';

describe('CombinableComponent', () => {
  let component: CombinableComponent;
  let fixture: ComponentFixture<CombinableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CombinableComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
