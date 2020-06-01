import { NgModule } from '@angular/core';

import { DoOverviewComponent } from './do-overview.component';
import { LayoutModule } from '../layout';
import { MatCardModule } from '@angular/material/card';
import { ToDoModule } from '../todo';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		LayoutModule,
		MatCardModule,
		ToDoModule,
		CommonModule,
	],
	exports: [
		DoOverviewComponent,
	],
	declarations: [DoOverviewComponent],
	providers: [],
})
export class DoOverviewModule { }
