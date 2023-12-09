import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input()item:any;
  @Output() eventOutput = new EventEmitter<any>();

  constructor() {}

  handleClick(item:any) {
    this.eventOutput.emit(item);
  }

  ngOnInit(): void {}
}
