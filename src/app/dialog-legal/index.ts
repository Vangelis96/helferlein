import { NgModule } from '@angular/core';
import { DialogLegalComponent, DialogContentImprintComponent, DialogContentPrivacyComponent } from './dialog-legal.component'

import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	imports: [
		MatDialogModule,
		MatListModule,
		MatButtonModule,
	],
	exports: [
		DialogLegalComponent,
	],
	declarations: [
		DialogLegalComponent,
		DialogContentImprintComponent,
		DialogContentPrivacyComponent,
	],
	providers: [],
})
export class DialogLegalModule { }
