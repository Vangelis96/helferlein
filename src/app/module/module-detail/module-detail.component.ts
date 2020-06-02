import { Component, OnInit } from '@angular/core';
import { ToDoElementService } from '../../todo/todo-element.service';
import { ToDoElement } from 'src/core/models/module';

@Component({
  selector: 'hlf-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.scss']
})
export class ModuleDetailComponent implements OnInit {

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
