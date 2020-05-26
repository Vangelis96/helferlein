import { NgModule } from '@angular/core';

import { CreateOverviewComponent } from './create-overview.component';
import { LayoutModule } from '../layout';

@NgModule({
	imports: [
		LayoutModule,
	],
	exports: [
		CreateOverviewComponent
	],
	declarations: [CreateOverviewComponent],
	providers: [],
})
export class CreateOverviewModule { }
