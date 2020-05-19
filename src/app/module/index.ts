import { NgModule } from '@angular/core';
import { ModulePageComponent } from './module-page/module-page.component';
import { LayoutModule } from '../layout';

@NgModule({
  imports: [
	  LayoutModule,
  ],
  exports: [ModulePageComponent],
  declarations: [ModulePageComponent],
  providers: [],
})
export class ModuleModule { }
