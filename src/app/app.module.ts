import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleModule } from './module';
import { LayoutModule } from './layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
    AppRoutingModule,
	ModuleModule,
	LayoutModule,
	CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
