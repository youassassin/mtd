import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DragonWarriorMonsterComponent } from './dragon-warrior-monster/dragon-warrior-monster.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DragonWarriorMonsterComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
