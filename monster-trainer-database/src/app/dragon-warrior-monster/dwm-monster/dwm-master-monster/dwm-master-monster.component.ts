import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DragonWarriorMonsterService } from '../../dragon-warrior-monster.service';
import { MasterMonster } from '../../model/dwm-master-monster.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dwm-master-monster',
  templateUrl: './dwm-master-monster.component.html',
  styleUrls: ['./dwm-master-monster.component.css']
})
export class DwmMasterMonsterComponent implements OnInit {

  @ViewChild('tMonImg') monsterImg!: ElementRef;
  @ViewChild('tLvlImg') lvlImg!: ElementRef;
  form: FormGroup;
  previousStates: any;
  masters: MasterMonster[] = [];
  table: MasterMonster[] = [];
  skills: string[] = [];
  monsters: string[] = [];

  readonly UP_PATH = '../../../../assets/icons/sortable-up.png';
  readonly EVEN_PATH = '../../../../assets/icons/sortable-even.png';
  readonly DOWN_PATH = '../../../../assets/icons/sortable-down.png';
  constructor(private dwmService: DragonWarriorMonsterService) {
    this.form = new FormBuilder().group({
      'monOne': '',
      'monTwo': '',
      'monThree': '',
      'monTot': '',
      'monster': '',
      'skill': ''
    });
    this.previousStates = {
      monOne: '',
      monTwo: '',
      monThree: '',
      monTot: ''
    }
  }

  ngOnInit(): void {
    this.masters = this.dwmService.getMasterList();
    this.reset();
  }

  updateMonsterLevels(event: any) {
    let id = event.target.id;
    let value = this.form.get(id)?.value;
    if (event.inputType === 'insertFromPaste' || isNaN(event.data) || +value < 0 || event.data === ' ') {
      this.form.get(id)?.setValue(this.previousStates[id]);
      this.form.get(id)?.updateValueAndValidity();
    } else if (id !== 'monTot' && +value > 99) {
      this.form.get(id)?.setValue('99');
      this.calculateAndSetTotalValue()
    } else if (id === 'monTot' && +value > 297) {
      this.form.get('monOne')?.setValue('99');
      this.form.get('monTwo')?.setValue('99');
      this.form.get('monThree')?.setValue('99');
      this.form.get('monTot')?.setValue('297');
    } else if (id !== 'monTot') {
      this.calculateAndSetTotalValue()
    }
    this.previousStates[id] = this.form.get(id)?.value;
    this.updateTableLvl();
  }
  calculateAndSetTotalValue() {
    this.form.get('monTot')?.setValue(
      +this.form.get('monOne')?.value +
      +this.form.get('monTwo')?.value +
      +this.form.get('monThree')?.value);
  }
  updateTableLvl() {
    let lvl = +this.form.get('monTot')?.value;
    if (lvl < 3)
      this.reset()
    else
      this.table = this.masters.filter(m => m.lowerTeamLvl <= lvl && lvl <= m.upperTeamLvl);
  }
  reset() {
    this.table = [];
    this.masters.forEach(m => this.table.push(m));

    let skillSet = new Set<string>();
    this.masters.forEach(m =>
      m.skills.forEach(s =>
        skillSet.add(s)
      ));
    this.skills = Array.from(skillSet);
    this.skills.sort();
  }
  resetInput() {
    this.form.get('monOne')?.setValue('');
    this.form.get('monTwo')?.setValue('');
    this.form.get('monThree')?.setValue('');
    this.form.get('monTot')?.setValue('');
    this.form.get('monster')?.setValue('');
    this.form.get('skill')?.setValue('');
    this.reset();
  }

  monsterSearch() {
    let name = this.form.get('monster')?.value;
    if (!name)
      this.reset();
    else {
      this.table = this.masters.filter(m => {
        let t = m.monster.toLowerCase();
        let n = name.toLowerCase();
        if (t.length < n.length)
          return false;

        return t.includes(name.toLowerCase());
      });
    }
  }

  skillSearch(event: any) {
    console.log(event)
    let name = this.form.get('skill')?.value;
    if (!name)
      this.reset();
    else {
      let skillSet = new Set<string>();
      this.table = this.masters.filter(m => {
        let t = m.skills.filter(s => {
          let t = s.toLowerCase();
          let n = name.toLowerCase();
          if (t.length < n.length)
            return false;

          if (t.includes(name.toLowerCase())) {
            skillSet.add(s)
            return true;
          } else {
            return false;
          }
        });
        return t.length !== 0;
      });
      if (event.data) {
        this.skills = Array.from(skillSet);
        this.skills.sort();
      }
    }
  }
  sort(event: any) {
    let id = event.target.id;
    if (id === 'tLvl' || id === 'tLvlImg') {
      let imgDirection = this.lvlImg.nativeElement.src;
      if (imgDirection.endsWith('even.png') || imgDirection.endsWith('up.png')) {
        this.lvlImg.nativeElement.src = this.DOWN_PATH;
        this.monsterImg.nativeElement.src = this.EVEN_PATH;
        this.sortList(true, false);
      } else {
        this.lvlImg.nativeElement.src = this.UP_PATH;
        this.monsterImg.nativeElement.src = this.EVEN_PATH;
        this.sortList(false, false);
      }
    } else if (id === 'tMon' || id === 'tMonImg') {
      let imgDirection = this.monsterImg.nativeElement.src;
      if (imgDirection.endsWith('even.png') || imgDirection.endsWith('up.png')) {
        this.monsterImg.nativeElement.src = this.DOWN_PATH;
        this.lvlImg.nativeElement.src = this.EVEN_PATH;
        this.sortList(true, true);
      } else {
        this.monsterImg.nativeElement.src = this.UP_PATH;
        this.lvlImg.nativeElement.src = this.EVEN_PATH;
        this.sortList(false, true);
      }
    }
  }

  sortList(isUp: boolean, isMonster: boolean) {
    if (isUp && isMonster)
      this.table.sort((a, b) => a.monster < b.monster ? -1 : (a.monster > b.monster ? 1 : 0));
    else if (!isUp && isMonster)
      this.table.sort((a, b) => b.monster < a.monster ? -1 : (b.monster > a.monster ? 1 : 0));
    else if (isUp && !isMonster)
      this.table.sort((a, b) => a.lowerTeamLvl - b.lowerTeamLvl);
    else
      this.table.sort((a, b) => b.lowerTeamLvl - a.lowerTeamLvl);
  }
  // swapImages(clicked: any, other: any) {
  //   if (clicked.endsWith('even.png') || clicked.endsWith('up.png')) {
  //     clicked = this.DOWN_PATH;
  //     other = this.EVEN_PATH;
  //   } else {
  //     clicked = this.UP_PATH;
  //     other = this.EVEN_PATH;
  //   }
  // }
}
