import { NgModule } from '@angular/core';

import { CreateExamComponent } from './create-exam.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout';
import { RouterModule } from '@angular/router';
import { ExamComponent } from './exam.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		RouterModule,
		MatInputModule,
		MatDatepickerModule,
		MatFormFieldModule,
		MatCheckboxModule,
		MatButtonModule,
		MatIconModule,
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
