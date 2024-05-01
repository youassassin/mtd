import { Component, OnInit } from '@angular/core';
import { DragonWarriorMonsterService } from './dragon-warrior-monster.service';

@Component({
  selector: 'app-dragon-warrior-monster',
  templateUrl: './dragon-warrior-monster.component.html',
  styleUrls: ['./dragon-warrior-monster.component.css']
})
export class DragonWarriorMonsterComponent implements OnInit {

  left = '{';
  right = '}';
  monsterList: { id: string; name: string; }[] | undefined;
  constructor(private dwmService: DragonWarriorMonsterService) { }

  ngOnInit(): void {
    this.monsterList = this.dwmService.getMonsterList();
  }

}
