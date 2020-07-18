import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-small-fiche-template',
  templateUrl: './small-fiche-template.component.html',
  styleUrls: ['./small-fiche-template.component.scss']
})
export class SmallFicheTemplateComponent implements OnInit {

  @Input() tabTitle: string;
  @Input() ficheTitle: string;

  constructor() { }

  ngOnInit() {
  }

}

