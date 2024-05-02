import { Injectable } from '@angular/core';
import * as breedingList from '../../assets/database/dwm-breeding-list.json';
import * as locationList from '../../assets/database/dwm-location-list.json';
import * as monsterList from '../../assets/database/dwm-monster-list.json';
import * as skillList from '../../assets/database/dwm-skill-list.json';
import { Monster } from './model/dwm-monster.model';
import { Skill } from './model/dwm-skill.model';

@Injectable({
  providedIn: 'root'
})
export class DragonWarriorMonsterService {
  readonly data = { monsterList: monsterList, skillList: skillList, locationList: locationList, breedingList: breedingList };

  constructor() { }

  getMonsterList(): Monster[] {
    return this.data.monsterList.dwmMonsterList;
  }

  getSkillList(): Skill[] {
    return this.data.skillList.dwmSkillList;
  }

  getBreedingList(): any[] {
    return this.data.breedingList.dwmBreedingList;
  }
}
