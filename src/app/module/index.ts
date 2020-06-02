import { NgModule } from '@angular/core';
import { ModulePageComponent } from './module-page/module-page.component';
import { ModuleTileComponent } from './module-tile/module-tile.component';
import { LayoutModule } from '../layout';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ModuleCreateComponent } from './module-create/module-create.component';
import { ModuleComponent } from './module/module.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { ModuleDetailComponent } from './module-detail/module-detail.component';
import { ToDoModule } from '../todo';

@NgModule({
  imports: [
		LayoutModule,
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatMenuModule,
		RouterModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		ToDoModule,
  ],
  exports: [
		ModulePageComponent,
		ModuleTileComponent
	],
  declarations: [
		ModulePageComponent,
		ModuleTileComponent,
		ModuleCreateComponent,
		ModuleComponent,
		ModuleDetailComponent
	],
  providers: [],
})
export class ModuleModule { }
