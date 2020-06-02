import { NgModule } from '@angular/core';

import { CreateOverviewComponent } from './create-overview.component';
import { LayoutModule } from '../layout';
import { CommonModule } from '@angular/common';
import { ModuleModule } from '../module';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		LayoutModule,
		CommonModule,
		ModuleModule,
		MatButtonModule,
		DragDropModule,
		MatIconModule,
		RouterModule,

	],
	exports: [
		CreateOverviewComponent
	],
	declarations: [CreateOverviewComponent],
	providers: [],
})
export class CreateOverviewModule { }
