import { Component, OnInit } from '@angular/core';
import { DragonWarriorMonsterService } from '../dragon-warrior-monster.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../model/dwm-skill.model';
import { Monster } from '../model/dwm-monster.model';

@Component({
  selector: 'app-dwm-skill',
  templateUrl: './dwm-skill.component.html',
  styleUrls: ['./dwm-skill.component.css']
})
export class DwmSkillComponent implements OnInit {


  skill = new Skill;
  skillStringified = "";
  monstersWithSkill: Monster[] = [];
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
        this.getMonsterWithSkill(this.skill.name);
      } else {
        this.redirectInvalid();
      }
    });
  }
  getMonsterWithSkill(skillName: string) {
    this.monstersWithSkill = this.dwmService.getMonsterList().filter(monster => monster.skills.find(name => name.toLowerCase() === skillName.toLowerCase()));
  }

  redirectInvalid() {
    this.router.navigate(['/dwm'], { queryParams: { invalid: true } });
  }
}
