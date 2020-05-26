import { NgModule } from '@angular/core';

import { DoOverviewComponent } from './do-overview.component';
import { LayoutModule } from '../layout';

@NgModule({
	imports: [
		LayoutModule
	],
	exports: [
		DoOverviewComponent,
	],
	declarations: [DoOverviewComponent],
	providers: [],
})
export class DoOverviewModule { }
