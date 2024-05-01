import { Component, OnInit } from '@angular/core';
import { DragonWarriorMonsterService } from './dragon-warrior-monster.service';

@Component({
  selector: 'app-dragon-warrior-monster',
  templateUrl: './dragon-warrior-monster.component.html',
  styleUrls: ['./dragon-warrior-monster.component.css']
})
export class DragonWarriorMonsterComponent implements OnInit {

  left = '{';
  right = '}';
  monsterList: { id: string; name: string; family: string; maxLevel: string; xpGrowth: string; sexChance: string; isFlying: string; isMetal: string; hpGrowth: string; mpGrowth: string; atkGrowth: string; defGrowth: string; agiGrowth: string; intGrowth: string; skills: string[]; }[] | undefined;
  constructor(private dwmService: DragonWarriorMonsterService) { }

  ngOnInit(): void {
    this.monsterList = this.dwmService.getMonsterList();
    console.log('hi')
  }

}
