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
	lastMove;
	startId;
	endId;

	constructor(
		private _moduleService: ModuleService
	) { }

	ngOnInit() {
		this._moduleService.getModulesByUser(this.userId).subscribe(o => {
			this.modules = o;
		})
	}

	test(event) {
		console.log(event);
		event.preventDefault();
		event.stopPropagation();
		var changedTouch = event.changedTouches[0];
		if (!changedTouch) changedTouch = this.lastMove.changedTouches[0];
		var elem = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);
		this.lastMove = event;
		console.log(elem);
	}

	onStart(event: TouchEvent) {
		console.log(event);
	}

	onMove(event) {
		this.lastMove = event;
	}

}
