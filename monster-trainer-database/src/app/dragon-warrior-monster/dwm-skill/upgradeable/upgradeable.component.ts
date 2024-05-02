import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upgradeable',
  templateUrl: './upgradeable.component.html',
  styleUrls: ['./upgradeable.component.css']
})
export class UpgradeableComponent implements OnInit {

  @Input() upgrades?: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
