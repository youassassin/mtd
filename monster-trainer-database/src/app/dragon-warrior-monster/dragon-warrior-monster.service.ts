import { Injectable } from '@angular/core';
import * as monsterList from '../../assets/database/dwm-monster-list.json';

@Injectable({
  providedIn: 'root'
})
export class DragonWarriorMonsterService {
  readonly data = monsterList;

  constructor() { }

  getMonsterList() {
    return this.data.dwmMonsterList;
  }
}
