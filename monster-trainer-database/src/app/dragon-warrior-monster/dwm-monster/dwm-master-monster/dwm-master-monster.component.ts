import { Component, OnInit } from '@angular/core';
import { DragonWarriorMonsterService } from '../../dragon-warrior-monster.service';
import { MasterMonster } from '../../model/dwm-master-monster.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dwm-master-monster',
  templateUrl: './dwm-master-monster.component.html',
  styleUrls: ['./dwm-master-monster.component.css']
})
export class DwmMasterMonsterComponent implements OnInit {

  form: FormGroup;
  previousStates: any;
  masters: MasterMonster[] = [];
  table: MasterMonster[] = [];
  skills: string[] = [];
  monsters: string[] = [];
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
    console.log(event);
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

  skillSearch() {
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
      this.skills = Array.from(skillSet);
      this.skills.sort();
    }
  }
}
