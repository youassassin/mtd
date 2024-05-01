import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragonWarriorMonsterComponent } from './dragon-warrior-monster/dragon-warrior-monster.component';

const routes: Routes = [
  { path: 'dwm', component: DragonWarriorMonsterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }