import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragonWarriorMonsterComponent } from './dragon-warrior-monster/dragon-warrior-monster.component';
import { DwmMonsterComponent } from './dragon-warrior-monster/dwm-monster/dwm-monster.component';
import { DwmSkillComponent } from './dragon-warrior-monster/dwm-skill/dwm-skill.component';
import { DwmBreederComponent } from './dragon-warrior-monster/dwm-breeder/dwm-breeder.component';
import { DwmLibraryComponent } from './dragon-warrior-monster/dwm-library-view/dwm-library.component';
import { PageNotFoundComponent } from './dragon-warrior-monster/page-not-found/page-not-found.component';
import { DwmLocationComponent } from './dragon-warrior-monster/dwm-location/dwm-location.component';

const routes: Routes = [
  { path: 'dwm', component: DragonWarriorMonsterComponent },
  { path: 'dwm/id/:id', component: DwmMonsterComponent },
  { path: 'dwm/monster/:name', component: DwmMonsterComponent },
  { path: 'dwm/skill/:name', component: DwmSkillComponent },
  { path: 'dwm/breeding', component: DwmBreederComponent },
  { path: 'dwm/library', component: DwmLibraryComponent },
  { path: 'dwm/location/:gate', component: DwmLocationComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }