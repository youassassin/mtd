import { Component, OnInit } from '@angular/core';
import { DragonWarriorMonsterService } from '../dragon-warrior-monster.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Monster } from '../model/dwm-monster.model';
import { Breedable } from '../model/dwm-breedable.model';
import { Family, convertEnumToImagePath } from '../enum/dwm-family.enum';
import { convertEnumPercentage } from '../enum/dwm-sex-chance.enum';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dwm-monster',
  templateUrl: './dwm-monster.component.html',
  styleUrls: ['./dwm-monster.component.css']
})
export class DwmMonsterComponent implements OnInit {

  monster: Monster = new Monster;
  breed: Breedable | undefined = new Breedable;
  monsterStringified: string = '';
  breedStringified: string = '';
  familyIconPath: string = '';
  family: string = '';
  genderChance: string = '';
  isXpDetail: boolean = false;
  growths: string[] = [];
  growthLabel: string = 'show detailed';
  detailedSwap: Subject<boolean> = new Subject();
  constructor(private dwmService: DragonWarriorMonsterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if (param['name']) {//TODO: refactor
        let z = this.dwmService.getMonsterList().find(
          m => m.name.toLowerCase() === param['name'].toLowerCase());
        if (z) {
          this.monster = z;
          this.breed = this.dwmService.getBreedingList().find(
            m => m.name.toLowerCase() === param['name'].toLowerCase());
          this.monsterStringified = JSON.stringify(this.monster);
          this.breedStringified = JSON.stringify(this.breed);
          this.init();
        }
      } else if (this.isInvalidId(param['id'])) {
        this.redirectInvalidId()
      } else {
        this.monster = this.dwmService.getMonsterList()[param['id'] - 1];
        this.breed = this.dwmService.getBreedingList().find(m => m.id === param['id']);
        this.monsterStringified = JSON.stringify(this.monster);
        this.breedStringified = JSON.stringify(this.breed);
        this.init();
      }
    })
  }

  init(): void {
    this.familyIconPath = convertEnumToImagePath(+this.monster.family)
    this.family = Family[+this.monster.family];
    let gender = convertEnumPercentage(+this.monster.sexChance);
    this.genderChance = `Boy: ${gender.boy}, Girl: ${gender.girl}`;
    this.growths = [
      this.monster.hpGrowth,
      this.monster.mpGrowth,
      this.monster.atkGrowth,
      this.monster.defGrowth,
      this.monster.agiGrowth,
      this.monster.intGrowth];
  }

  isInvalidId(id: any) {
    return isNaN(id) || +id < 1 || +id > 215;
  }
  redirectInvalidId() {
    this.router.navigate(['/dwm'], { queryParams: { invalid: true } });
  }

  changeDetail() {
    if (this.growthLabel === 'show detailed') {
      this.growthLabel = 'show simple'
      this.detailedSwap.next(true);
    } else {
      this.growthLabel = 'show detailed'
      this.detailedSwap.next(false);
    }
  }
}
