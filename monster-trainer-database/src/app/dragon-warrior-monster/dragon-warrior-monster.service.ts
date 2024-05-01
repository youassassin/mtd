import { Injectable } from '@angular/core';
import * as monsterList from '../../assets/database/dwm-monster-list.json';
import * as skillList from '../../assets/database/dwm-skill-list.json';

@Injectable({
  providedIn: 'root'
})
export class DragonWarriorMonsterService {
  readonly data = { monsterList: monsterList, skillList: skillList };

  constructor() { }

  getMonsterList() {
    return this.data.monsterList.dwmMonsterList;
  }

  getSkillList() {
    return this.data.skillList.dwmSkillList;
  }
}
