
import { Component, Input, OnInit } from '@angular/core';
import * as asjon from '../../../assets/database/dwm-xp-table.json';
import { DragonWarriorMonsterService } from '../dragon-warrior-monster.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'dwm-growth',
  templateUrl: './dwm-growth.component.html',
  styleUrls: ['./dwm-growth.component.css']
})
export class DwmGrowthComponent implements OnInit {

  @Input() rates: string[] = [];
  @Input() detailEvent!: Subject<boolean>;
  stringRate: string[] = [];
  detailedRate: string[][] = [];
  levels: number[] = [20, 40, 60, 80, 99];
  amount: number[] = [];
  detailedAmount: number[][] = [];
  isDetailed: boolean = false;
  rateTable: number[][] = [];
  viewModalEvent: Subject<string> = new Subject();
  header: string[] = ['lvl', 'Total'];

  ajax = { data: asjon };

  readonly LABELS = ['HP', 'MP', 'ATK', 'DEF', 'AGI', 'INT'];

  constructor(private dwmService: DragonWarriorMonsterService) { }

  ngOnInit(): void {
    this.detailEvent.subscribe(isDetailed => { this.isDetailed = isDetailed });
    let d = this.dwmService.getGrowthTable();

    this.rates.forEach(n => {
      this.stringRate.push(this.getStringRate(+n))
      this.detailedRate.push(this.getStringArrayRate(+n));

      let shortArr: number[] = []
      let arr: number[] = []
      for (let i = 0, l = 0; i < d.length; i++) {
        if (this.levels[l] - 1 === i) {
          shortArr.push(d[i][+n]);
          l++;
        }
        arr.push(d[i][+n]);
      }
      this.detailedAmount.push(shortArr);
      this.rateTable.push(arr);
    });
  }

  onViewTable(id: string) {
    this.viewModalEvent.next(id);
  }

  getStringRate(rate: number): string {
    let result = 'error';

    if (-1 < rate && rate < 4)
      result = 'Very slow';
    else if (rate < 8)
      result = 'Slow';
    else if (rate < 17)
      result = 'Normal';
    else if (rate < 25)
      result = 'Fast';
    else if (rate < 32)
      result = 'Very fast';
    return result;
  }

  getStringArrayRate(rate: number): string[] {
    let result: string[] = [];

    switch (rate) {
      case 0: result = ['Very slow', 'Very slow', 'Very slow', 'Very slow', 'Very slow']; break;
      case 1: result = ['Very slow', 'Slow', 'Very slow', 'Slow', 'Very slow']; break;
      case 2: result = ['Slow', 'Slow', 'Very slow', 'Very slow', 'Very slow']; break;
      case 3: result = ['Fast', 'Slow', 'Very slow', 'Very slow', 'Very slow']; break;
      case 4: result = ['Slow', 'Normal', 'Slow', 'Slow', 'Very slow']; break;
      case 5: result = ['Slow', 'Slow', 'Very slow', 'Slow', 'Very slow']; break;
      case 6: result = ['Fast', 'Normal', 'Very slow', 'Very slow', 'Very slow']; break;
      case 7: result = ['Slow', 'Slow', 'Normal', 'Normal', 'Stopped']; break;
      case 8: result = ['Slow', 'Fast', 'Very fast', 'Normal', 'Slow']; break;
      case 9: result = ['Normal', 'Very fast', 'Normal', 'Normal', 'Normal']; break;
      case 10: result = ['Slow', 'Normal', 'Very fast', 'Fast', 'Very fast']; break;
      case 11: result = ['Slow', 'Fast', 'Very fast', 'Very fast', 'Fast']; break;
      case 12: result = ['Slow', 'Fast', 'Very fast', 'Fast', 'Normal']; break;
      case 13: result = ['Normal', 'Normal', 'Fast', 'Normal', 'Normal']; break;
      case 14: result = ['Slow', 'Normal', 'Fast', 'Normal', 'Slow']; break;
      case 15: result = ['Normal', 'Fast', 'Fast', 'Slow', 'Slow']; break;
      case 16: result = ['Slow', 'Slow', 'Very fast', 'Fast', 'Normal']; break;
      case 17: result = ['Normal', 'Normal', 'Very fast', 'Fast', 'Stopped']; break;
      case 18: result = ['Normal', 'Fast', 'Very fast', 'Fast', 'Normal']; break;
      case 19: result = ['Fast', 'Normal', 'Fast', 'Slow', 'Slow']; break;
      case 20: result = ['Fast', 'Normal', 'Fast', 'Slow', 'Slow']; break;
      case 21: result = ['Fast', 'Fast', 'Fast', 'Normal', 'Slow']; break;
      case 22: result = ['Fast', 'Slow', 'Very fast', 'Fast', 'Normal']; break;
      case 23: result = ['Fast', 'Normal', 'Very fast', 'Fast', 'Normal']; break;
      case 24: result = ['Fast', 'Fast', 'Fast', 'Fast', 'Normal']; break;
      case 25: result = ['Slow', 'Fast', 'Very fast', 'Very fast', 'Maxed']; break;
      case 26: result = ['Fast', 'Fast', 'Very fast', 'Very fast', 'Maxed']; break;
      case 27: result = ['Very fast', 'Normal', 'Very fast', 'Very fast', 'Maxed']; break;
      case 28: result = ['Normal', 'Very fast', 'Very fast', 'Very fast', 'Maxed']; break;
      case 29: result = ['Fast', 'Very fast', 'Very fast', 'Very fast', 'Maxed']; break;
      case 30: result = ['Very fast', 'Fast', 'Very fast', 'Maxed', 'Maxed']; break;
      case 31: result = ['Very fast', 'Very fast', 'Very fast', 'Maxed', 'Maxed']; break;
    }
    return result;
  }

  growthRateUtil() {
    let w = []
    for (let i = 0; i < 32; i++) {
      w.push(`case ${i}: result = ['${this.doMath(19, 0, i)}`);
    }
    for (let i = 0; i < 32; i++) {
      w[i] += '\', \'' + this.doMath(39, 19, i);
    }
    for (let i = 0; i < 32; i++) {
      w[i] += '\', \'' + this.doMath(59, 39, i);
    }
    for (let i = 0; i < 32; i++) {
      w[i] += '\', \'' + this.doMath(79, 59, i);
    }
    for (let i = 0; i < 32; i++) {
      w[i] += '\', \'' + this.doMath(98, 78, i);
      w[i] += '\']; break;'
    }
    return w;
  }
  doMath(from: number, to: number, at: number) {
    let f = this.ajax.data[from][at];
    let t = this.ajax.data[to][at];
    let n = f - t;
    let m = this.ajax.data[to + 14][at];
    let z = f - m;
    if ((from === 19 && n < 7001)
      || (from === 39 && n < 150001)
      || (from === 59 && n < 425001)
      || (from === 79 && n < 501001)
      || (from === 98 && n < 501001))
      return 'Very fast';
    else if ((from === 19 && n < 14001)
      || (from === 39 && n < 225001)
      || (from === 59 && n < 601000)
      || (from === 79 && n < 801000)
      || (from === 98 && n < 801000))
      return 'Fast';
    else if ((from === 19 && n < 28001)
      || (from === 39 && n < 500001)
      || (from === 59 && n < 1000001)
      || (from === 79 && n < 1000001)
      || (from === 98 && n < 1000001))
      return 'Normal';
    else if ((from === 39 && n < 750001)
      || (from === 59 && n < 1200001)
      || (from === 79 && n < 1500001)
      || (from === 98 && n < 1500001))
      return 'Slow';
    else
      return 'Very slow';
  }
}

