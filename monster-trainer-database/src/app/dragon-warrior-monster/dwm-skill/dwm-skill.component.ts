import { Component, OnInit } from '@angular/core';
import { DragonWarriorMonsterService } from '../dragon-warrior-monster.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dwm-skill',
  templateUrl: './dwm-skill.component.html',
  styleUrls: ['./dwm-skill.component.css']
})
export class DwmSkillComponent implements OnInit {


  skill: any;
  skillStringified: string | undefined;
  constructor(private dwmService: DragonWarriorMonsterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      console.log(param['name'])
      const found = this.dwmService.getSkillList().find(skill => skill.name.toLowerCase() === (param['name'].toLowerCase()));
      if (found) {
        this.skill = found;
        this.skillStringified = JSON.stringify(this.skill);
      } else {
        this.redirectInvalid();
      }
    });
  }

  redirectInvalid() {
    this.router.navigate(['/dwm'], { queryParams: { invalid: true } });
  }
}
