import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  @Input() lvl = '';
  @Input() hp = '';
  @Input() mp = '';
  @Input() atk = '';
  @Input() def = '';
  @Input() agi = '';
  @Input() int = '';

  constructor() { }

  ngOnInit(): void {
  }

}
