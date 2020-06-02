import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulePageComponent } from './module/module-page/module-page.component';
import { CreateOverviewComponent } from './create-overview/create-overview.component';
import { DoOverviewComponent } from './do-overview/do-overview.component';
import { ModuleComponent } from './module/module/module.component';
import { ModuleCreateComponent } from './module/module-create/module-create.component';
import { ModuleDetailComponent } from './module/module-detail/module-detail.component';
import { ExamComponent } from './exam/exam.component';
import { CreateExamComponent } from './exam/create-exam.component';
import { SubmissionComponent } from './submission/submission.component';
import { CreateSubmissionComponent } from './submission/create-submission.component';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './task/create/create-task.component';


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
	{ path: 'do-overview', component: DoOverviewComponent },
	{
		path: 'exam', component: ExamComponent, children: [
			{
				path: '',
				redirectTo: 'create',
				pathMatch: 'full'
			},
			{
				path: 'create',
				component: CreateExamComponent,
			}
		]
	},
	{
		path: 'submission', component: SubmissionComponent, children: [
			{
				path: '',
				redirectTo: 'create',
				pathMatch: 'full'
			},
			{
				path: 'create',
				component: CreateSubmissionComponent,
			}
		]
	},
	{
		path: 'task', component: TaskComponent, children: [
			{
				path: '',
				redirectTo: 'create',
				pathMatch: 'full'
			},
			{
				path: 'create',
				component: CreateTaskComponent,
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
