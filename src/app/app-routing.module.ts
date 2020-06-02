import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulePageComponent } from './module/module-page/module-page.component';
import { CreateOverviewComponent } from './create-overview/create-overview.component';
import { DoOverviewComponent } from './do-overview/do-overview.component';
import { ModuleComponent } from './module/module/module.component';
import { ModuleCreateComponent } from './module/module-create/module-create.component';
import { ModuleDetailComponent } from './module/module-detail/module-detail.component';


const routes: Routes = [
	{ path: '', redirectTo: 'module', pathMatch: 'full' },
	{ path: 'module', component: ModuleComponent, children: [
		{
			path: '',
			redirectTo: 'overview',
			pathMatch: 'full'
		},
		{
			path: 'overview', component: ModulePageComponent
		},
		{
			path: 'create', component: ModuleCreateComponent,
		},
		{
			path: 'detail', component: ModuleDetailComponent,
		}
	]},
	{ path: 'create-overview', component: CreateOverviewComponent },
	{ path: 'do-overview', component: DoOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
