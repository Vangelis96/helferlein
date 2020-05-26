import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulePageComponent } from './module/module-page/module-page.component';


const routes: Routes = [
	{ path: '', redirectTo: 'module-overview', pathMatch: 'full' },
	{ path: 'module-overview', component: ModulePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
