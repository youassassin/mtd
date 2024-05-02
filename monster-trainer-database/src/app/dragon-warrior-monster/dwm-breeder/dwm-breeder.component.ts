import { Component, OnInit } from '@angular/core';
import { DragonWarriorMonsterService } from '../dragon-warrior-monster.service';
import { Monster } from '../model/dwm-monster.model';

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

class Breedable {
  id: string = '';
  name: string = '';
  parents: { pedigree: string[], parent: string[] }[] = []
  children: string[] = []
}