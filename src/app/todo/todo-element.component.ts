import { Component, OnInit, Input } from '@angular/core';
import { ToDoType } from '../../core/models/todo-type';
import { ToDoElement } from 'src/core/models/module';

@Component({
	selector: 'hlf-todo-element',
	templateUrl: 'todo-element.component.html',
	styleUrls: ['todo-element.component.scss']
})

export class ToDoElementComponent implements OnInit {

	private _todoElement: ToDoElement;

	@Input() set toDoElement(value: ToDoElement) {
		this._todoElement = value;
	}

	get toDoElement(): ToDoElement {
		return this._todoElement;
	}

	constructor() { }

	ngOnInit() { }

	hasIcon() {
		return this.getIcon() != '';
	}

	getIcon() {
		if (this._todoElement) {
			switch (this.toDoElement.type) {
				case ToDoType.SUBMISSION: return 'move_to_inbox';
				case ToDoType.EXAM: return 'rate_review';
			}
		}

		return '';
	}

	isTomorrow() {
		if (this._todoElement) {
			var tomorrow = new Date();
			tomorrow.setDate(tomorrow.getDate() + 1);
			tomorrow.setHours(0, 0, 0, 0);
			var dueDate = new Date(this._todoElement.dueDate);
			dueDate.setHours(0, 0, 0, 0);
			return dueDate.getUTCDate() == tomorrow.getUTCDate();
		}

		return false;
	}
}
