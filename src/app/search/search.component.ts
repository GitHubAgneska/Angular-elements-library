import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() term: string;

  public goArrow = 'assets/logos/icon_arrow_go_white_300x.png';
  public charactersList: any[];

  public match: any;
  public quote: string;

  constructor(
    private router: Router, private dataService: DataService
  ) { this.term = null; }


  ngOnInit() {
  }

  public loadData(term: string) {
    this.term = term;
    this.match = '';
    this.dataService.getCharactersList().subscribe(data => {
      this.charactersList = data;
      this.charactersList.filter(item => {
        const firstName = item.firstName.toLowerCase();
        const lastName = item.lastName.toLowerCase();

        if ( firstName.includes(this.term) || (lastName.includes(this.term))) {
          console.log('item.firstName==', item.firstName);
          this.match = item.quote;
          console.log('quote==', this.match);
        }
      });
      return this.match ? !'' : this.match = 'Sorry no match!';
    });
  }

  public resetSearch() {
    this.match = '';
  }

}

// return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;

