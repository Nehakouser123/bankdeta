import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';
import { SearchPipe } from './search.pipe';
import { HelloComponent } from './hello/hello.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PuneComponent } from './pune/pune.component';
@NgModule({
  declarations: [
    AppComponent,
    BankdetailsComponent,
    SearchPipe,
    HelloComponent,
    PuneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
