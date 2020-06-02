import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoElementService } from '../../todo/todo-element.service';
import { ToDoElement } from 'src/core/models/module';
import { Module } from 'src/core/models/module';
import { ModuleService } from '../module.service';

@Component({
  selector: 'hlf-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.scss']
})
export class ModuleDetailComponent implements OnInit {

	userId = 0;
	moduleId;
	examsAndSubmissions: ToDoElement[];
	tasks: ToDoElement[];
	selectedModule: Module;

  constructor(
		private route: ActivatedRoute,
		private todoElementService: ToDoElementService,
		private _moduleService: ModuleService,
  ) { }

  ngOnInit() {
		this.moduleId = this.route.snapshot.queryParamMap.get('id');
		this._moduleService.getModulesByUser(this.userId).subscribe(o => {
			this.selectedModule = o.find(o => o.id == this.moduleId);
		})

		this.todoElementService.getPendingExamsAndSubmissions(this.userId).subscribe(result => {
			this.examsAndSubmissions = result;
		});

		this.todoElementService.getTasks(this.userId).subscribe(result => {
			this.tasks = result;
		})
	}

}
