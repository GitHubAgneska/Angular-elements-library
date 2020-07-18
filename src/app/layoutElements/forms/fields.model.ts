import { FieldConfig } from './field.interface';

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

