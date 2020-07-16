import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clickcount',
  templateUrl: './clickcount.component.html',
  styleUrls: ['./clickcount.component.scss']
})
export class ClickcountComponent implements OnInit {
  @Output() clickEmit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public clicks = 0;

  ngOnInit() {}

  handleClick() {
    console.log('CLICK!');
    this.clickEmit.emit(this.clicks += 1);
  }
}
