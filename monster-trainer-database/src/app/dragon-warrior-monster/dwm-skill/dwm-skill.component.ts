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


  l = "{";
  r = "}";
  skill = new Skill;
  monstersWithSkill: Monster[] = [];
  isUpgrade = false;
  constructor(private dwmService: DragonWarriorMonsterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.reset();
      const found = this.dwmService.getSkillList().find(skill => skill.name.toLowerCase() === (param['name'].toLowerCase()));
      if (found) {
        this.skill = found;
        this.getMonsterWithSkill(this.skill.name);
      } else {
        this.redirectInvalid();
      }
    });
  }

  getMonsterWithSkill(skillName: string) {
    if (this.skill.upgrade) {
      this.isUpgrade = this.skill.upgrade[0].toLowerCase() !== skillName.toLowerCase();
      skillName = this.skill.upgrade[0];
    }
    this.monstersWithSkill = this.dwmService.getMonsterList().filter(monster => monster.skills.find(name => name.toLowerCase() === skillName.toLowerCase()));
  }
  reset() {
    this.skill = new Skill;
    this.isUpgrade = false;
    this.monstersWithSkill = [];
  }
  redirectInvalid() {
    this.router.navigate(['/dwm'], { queryParams: { invalid: true } });
  }
}
