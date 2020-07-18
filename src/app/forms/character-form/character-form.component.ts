import { Component, OnInit, ViewChild, Output, EventEmitter, } from '@angular/core';
import { DynamicFormComponent } from '../../layoutElements/forms/dynamic-form/dynamic-form.component';
import { FieldConfig } from '../../layoutElements/forms/field.interface';
import { Validators } from '@angular/forms';

import { ICharacter } from '../../models/character.interface';
import { Character } from '../../models/character.model';
import { FieldConfigModel } from 'src/app/layoutElements/forms/fields.model';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit {
  @ViewChild(DynamicFormComponent, { static: true }) form: DynamicFormComponent;

  viewToDisplay = 'characterForm';
  public ficheTitle = 'New character';

  public character: Character;
  public newCharacter: Partial<Character>;
  public newCharacter2: Partial<Character>;

  charFieldConfig: FieldConfig[];

  constructor() {
    this.character = new Character();
    this.newCharacter = Object.assign({}, this.character);
    this.newCharacter2 = { ...this.character };

  }

  ngOnInit() {


    console.log('character==', this.character);
    console.log('new character==', this.newCharacter);
    console.log('new character2==', this.newCharacter2);

  }

  submit(value: any) {
    console.log(value);
  }

}
