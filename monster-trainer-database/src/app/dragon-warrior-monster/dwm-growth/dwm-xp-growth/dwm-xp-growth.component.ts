import { Component, Input, OnInit } from '@angular/core';
import { DwmGrowthComponent } from '../dwm-growth.component';
import { DragonWarriorMonsterService } from '../../dragon-warrior-monster.service';

@Component({
  selector: 'xp-growth',
  templateUrl: './dwm-xp-growth.component.html',
  styleUrls: ['./dwm-xp-growth.component.css']
})
export class DwmXpGrowthComponent extends DwmGrowthComponent implements OnInit {

  @Input() rate: string = '';
  overridestringRate: string[] = [];
  xpAmount: number[] = [];

  constructor(private aDwmService: DragonWarriorMonsterService) { super(aDwmService); }

  override ngOnInit(): void {
    this.stringRate = this.getStringArrayRate(+this.rate);
    let d = this.aDwmService.getXpTable();
    for (let l of this.levels) {
      this.xpAmount.push(d[l - 1][+this.rate]);
    }
    let shortArr: number[] = []
    let arr: number[] = []
    for (let i = 0, l = 0; i < d.length; i++) {
      if (this.levels[l] - 1 === i) {
        shortArr.push(d[i][+this.rate]);
        l++;
      }
      arr.push(d[i][+this.rate]);
    }
    this.xpAmount = shortArr;
    this.rateTable.push(arr);
  }

  override getStringArrayRate(rate: number): string[] {
    let result: string[] = [];
    switch (rate) {
      case 0: result = ['Very fast', 'Very fast', 'Very fast', 'Very fast', 'Very fast']; break;
      case 1: result = ['Very fast', 'Very fast', 'Fast', 'Fast', 'Fast']; break;
      case 2: result = ['Very fast', 'Very fast', 'Very fast', 'Very fast', 'Very fast']; break;
      case 3: result = ['Very fast', 'Very fast', 'Fast', 'Fast', 'Fast']; break;
      case 4: result = ['Very fast', 'Fast', 'Fast', 'Very fast', 'Very fast']; break;
      case 5: result = ['Very fast', 'Fast', 'Fast', 'Fast', 'Fast']; break;
      case 6: result = ['Very fast', 'Fast', 'Fast', 'Very fast', 'Very fast']; break;
      case 7: result = ['Very fast', 'Fast', 'Fast', 'Fast', 'Fast']; break;
      case 8: result = ['Fast', 'Fast', 'Normal', 'Normal', 'Normal']; break;
      case 9: result = ['Fast', 'Fast', 'Normal', 'Slow', 'Slow']; break;
      case 10: result = ['Fast', 'Normal', 'Normal', 'Normal', 'Normal']; break;
      case 11: result = ['Fast', 'Normal', 'Normal', 'Slow', 'Slow']; break;
      case 12: result = ['Fast', 'Normal', 'Normal', 'Fast', 'Fast']; break;
      case 13: result = ['Fast', 'Normal', 'Normal', 'Normal', 'Normal']; break;
      case 14: result = ['Fast', 'Normal', 'Normal', 'Fast', 'Fast']; break;
      case 15: result = ['Fast', 'Normal', 'Normal', 'Slow', 'Slow']; break;
      case 16: result = ['Normal', 'Normal', 'Normal', 'Slow', 'Slow']; break;
      case 17: result = ['Normal', 'Normal', 'Slow', 'Slow', 'Slow']; break;
      case 18: result = ['Normal', 'Slow', 'Slow', 'Slow', 'Slow']; break;
      case 19: result = ['Normal', 'Slow', 'Very slow', 'Very slow', 'Very slow']; break;
      case 20: result = ['Normal', 'Slow', 'Slow', 'Slow', 'Slow']; break;
      case 21: result = ['Normal', 'Slow', 'Very slow', 'Very slow', 'Very slow']; break;
      case 22: result = ['Normal', 'Slow', 'Slow', 'Slow', 'Slow']; break;
      case 23: result = ['Normal', 'Slow', 'Very slow', 'Slow', 'Slow']; break;
      case 24: result = ['Very slow', 'Very slow', 'Slow', 'Slow', 'Slow']; break;
      case 25: result = ['Very slow', 'Very slow', 'Slow', 'Very slow', 'Very slow']; break;
      case 26: result = ['Very slow', 'Very slow', 'Very slow', 'Slow', 'Slow']; break;
      case 27: result = ['Very slow', 'Very slow', 'Very slow', 'Very slow', 'Very slow']; break;
      case 28: result = ['Very slow', 'Very slow', 'Very slow', 'Very slow', 'Very slow']; break;
      case 29: result = ['Very slow', 'Very slow', 'Very slow', 'Very slow', 'Very slow']; break;
      case 30: result = ['Very slow', 'Very slow', 'Very slow', 'Very slow', 'Very slow']; break;
      case 31: result = ['Very slow', 'Very slow', 'Very slow', 'Very slow', 'Very slow']; break;
    }
    return result;
  }

}
