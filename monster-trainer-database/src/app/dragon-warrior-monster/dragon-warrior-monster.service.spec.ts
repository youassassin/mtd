import { TestBed } from '@angular/core/testing';

import { DragonWarriorMonsterService } from './dragon-warrior-monster.service';

describe('DragonWarriorMonsterService', () => {
  let service: DragonWarriorMonsterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonWarriorMonsterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get monster list', () => {
    expect(service.getMonsterList().length).toBe(215);
  });
});
