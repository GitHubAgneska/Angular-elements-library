import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public currentView: string;
  public viewToDisplay: string;

  public characterForm: string;
  public materielFormStep1: string;


  constructor() { }

  ngOnInit() {
  }

}
