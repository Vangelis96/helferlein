import { Component, OnInit } from '@angular/core';
import { Module } from 'src/core/models/module';
import { ModuleService } from '../module.service';

@Component({
	selector: 'hlf-module-page',
	templateUrl: 'module-page.component.html',
	styleUrls: ['module-page.component.scss'],
})
export class ModulePageComponent implements OnInit {

	modules: Module[];
	userId = 0;
	constructor(
		private _moduleService: ModuleService,
	) {}

	ngOnInit() {
		this._moduleService.getModulesByUser(this.userId).subscribe(o => {
			this.modules = o;
		})
	}
}
