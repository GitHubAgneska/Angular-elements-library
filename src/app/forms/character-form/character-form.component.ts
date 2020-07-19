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

  characterFieldsConfig: FieldConfig[];
  propertyFieldConfig: FieldConfig;
  propertyFieldSConfig: FieldConfig[];

  propertyFieldConfigTest: FieldConfig[] = [

    {
      type: 'input', label: 'Nom', inputType: 'text', name: 'nom', value: '',
      validations: [
        { name: 'required', validator: Validators.required, message: 'champ obligatoire!' },
        {
          name: 'pattern',
          validator: Validators.pattern('^[A-Za-z0-9 &-.]+$'),
          message: ''
        }]
    }];

  constructor() {

    //  ! Shallow copies ...
    this.character = new Character();
    this.newCharacter = Object.assign({}, this.character);
    this.newCharacter2 = { ...this.character };

    this.propertyFieldSConfig = new Array();
  }

  ngOnInit() {
    this.setFieldConfig();

    // console.log('character==', this.character);
    // console.log('new character==', this.newCharacter);
    // console.log('new character2==', this.newCharacter2);
  }


  // Generate dynamically form fields from object model
  // ..................................................
  // for each key of the character object
  // generate a set of fields casted on the fieldConfigModel
  // and set the field value according to the object keys
  public setFieldConfig() {
    const objectKeys = Object.keys(this.newCharacter2); // [ "id", "firstName", "..""]

    objectKeys.forEach((prop , value: {}) => {
      prop = prop;
      this.propertyFieldConfig = new FieldConfigModel(); // { input:"", inputType:"", ... }
      Object.assign({prop : value }, {...this.propertyFieldConfig});
      value = this.propertyFieldConfig;
      // console.log(this.propertyFieldConfig);

      // add an if statement for different fields types (ie if type ='select', only 'options' field will be generated )
      // +  modify fieldConfigModel to have different fields models (easier than setting it manually here with conditions)
      this.propertyFieldConfig.type = 'input';
      this.propertyFieldConfig.inputType = 'text';
      this.propertyFieldConfig.label = prop.toLowerCase();
      this.propertyFieldConfig.name = prop.toLowerCase();
      // make an array of the fieldConfig
      this.propertyFieldSConfig.push(this.propertyFieldConfig);
    });
    return this.propertyFieldSConfig;
  }


  submit(value: any) {
    console.log(value);
  }



}
