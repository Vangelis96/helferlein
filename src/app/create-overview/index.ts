import { NgModule } from '@angular/core';

import { CreateOverviewComponent } from './create-overview.component';
import { LayoutModule } from '../layout';
import { CommonModule } from '@angular/common';
import { ModuleModule } from '../module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	imports: [
		LayoutModule,
		CommonModule,
		ModuleModule,
		MatButtonModule,
	],
	exports: [
		CreateOverviewComponent
	],
	declarations: [CreateOverviewComponent],
	providers: [],
})
export class CreateOverviewModule { }
