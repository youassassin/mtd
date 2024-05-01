import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragonWarriorMonsterComponent } from './dragon-warrior-monster/dragon-warrior-monster.component';
import { DwmMonsterComponent } from './dragon-warrior-monster/dwm-monster/dwm-monster.component';

const routes: Routes = [
  { path: 'dwm', component: DragonWarriorMonsterComponent },
  { path: 'dwm/id/:id', component: DwmMonsterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }