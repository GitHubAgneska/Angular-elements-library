import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public angularLogo = '../assets/logos/angular_logo_custom.png';

  // header element dynamic title
  public searchElementName = 'Basic search element';
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


  ngOnInit() {}

}
