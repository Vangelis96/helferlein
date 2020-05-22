import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'hlf-icon-button',
	templateUrl: 'icon-button.component.html',
	styleUrls: ['icon-button.component.scss']
})

export class IconButtonComponent implements OnInit {
	@Input() icon = '';
	@Input() href = '';

	private _active = false;

	@Input() set active(value) {
		this._active = value;
	}

	get active() {
		return this._active;
	}

	constructor() { }

	ngOnInit() { }
}
