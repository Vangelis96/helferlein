import { NgModule } from '@angular/core';
import { ModulePageComponent } from './module-page/module-page.component';
import { ModuleTileComponent } from './module-tile/module-tile.component';
import { LayoutModule } from '../layout';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
	  LayoutModule,
	  CommonModule,
	  MatButtonModule,
	  MatIconModule,
  ],
  exports: [ModulePageComponent, ModuleTileComponent],
  declarations: [ModulePageComponent, ModuleTileComponent],
  providers: [],
})
export class ModuleModule { }
