import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  public images: string[];
  public num: number;

  constructor() {

    this.num = 0;
    this.images = [
      'assets/images/blob.png',
      'assets/images/diamond.png',
      'assets/images/circle.png',
      'assets/images/stone.png',
      'assets/images/tri.png',
      'assets/images/blob2.png',
    ];
  }

  ngOnInit(): void {}


  public next() {
    const slider = document.getElementById('slider') as HTMLImageElement;
    this.num++;
    if (this.num >= this.images.length) {
      this.num = 0;
    }
    slider.src = this.images[this.num];
  }

  public previous() {
    const slider = document.getElementById('slider') as HTMLImageElement;
    this.num--;
    if (this.num < 0) {
      this.num = this.images.length - 1;
    }
    slider.src = this.images[this.num];
  }


}

// note
//  src is not a property of the HTMLElement type, but of HTMLImageElement!
