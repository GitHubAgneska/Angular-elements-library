import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public angularLogo = '../assets/logos/angular_logo_custom.png';

  // modal
  public modalWindow: boolean;

  // search
  public term: string;

  constructor() {
    this.modalWindow = false;
  }

  public openModal() {
    this.modalWindow = true;
  }
  public onCloseModal() {
    this.modalWindow = false;
  }

  // search


  ngOnInit() {}

}
