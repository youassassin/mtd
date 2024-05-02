import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'combinable',
  templateUrl: './combinable.component.html',
  styleUrls: ['./combinable.component.css']
})
export class CombinableComponent implements OnInit {

  @Input() combos?: string[][] = [[]];
  constructor() { }

  ngOnInit(): void {
  }

}
