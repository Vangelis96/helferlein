import { Component, OnInit } from '@angular/core';
import { ToDoElementService } from '../todo/todo-element.service';
import { ToDoElement } from 'src/core/models/module';

@Component({
	selector: 'hlf-do-overview',
	templateUrl: 'do-overview.component.html',
	styleUrls: ['do-overview.component.scss'],
})

export class DoOverviewComponent implements OnInit {

	userId = 0;
	examsAndSubmissions: ToDoElement[];
	tasks: ToDoElement[];

	constructor(
		private todoElementService: ToDoElementService,
	) { }

	ngOnInit() {
		this.todoElementService.getPendingExamsAndSubmissions(this.userId).subscribe(result => {
			this.examsAndSubmissions = result;
		});

		this.todoElementService.getTasks(this.userId).subscribe(result => {
			this.tasks = result;
		})
	}
}
