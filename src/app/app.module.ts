import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { SearchComponent } from './search/search.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageService } from './message.service';

import { HttpErrorHandler } from './http-error-handler.service';
import { MainComponent } from './main/main.component';
import { ClickcountComponent } from './clickcount/clickcount.component';
import { HeaderComponent } from './layoutElements/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    SearchComponent,
    MainComponent,
    ClickcountComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ HttpClient, HttpErrorHandler, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
