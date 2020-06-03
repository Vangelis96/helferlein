import { Component, OnInit } from '@angular/core';
import { Module } from 'src/core/models/module';
import { ModuleService } from 'src/app/module/module.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'hlf-create-task',
	templateUrl: 'create-task.component.html'
})

export class CreateTaskComponent implements OnInit {
	selectedModule: Module;
	userId = 0;
	moduleId;

	constructor(
		private _moduleService: ModuleService,
		private _route: ActivatedRoute
	) { }

	ngOnInit() {
		this.moduleId = this._route.snapshot.queryParamMap.get('id');
		this._moduleService.getModulesByUser(this.userId).subscribe(result => {
			this.selectedModule = result.find(o => o.id == this.moduleId);
		});
	}
}
