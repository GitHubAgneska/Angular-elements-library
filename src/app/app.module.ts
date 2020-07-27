import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';

import { ModalComponent } from './modal/modal.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { ClickcountComponent } from './clickcount/clickcount.component';
import { HeaderComponent } from './layoutElements/header/header.component';
import { FormsComponent } from './forms/forms.component';

/* ========= D E S I G N   T E M P L A T E S =====================================================*/
import { BigFicheTemplateComponent } from './layoutElements/tab-panels-templates/big-fiche-template/big-fiche-template.component';
import { SmallFicheTemplateComponent } from './layoutElements/tab-panels-templates/small-fiche-template/small-fiche-template.component';
import { CharacterFormComponent } from './forms/character-form/character-form.component';

/* ========= F O R M S   & Angular  M A T E R I A L =====================================================*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './layoutElements/forms/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './layoutElements/forms/dynamic-field/dynamic-field.directive';

import { InputComponent } from './layoutElements/forms/form-components/input/input.component';
import { ButtonComponent } from './layoutElements/forms/form-components/button/button.component';
import { SelectComponent } from './layoutElements/forms/form-components/select/select.component';
import { DateComponent } from './layoutElements/forms/form-components/date/date.component';
import { RadiobuttonComponent } from './layoutElements/forms/form-components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './layoutElements/forms/form-components/checkbox/checkbox.component';
// import { CancelButtonComponent } from './layoutElements/buttons/cancel-button.component';
import { FileUploadComponent } from './layoutElements/forms/form-components/file-upload/file-upload';
import { TextareaComponent } from './layoutElements/forms/form-components/textarea/textarea.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveSearchComponent } from './reactive-search/reactive-search.component';
import {  MatButtonModule,
          MatIconModule,
          MatCardModule,
          MatFormFieldModule,
          MatInputModule,
          MatListModule,
          MatNativeDateModule,
          MatSelectModule,
          MatOptionModule,
          MatCheckboxModule,
          MatChipsModule,
          MatRadioModule,
          MAT_DATE_LOCALE,
          MatTableModule,
          MatTabsModule,
          MatProgressSpinnerModule,
          MatSortModule,
          MatDividerModule
} from '@angular/material';
import { UploadModalComponent } from './upload-modal/upload-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    SearchComponent,
    MainComponent,
    ClickcountComponent,
    HeaderComponent,
    FormsComponent,
    SmallFicheTemplateComponent,
    BigFicheTemplateComponent,
    CharacterFormComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    FileUploadComponent,
    TextareaComponent,
    ReactiveSearchComponent,
    UploadModalComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatChipsModule,
    MatTabsModule,
    MatDividerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [
    HttpClient,
    HttpErrorHandler,
    MessageService,
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' } ],

  bootstrap: [AppComponent],

  entryComponents: [
    DynamicFormComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    FileUploadComponent,
    TextareaComponent
  ]
})
export class AppModule { }
