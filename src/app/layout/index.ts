import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PageComponent } from './page/page.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { IconButtonModule } from '../icon-button';
import { DialogLegalModule } from '../dialog-legal';

@NgModule({
	imports: [
		MatSidenavModule,
		MatIconModule,
		MatButtonModule,
		OverlayModule,
		IconButtonModule,
		MatListModule,
		DialogLegalModule,
	],
	exports: [
		PageComponent
	],
	declarations: [
		PageComponent
	],
	providers: [],
})
export class LayoutModule { }
