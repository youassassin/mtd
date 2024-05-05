import { Component, OnInit } from '@angular/core';
import { DragonWarriorMonsterService } from '../dragon-warrior-monster.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DWMLocation } from '../model/dwm-location.model';

@Component({
  selector: 'app-dwm-location',
  templateUrl: './dwm-location.component.html',
  styleUrls: ['./dwm-location.component.css']
})
export class DwmLocationComponent implements OnInit {

  gates: DWMLocation[] = [];
  gatesStringified: string[] = [];
  gate: DWMLocation = new DWMLocation;
  gateStringified: string = '';
  floors: string[] = [];
  monsters: string[][] = [];
  monsterSet: string[] = [];
  constructor(private dwmService: DragonWarriorMonsterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      let g = this.dwmService.getGateList().find(
        l => l.gate.toLowerCase() === param['gate'].toLowerCase())
      if (!g) {
        this.redirectInvalidGate()
      } else {
        this.gate = g;
        this.gateStringified = JSON.stringify(this.gate);
        this.gates = this.dwmService.getGateList();
        this.gates.forEach(g => {
          this.gatesStringified.push(JSON.stringify(g) + ',')
        })
        this.floors = Object.keys(this.gate.list);
        this.monsters = Object.values(this.gate.list);
        let mset = new Set<string>();
        this.monsters.forEach(m => m.forEach(n => mset.add(n.toLowerCase())));
        this.monsterSet = Array.from(mset);
      }
    })
  }
  redirectInvalidGate() {
    this.router.navigate(['/dwm'], { queryParams: { invalid: true } });
  }

}
