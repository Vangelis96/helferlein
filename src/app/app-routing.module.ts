import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulePageComponent } from './module/module-page/module-page.component';
import { CreateOverviewComponent } from './create-overview/create-overview.component';
import { DoOverviewComponent } from './do-overview/do-overview.component';


const routes: Routes = [
	{ path: '', redirectTo: 'module-overview', pathMatch: 'full' },
	{ path: 'module-overview', component: ModulePageComponent },
	{ path: 'create-overview', component: CreateOverviewComponent },
	{ path: 'do-overview', component: DoOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
