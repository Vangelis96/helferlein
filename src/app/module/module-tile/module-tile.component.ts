import { Component, OnInit, Input } from '@angular/core';
import { Module } from 'src/core/models/module';

@Component({
	selector: 'hlf-module-tile',
	templateUrl: 'module-tile.component.html',
	styleUrls: ['module-tile.component.scss']
})

export class ModuleTileComponent implements OnInit {

	private _createMode = false;
	@Input() module: Module;
	@Input() set createMode(value) {
		if (value !== false) {
			this._createMode = true;
		}
	}

	get createMode(): boolean {
		return this._createMode;
	}

	constructor() { }

	ngOnInit() { }
}
