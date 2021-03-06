import { ToDoType } from './todo-type';

export interface Module {
	id: number;
	name: string;
	shortName: string;
	lecturer: string;
	color: string;
	ects: number;
	startTime: Date;
	endTime: Date;
}

export interface ToDoElement {
	text: string;
	dueDate: Date;
	module: Module;
	type: ToDoType;
}
