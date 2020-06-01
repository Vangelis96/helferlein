import { NgModule } from '@angular/core';

import { ToDoElementComponent } from './todo-element.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
	imports: [
		MatCardModule,
		MatIconModule,
		CommonModule,
		MatCheckboxModule,
	],
	exports: [
		ToDoElementComponent,
	],
	declarations: [ToDoElementComponent],
	providers: [],
})
export class ToDoModule { }
