import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DragonWarriorMonsterComponent } from './dragon-warrior-monster/dragon-warrior-monster.component';
import { RoutingModule } from './routing.module';
import { DwmMonsterComponent } from './dragon-warrior-monster/dwm-monster/dwm-monster.component';
import { DwmSkillComponent } from './dragon-warrior-monster/dwm-skill/dwm-skill.component';
import { UpgradeableComponent } from './dragon-warrior-monster/dwm-skill/upgradeable/upgradeable.component';
import { RequirementsComponent } from './dragon-warrior-monster/dwm-skill/requirements/requirements.component';
import { CombinableComponent } from './dragon-warrior-monster/dwm-skill/combinable/combinable.component';
import { DwmBreederComponent } from './dragon-warrior-monster/dwm-breeder/dwm-breeder.component';
import { DwmLibraryMonsterComponent } from './dragon-warrior-monster/dwm-library-view/dwm-library-monster/dwm-library-monster.component';
import { DwmLibraryComponent } from './dragon-warrior-monster/dwm-library-view/dwm-library.component';
import { DwmXpGrowthComponent } from './dragon-warrior-monster/dwm-growth/dwm-xp-growth/dwm-xp-growth.component';
import { DwmGrowthComponent } from './dragon-warrior-monster/dwm-growth/dwm-growth.component';

@NgModule({
  declarations: [
    AppComponent,
    DragonWarriorMonsterComponent,
    DwmMonsterComponent,
    DwmSkillComponent,
    UpgradeableComponent,
    RequirementsComponent,
    CombinableComponent,
    DwmBreederComponent,
    DwmLibraryMonsterComponent,
    DwmLibraryComponent,
    DwmXpGrowthComponent,
    DwmGrowthComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
