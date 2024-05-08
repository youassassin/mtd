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
  @Input() id!: number;
  @Input() set viewModalEvent(sub: Subject<number>) {
    sub.subscribe(id => {
      if (this.id === id)
        this.isVisible = true;
    });
  }
  isVisible: boolean = false;

  @HostListener('click', ['$event'])
  clickInside(event: any) {
    if (this.modal && !this.modal.nativeElement.contains(event.target))
      this.isVisible = false;
  }

  constructor() { }

  ngOnInit(): void {
  }
  onClose() {
    this.isVisible = false;
  }

}
