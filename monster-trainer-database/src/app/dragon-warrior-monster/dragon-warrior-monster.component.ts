import { Component, OnInit } from '@angular/core';
import { DragonWarriorMonsterService } from './dragon-warrior-monster.service';
import { Monster } from './model/dwm-monster.model';
import { DwmGrowthComponent } from './dwm-growth/dwm-growth.component';
import { DWMLocationSimplified } from './model/dwm-location-simplified.model';

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
  z: any;
  mloc: any;
  lloc: any;

  constructor(private dwmService: DragonWarriorMonsterService) { }

  setstuff(z: Map<number, string[]>, m: string, n: string) {
    if (!z.get(+m))
      z.set(+m, [n]);
    else
      z.get(+m)?.push(n);
  }
  ngOnInit(): void {
    let mape = new Map<string, boolean>();
    this.monsterList = this.dwmService.getMonsterList();
    let u = this.dwmService.getMasterList();
    u.forEach(mm => mape.set(mm.monster.toLowerCase(), false));
    this.monsterList.forEach(m => {
      u.forEach(mm => {
        if (mm.monster.toLowerCase() === m.name.toLowerCase()) {
          mape.set(mm.monster.toLowerCase(), true);
          let ls = new DWMLocationSimplified();
          ls.gate = 'Foreign Master';
          ls.level = mm.lowerTeamLvl + '-' + mm.upperTeamLvl;
          if (m.location) {
            m.location.push(ls)
          } else {
            m['location'] = [ls];
          }
        }
      })
      this.stringify.push(JSON.stringify(m) + ",");
    }); var keys = Object.keys(mape);
    this.z = [...mape.entries()];
    let w = ['asd'];
    // this.z = JSON.stringify(new DwmGrowthComponent().growthRateUtil());
  }
}
