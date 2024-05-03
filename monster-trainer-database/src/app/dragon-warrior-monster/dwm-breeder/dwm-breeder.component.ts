import { Component, OnInit } from '@angular/core';
import { DragonWarriorMonsterService } from '../dragon-warrior-monster.service';
import { Monster } from '../model/dwm-monster.model';
import { Breedable } from '../model/dwm-breedable.model';

@Component({
  selector: 'app-dwm-breeder',
  templateUrl: './dwm-breeder.component.html',
  styleUrls: ['./dwm-breeder.component.css']
})
export class DwmBreederComponent implements OnInit {

  monsterList: Breedable[] = [];
  stringify = '';
  s: string[] = [];
  constructor(private dwmService: DragonWarriorMonsterService) { }

  ngOnInit(): void {
    this.monsterList = this.dwmService.getBreedingList();
    this.monsterList.forEach(m => {
      this.s.push(JSON.stringify(m));
    });
    this.stringify = JSON.stringify(this.monsterList);
  }

}
export enum Family {
  SLIME,
  DRAGON,
  BEAST,
  BIRD,
  PLANT,
  BUG,
  DEVIL,
  ZOMBIE,
  MATERIAL,
  BOSS
}