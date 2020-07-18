import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-reactive-search',
  templateUrl: './reactive-search.component.html',
  styleUrls: ['./reactive-search.component.scss']
})
export class ReactiveSearchComponent implements OnInit {

  public charactersList: Character[];
  public character: Character;

  public searchTerm: string;
  public name: FormControl;
  public searching: any = false;

  constructor(private dataService: DataService) {

    this.character = new Character(); // TODO : replace by DEEP COPY
    this.searchTerm = '';

    this.name = new FormControl();


  }

  ngOnInit(): void {
    this.loadData();
    this.name.valueChanges.subscribe(search => {
      this.onSearchInput(this.name.value);
    } );

  }

  public loadData() {
    this.dataService.getCharactersList().subscribe(data => {
      this.charactersList = data;
    });
  }


  public filterItems(searchTerm: string) {
    const searchbar = document.querySelector('user-input');
    searchbar.addEventListener('onInput', this.onSearchInput);
  }

  public onSearchInput(event: any) {
    if ( this.name.value ) {
      // const query = event.target.value.toLowerCase();
      const query = this.name.value.toLowerCase();
      const elementsToFilter = Array.from(document.getElementsByClassName('characters-list')as HTMLCollectionOf<HTMLElement>);
      // const query = input[this.name.value];

      elementsToFilter.forEach(item => {

        // const shouldShow = item.textContent.toLowerCase().includes(this.name.value);
        const shouldShow = item.textContent.toLowerCase().includes(query);
        item.style.display = shouldShow ? 'block' : 'none';
      });

    } else {
      this.loadData();
    }
  }

}
