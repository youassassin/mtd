import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragonWarriorMonsterComponent } from './dragon-warrior-monster/dragon-warrior-monster.component';
import { DwmMonsterComponent } from './dragon-warrior-monster/dwm-monster/dwm-monster.component';
import { DwmSkillComponent } from './dragon-warrior-monster/dwm-skill/dwm-skill.component';

const routes: Routes = [
  { path: 'dwm', component: DragonWarriorMonsterComponent },
  { path: 'dwm/id/:id', component: DwmMonsterComponent },
  { path: 'dwm/skill/:name', component: DwmSkillComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }