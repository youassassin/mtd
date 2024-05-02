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
  skillList: Skill[] = [];
  up?: string[] = [];
  skillStringified = "";
  skillListStringified: string[] = [];
  skillListStringifiedcopy: string[] = [];
  monstersWithSkill: Monster[] = [];
  isUpgrade = false;
  constructor(private dwmService: DragonWarriorMonsterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      console.log(param['name'])
      this.skillList = this.dwmService.getSkillList();
      this.skillList.forEach(skill => this.skillListStringified.push(JSON.stringify(skill)));
      let c = 0;
      for (let s of this.skillList) {
        let ms = this.getMonsterWithSkill(s.name);
        let x = '[';
        this.monstersWithSkill.forEach(e => {
          x += "\"" + e.name + "\","
        });
        x = x.substring(0, x.length - 1) + ']';
        this.skillListStringifiedcopy.push(this.skillListStringified[c++].replace('}', `,"monsters": ${x}}`));
      }
      const found = this.dwmService.getSkillList().find(skill => skill.name.toLowerCase() === (param['name'].toLowerCase()));
      if (found) {
        this.skill = found;
        this.up = this.skill.upgrade;
        this.skillStringified = JSON.stringify(this.skill);
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

  redirectInvalid() {
    this.router.navigate(['/dwm'], { queryParams: { invalid: true } });
  }
}
