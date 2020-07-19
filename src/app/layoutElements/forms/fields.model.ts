import { FieldConfig, IValidator } from './field.interface';
import { Validators } from '@angular/forms';


export class Validator implements IValidator {
  name = '';
  validator; // = ?
  message = '';
}

export class IsRequiredValidator implements Validator {
  name = 'required';
  validator = Validators.required;
  message = 'field required!';
}

export class TextPatternValidator implements Validator {
  name = 'pattern';
  validator = Validators.pattern('^[A-Za-z0-9 &-.]+$');
  message = 'please check your spelling! accepted characters = ... ';
}

export class EmailPatternValidator implements Validator {
  name = 'pattern';
  validator = Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$');
  message = 'please check your spelling!';
}

export class PhoneNumberPatternValidator implements Validator {
  name = 'pattern';
  validator = Validators.pattern('^[0-9 ]{10}$');
  message = 'this field can only contain numbers!';
}



export class FieldConfigModel implements FieldConfig {

  type = '';
  inputType = '';

  label = '';
  name = '';
  value = '';

  disabled = false;
  options = [];
  collections = [];
  validations = [];

  constructor(fields?: Partial<FieldConfig>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}


