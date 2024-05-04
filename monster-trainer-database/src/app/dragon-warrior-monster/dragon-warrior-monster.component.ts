import { Component, OnInit } from '@angular/core';
import { DragonWarriorMonsterService } from './dragon-warrior-monster.service';
import { Monster } from './model/dwm-monster.model';
import { DwmGrowthComponent } from './dwm-growth/dwm-growth.component';

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
  hp: Map<number, string[]> = new Map;
  z = '';

  constructor(private dwmService: DragonWarriorMonsterService) { }

  setstuff(z: Map<number, string[]>, m: string, n: string) {
    if (!z.get(+m))
      z.set(+m, [n]);
    else
      z.get(+m)?.push(n);
  }
  ngOnInit(): void {
    this.monsterList = this.dwmService.getMonsterList();
    this.monsterList.forEach(m => {
      this.stringify.push(JSON.stringify(m) + ",");
    });
    let w = ['asd'];
    this.z = JSON.stringify(new DwmGrowthComponent().growthRateUtil());
  }
}
