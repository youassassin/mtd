import { Injectable } from '@angular/core';
import * as monsterList from '../../assets/database/dwm-monster-list.json';
import * as skillList from '../../assets/database/dwm-skill-list.json';
import { Monster } from './model/dwm-monster.model';
import { Skill } from './model/dwm-skill.model';

@Injectable({
  providedIn: 'root'
})
export class DragonWarriorMonsterService {
  readonly data = { monsterList: monsterList, skillList: skillList };

  constructor() { }

  getMonsterList(): Monster[] {
    return this.data.monsterList.dwmMonsterList;
  }

  getSkillList(): Skill[] {
    return this.data.skillList.dwmSkillList;
  }
}
