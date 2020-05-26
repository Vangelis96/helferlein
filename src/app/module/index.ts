import { NgModule } from '@angular/core';
import { ModulePageComponent } from './module-page/module-page.component';
import { ModuleTileComponent } from './module-tile/module-tile.component';
import { LayoutModule } from '../layout';

@NgModule({
  imports: [
	  LayoutModule,
  ],
  exports: [ModulePageComponent, ModuleTileComponent],
  declarations: [ModulePageComponent, ModuleTileComponent],
  providers: [],
})
export class ModuleModule { }
