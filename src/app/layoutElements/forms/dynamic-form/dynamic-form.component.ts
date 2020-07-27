import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FieldConfig } from '../field.interface';

@Component({
  exportAs: 'dynamicForm',
  // tslint:disable-next-line: component-selector
  selector: 'dynamic-form', // + app-
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() fields: FieldConfig[] = []; // 'fieldS ' of type ARRAY of fields , initiated as empty
  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  @Input() dataFromApi: any;
  @Input() resetForm: boolean;
  @Input() disabled: boolean;

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = new FormGroup({});
  }

  ngOnInit() {
    // console.log(this.fields);
    this.form = this.createControl();
    if (this.disabled) {
      Object.keys(this.form.controls).forEach(key => {
        const control = this.form.get(key);
        control.disable();
      });
    }
    // console.log('CONTROLS', this.form.controls);
    // console.log('FORM', this.form);
    // console.log('NOM', this.form.get('nom'));
  }


  ngOnChanges(changes: SimpleChanges) {
    this.createControl();
    // console.log(this.disabled);
    // console.log(changes);
    // console.log(changes.disabled);
  }

  onSubmit(event: Event) {
    if (this.form.valid) {
      event.preventDefault();
      event.stopPropagation();
      this.save.emit(this.form.value);
      if (this.resetForm) {
        this.form.reset();
      }
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  // loop through the configuration fields and creates a control for each field with validations
  // and then add these dynamically created controls to the form group
  createControl() {
    const group = this.formBuilder.group({});
    this.fields.forEach(field => {
      // console.log('FIELDS==', this.fields);
      if (field.type === 'button') { return; }
      if (field.type === 'checkbox') {
        if (field.value === 'false' || field.value == null || field.value === '') {
          // console.log(field.value);
          field.value = null;
        } else {
          // console.log(field.value);
          field.value = true;
        }
      }
      const control = this.formBuilder.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
      control.valueChanges.subscribe(e => {           /////
        control.setValue(e, { emitEvent: false });
      });
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
      // control.markAsUntouched({ onlySelf: true });
      // control.markAsPristine({ onlySelf: true });
    });
  }

  public disableAll(): void {  ////
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      control.disable();
    });
  }

  public enableAll(): void {
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      control.enable();
    });
  }

  disabledForm(bool) {
    bool ? this.form.disable() :
      this.form.enable();
  }

}

