import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('modal') modal: any;
  @Input() xpList!: number[];
  @Input() data!: string[][];
  @Input() id!: string;
  @Input() header!: string[];
  @Input() col!: number;
  @Input() isDetailed: boolean = false;
  @Input() set viewModalEvent(sub: Subject<string>) {
    sub.subscribe(id => {
      if (this.id === id)
        this.isVisible = true;
    });
  }
  isVisible: boolean = false;
  detailedLabel: string = 'show detailed';

  @HostListener('click', ['$event'])
  clickInside(event: any) {
    if (this.modal && !this.modal.nativeElement.contains(event.target))
      this.isVisible = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

  addMiddleRow() {
    this.isDetailed = !this.isDetailed;
    this.detailedLabel = this.detailedLabel === 'show detailed' ? 'hide detailed' : 'show detailed';
  }

  onClose() {
    this.isVisible = false;
  }

}
