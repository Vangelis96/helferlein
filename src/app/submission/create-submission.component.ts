import { Component, OnInit } from '@angular/core';
import { Module } from 'src/core/models/module';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from '../module/module.service';

@Component({
	selector: 'hlf-create-submission',
	templateUrl: 'create-submission.component.html'
})

export class CreateSubmissionComponent implements OnInit {
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
