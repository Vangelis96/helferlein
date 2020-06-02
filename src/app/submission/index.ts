import { NgModule } from '@angular/core';

import { SubmissionComponent } from './submission.component';
import { CreateSubmissionComponent } from './create-submission.component';
import { LayoutModule } from '../layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		LayoutModule,
		CommonModule,
		RouterModule,
	],
	exports: [
		SubmissionComponent,
		CreateSubmissionComponent,
	],
	declarations: [
		SubmissionComponent,
		CreateSubmissionComponent
	],
	providers: [],
})
export class SubmissionModule { }
