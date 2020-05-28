import { NgModule } from '@angular/core';
import { ModulePageComponent } from './module-page/module-page.component';
import { ModuleTileComponent } from './module-tile/module-tile.component';
import { LayoutModule } from '../layout';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
	  LayoutModule,
	  CommonModule
  ],
  exports: [ModulePageComponent, ModuleTileComponent],
  declarations: [ModulePageComponent, ModuleTileComponent],
  providers: [],
})
export class ModuleModule { }
