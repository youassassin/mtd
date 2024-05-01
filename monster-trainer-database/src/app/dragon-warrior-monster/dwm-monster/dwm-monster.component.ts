import { Component, OnInit } from '@angular/core';
import { DragonWarriorMonsterService } from '../dragon-warrior-monster.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dwm-monster',
  templateUrl: './dwm-monster.component.html',
  styleUrls: ['./dwm-monster.component.css']
})
export class DwmMonsterComponent implements OnInit {

  monster: any;
  constructor(private dwmService: DragonWarriorMonsterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if (this.isInvalidId(param['id'])) {
        console.log()
        this.redirectInvalidId()
      } else {
        this.monster = this.dwmService.getMonsterList()[param['id'] - 1];
      }
    })
  }

  isInvalidId(id: any) {
    console.log(isNaN(id))
    console.log(+id < 1)
    console.log(+id > 215)
    return isNaN(id) || +id < 1 || +id > 215
  }
  redirectInvalidId() {
    this.router.navigate(['/dwm'], { queryParams: { invalid: true } });
  }

}
