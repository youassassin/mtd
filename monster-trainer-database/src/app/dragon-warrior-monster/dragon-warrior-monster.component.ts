import { Component, OnInit } from '@angular/core';
import { DragonWarriorMonsterService } from './dragon-warrior-monster.service';
import { Monster } from './model/dwm-monster.model';

@Component({
  selector: 'app-dragon-warrior-monster',
  templateUrl: './dragon-warrior-monster.component.html',
  styleUrls: ['./dragon-warrior-monster.component.css']
})
export class DragonWarriorMonsterComponent implements OnInit {

  left = '{';
  right = '}';
  monsterList: Monster[] = [];
  stringify: string[] = [];
  constructor(private dwmService: DragonWarriorMonsterService) { }

  ngOnInit(): void {
    this.monsterList = this.dwmService.getMonsterList();
    this.monsterList.forEach(m => this.stringify.push(JSON.stringify(m) + ","));
  }

  toLower(str: string) {
    return str.toLowerCase();
  }
}
