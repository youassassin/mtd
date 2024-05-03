import { Component, Input, OnInit } from '@angular/core';
import { Breedable } from '../../model/dwm-breedable.model';
import { Monster } from '../../model/dwm-monster.model';
import { DragonWarriorMonsterService } from '../../dragon-warrior-monster.service';

@Component({
  selector: 'dwm-library-monster',
  templateUrl: './dwm-library-monster.component.html',
  styleUrls: ['./dwm-library-monster.component.css']
})
export class DwmLibraryMonsterComponent implements OnInit {

  @Input() id = '';
  monster: Monster = new Monster;
  breed: Breedable = new Breedable;
  monsterStringified: string = '';
  breedStringified: string = '';
  constructor(private dwmService: DragonWarriorMonsterService) { }

  ngOnInit(): void {
    this.monster = this.dwmService.getMonsterList()[+this.id - 1];
    this.breed = this.dwmService.getBreedingList().find(m => m.id === 'id');
    this.monsterStringified = JSON.stringify(this.monster);
    this.breedStringified = JSON.stringify(this.breed);
  }
}
