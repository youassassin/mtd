import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { DragonWarriorMonsterService } from '../dragon-warrior-monster.service';

@Component({
  selector: 'dwm-resistances',
  templateUrl: './dwm-resistances.component.html',
  styleUrls: ['./dwm-resistances.component.css']
})
export class DwmResistancesComponent implements OnInit {

  @Input() list!: string[];
  viewModalEvent: Subject<string> = new Subject();
  header: string[] = ['type', 'resistance', 'skills'];
  data: string[][] = [];
  resistances: string[] = [];
  dropdown: string[] = [];
  searchResult: BehaviorSubject<string> = new BehaviorSubject('skill search');
  form: FormGroup;

  readonly SKILLS = [
    "Fire",
    "Heat",
    "Explosion",
    "Wind",
    "Lightning",
    "Ice",
    "Accuracy",
    "Sleep",
    "Death",
    "MP",
    "SpellBlock",
    "Confusion",
    "DefDown",
    "AglDown",
    "Sacrifice",
    "MegaMagic",
    "FireBreath",
    "IceBreath",
    "Poison",
    "Paralyze",
    "Curse",
    "Miss-a-Turn",
    "DanceBlock",
    "BreathBlock",
    "Aid",
    "GigaSlash"
  ];

  constructor(private service: DragonWarriorMonsterService) {
    this.form = new FormBuilder().group({
      'resistance': ''
    });
  }

  ngOnInit(): void {
    let arrSkills: string[] = [];
    this.list.forEach(l => arrSkills.push(this.getResistance(l)));
    let resList: string[] = [];
    let z = this.service.getResistanceTypeList();
    z.forEach(r => {
      let b: string = '';
      r.forEach(s => {
        b += s + ', '
        this.resistances.push(s);
        this.dropdown.push(s);
      });
      resList.push(b.substring(0, b.length - 2));
      b = '';
    });

    this.dropdown.sort();

    this.data.push(this.SKILLS);
    this.data.push(arrSkills);
    this.data.push(this.list);
    this.data.push(resList);
  }

  onViewTable(id: string) {
    this.viewModalEvent.next(id);
  }

  getResistance(str: string) {
    switch (str) {
      case '0': return 'Weak';
      case '1': return 'Normal';
      case '2': return 'Strong';
      case '3': return 'Nearly Immune';
      case '4': return 'Immune';
      default: return 'error';
    }
  }

  reset() {
    this.searchResult.next('skill search');
    let resSet = new Set<string>();
    this.resistances.forEach(r =>
      resSet.add(r)
    );
    this.dropdown = Array.from(resSet);
    this.dropdown.sort();
    this.form.get('resistance')?.setValue('');
    this.form.get('resistance')?.updateValueAndValidity();
  }

  resSearch(event: any) {
    console.log(event)
    let name = this.form.get('resistance')?.value;
    if (!name)
      this.reset();
    else {
      this.dropdown = this.resistances.filter(r => {
        let t = r.toLowerCase();
        let n = name.toLowerCase();
        if (t.length < n.length)
          return false;

        return t.includes(n);
      });
      if (this.dropdown.length === 1 && name.toLowerCase() === this.dropdown[0].toLowerCase()) {
        this.findResistance(this.dropdown[0]);
        event.preventDefault();
      }
    }
  }
  findResistance(skill: string) {
    for (let i = 0; i < this.data[3].length; i++) {
      if (this.data[3][i].toLowerCase().includes(skill.toLowerCase())) {
        this.searchResult.next(this.data[1][i]);
        return;
      }
    }
  }
}
