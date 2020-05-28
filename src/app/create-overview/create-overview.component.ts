import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../module/module.service';
import { Module } from 'src/core/models/module';

@Component({
	selector: 'hlf-create-overview',
	templateUrl: 'create-overview.component.html',
	styleUrls: ['create-overview.component.scss']
})

export class CreateOverviewComponent implements OnInit {

	userId = 0;
	modules: Module[];

	constructor(
		private _moduleService: ModuleService
	) { }

	ngOnInit() {
		this._moduleService.getModulesByUser(this.userId).subscribe(o => {
			this.modules = o;
		})
	}

	test(event) {console.log(event)}

}
