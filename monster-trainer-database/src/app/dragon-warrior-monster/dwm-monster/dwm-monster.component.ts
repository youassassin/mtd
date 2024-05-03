import { Component, OnInit } from '@angular/core';
import { DragonWarriorMonsterService } from '../dragon-warrior-monster.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Monster } from '../model/dwm-monster.model';
import { Breedable } from '../model/dwm-breedable.model';

@Component({
  selector: 'app-dwm-monster',
  templateUrl: './dwm-monster.component.html',
  styleUrls: ['./dwm-monster.component.css']
})
export class DwmMonsterComponent implements OnInit {

  monster: Monster = new Monster;
  breed: Breedable = new Breedable;
  monsterStringified: string = '';
  breedStringified: string = '';
  isLibrary = false;
  constructor(private dwmService: DragonWarriorMonsterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if (this.isInvalidId(param['id'])) {
        this.redirectInvalidId()
      } else {
        this.monster = this.dwmService.getMonsterList()[param['id'] - 1];
        this.breed = this.dwmService.getBreedingList().find(m => m.id === param['id']);
        this.monsterStringified = JSON.stringify(this.monster);
        this.breedStringified = JSON.stringify(this.breed);
      }
    })
  }

  isInvalidId(id: any) {
    return isNaN(id) || +id < 1 || +id > 215;
  }
  redirectInvalidId() {
    this.router.navigate(['/dwm'], { queryParams: { invalid: true } });
  }

}
