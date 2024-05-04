import { Injectable } from '@angular/core';
import * as breedingList from '../../assets/database/dwm-breeding-list.json';
import * as locationList from '../../assets/database/dwm-location-list.json';
import * as monsterList from '../../assets/database/dwm-monster-list.json';
import * as skillList from '../../assets/database/dwm-skill-list.json';
import * as xpTable from '../../assets/database/dwm-xp-table.json';
import * as growthTable from '../../assets/database/dwm-growth-table.json';
import { Monster } from './model/dwm-monster.model';
import { Skill } from './model/dwm-skill.model';
import { Breedable } from './model/dwm-breedable.model';

@Injectable({
  providedIn: 'root'
})
export class DragonWarriorMonsterService {
  readonly data = {
    monsterList: monsterList,
    skillList: skillList,
    locationList: locationList,
    breedingList: breedingList,
    xpTable: xpTable,
    growthTable: growthTable
  };

  constructor() { }

  getMonsterList(): Monster[] {
    return this.data.monsterList.dwmMonsterList;
  }

  getSkillList(): Skill[] {
    return this.data.skillList.dwmSkillList;
  }

  getBreedingList(): Breedable[] {
    return this.data.breedingList.dwmBreedingList;
  }

  getXpTable(): number[][] {
    return this.data.xpTable;
  }
}
