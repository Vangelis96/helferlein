import { NgModule } from '@angular/core';

import { TaskComponent } from './task.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout';
import { CreateTaskComponent } from './create/create-task.component';

@NgModule({
	imports: [
		LayoutModule,
		CommonModule,
		RouterModule
	],
	exports: [
		TaskComponent,
		CreateTaskComponent,
	],
	declarations: [
		TaskComponent,
		CreateTaskComponent,
	],
	providers: [],
})
export class TaskModule { }
