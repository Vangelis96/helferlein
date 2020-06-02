import { NgModule } from '@angular/core';

import { CreateExamComponent } from './create-exam.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout';
import { RouterModule } from '@angular/router';
import { ExamComponent } from './exam.component';

@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		RouterModule,
	],
	exports: [
		ExamComponent,
	],
	declarations: [
		CreateExamComponent,
		ExamComponent,
	],
	providers: [],
})
export class ExamModule { }
