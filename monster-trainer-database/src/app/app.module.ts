import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DragonWarriorMonsterComponent } from './dragon-warrior-monster/dragon-warrior-monster.component';
import { RoutingModule } from './routing.module';
import { DwmMonsterComponent } from './dragon-warrior-monster/dwm-monster/dwm-monster.component';
import { DwmSkillComponent } from './dragon-warrior-monster/dwm-skill/dwm-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    DragonWarriorMonsterComponent,
    DwmMonsterComponent,
    DwmSkillComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
