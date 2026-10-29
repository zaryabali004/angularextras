import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { Subirfichero } from './components/subirfichero/subirfichero';
import { AppRoutingModule } from './app-routing-module';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [App, Subirfichero],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideHttpClient(), provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule { }
