import { Component, OnInit } from '@angular/core';
import { Module } from 'src/core/models/module';
import { ModuleService } from '../module/module.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'hlf-create-exam',
	templateUrl: 'create-exam.component.html',
	styleUrls: ['create-exam.component.scss']
})

export class CreateExamComponent implements OnInit {
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
