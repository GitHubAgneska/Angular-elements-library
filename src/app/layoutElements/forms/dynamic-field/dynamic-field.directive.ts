import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../field.interface';
import { InputComponent } from '../form-components/input/input.component';
import { ButtonComponent } from '../form-components/button/button.component';
import { SelectComponent } from '../form-components/select/select.component';
import { DateComponent } from '../form-components/date/date.component';
import { RadiobuttonComponent } from '../form-components/radiobutton/radiobutton.component';
import { CheckboxComponent } from '../form-components/checkbox/checkbox.component';
import { FileUploadComponent } from '../form-components/file-upload/file-upload';
import { TextareaComponent } from '../form-components/textarea/textarea.component';


const componentMapper = {

  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent,

  // custom fields ================
  fileUpload: FileUploadComponent,
  textarea: TextareaComponent

};

// tslint:disable-next-line: directive-selector
@Directive({ selector: '[dynamicField]' })
export class DynamicFieldDirective implements OnInit {

  @Input() field: FieldConfig; // field is of type 'FieldConfig' , defined in interface
  @Input() group: FormGroup;   // group of 'ComponentRef' is defined as a 'FormGroup'

  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(componentMapper[this.field.type]);
    // initiates 'fieldConfig.type' ( E.G 'type:"button") so user can create new types  //
    //  'resolveComponentFactory()' method takes a component and returns a ComponentFactory.

    this.componentRef = this.container.createComponent(factory); // inserts 'fieldConfig.type' into a container 'componentRef'
    this.componentRef.instance.field = this.field; // defines 'componentRef' as 'field'
    this.componentRef.instance.group = this.group; // defines 'componentRef' group as 'group'

  }
}


