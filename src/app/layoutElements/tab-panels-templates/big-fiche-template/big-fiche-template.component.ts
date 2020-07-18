import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-big-fiche-template',
  templateUrl: './big-fiche-template.component.html',
  styleUrls: ['./big-fiche-template.component.scss']
})
export class BigFicheTemplateComponent implements OnInit {

  @Input() public bFicheTabTitle: string;
  @Input() public bFicheTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
