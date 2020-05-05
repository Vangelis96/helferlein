import { Component, OnInit, Input } from '@angular/core';
import { Module } from 'src/core/models/module';

@Component({
	selector: 'hlf-module-tile',
	templateUrl: 'module-tile.component.html',
	styleUrls: ['module-tile.component.scss']
})

export class NameComponent implements OnInit {

	@Input() module: Module;

	constructor() { }

	ngOnInit() { }
}
