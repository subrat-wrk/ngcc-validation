import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { AppComponent } from './app.component';

@NgModule({
   bootstrap:    [AppComponent],
   declarations: [AppComponent],
   imports:      [BrowserModule, BrowserAnimationsModule, RippleModule]
})
export class AppModule {
}