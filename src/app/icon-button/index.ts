import { NgModule } from '@angular/core';

import { IconButtonComponent } from './icon-button.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		MatIconModule,
		CommonModule,
		BrowserModule,
		RouterModule,
	],
	exports: [
		IconButtonComponent
	],
	declarations: [IconButtonComponent],
	providers: [],
})
export class IconButtonModule { }
