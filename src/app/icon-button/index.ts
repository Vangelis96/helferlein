import { NgModule } from '@angular/core';

import { IconButtonComponent } from './icon-button.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		MatIconModule,
		CommonModule
	],
	exports: [
		IconButtonComponent
	],
	declarations: [IconButtonComponent],
	providers: [],
})
export class IconButtonModule { }
