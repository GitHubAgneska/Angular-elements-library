export interface Validator {
  name: string;
  validator: any;
  message: string;
}

export interface FieldConfig {

  type: string;
  inputType?: string;

  label?: string;
  name?: string;
  value?: any;

  disabled?: boolean;
  options?: string[];
  collections?: any;
  validations?: Validator[];
}
