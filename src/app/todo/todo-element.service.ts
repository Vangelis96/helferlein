import { Injectable } from '@angular/core';
import { ToDoElement } from 'src/core/models/module';
import { ToDoType } from 'src/core/models/todo-type';
import { of, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ToDoElementService {
	constructor() { }

	getPendingExamsAndSubmissions(userId: number): Observable<ToDoElement[]> {
		let elements: ToDoElement[] = [];

		let tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);

		elements.push({
			dueDate: tomorrow,
			text: 'Beispielprüfung',
			type: ToDoType.EXAM,
			module: {
				id: 2,
				name: "Objektorientiertes Programmieren 2",
				shortName: "OOP2",
				color: "green",
				ects: 3,
				startTime: new Date(2020, 2, 17, 12, 15),
				endTime: new Date(2020, 2, 17, 15, 0),
				lecturer: "Dr. Dieter Holz",
			}
		});

		elements.push({
			dueDate: new Date(2020, 5, 20, 9, 40),
			text: 'Beispielabgabe',
			type: ToDoType.SUBMISSION,
			module: {
				id: 3,
				name: "Mathematik für Datenkommunikation",
				shortName: "MADA",
				color: "purple",
				ects: 3,
				startTime: new Date(2020, 2, 17, 12, 15),
				endTime: new Date(2020, 2, 17, 15, 0),
				lecturer: "Dr. Dieter Holz",
			}
		});

		elements.push({
			dueDate: new Date(2020, 5, 22, 18, 15),
			text: 'Beispielprüfung 2',
			type: ToDoType.EXAM,
			module: {
				id: 4,
				name: "Technical English 2",
				shortName: "TEN2",
				color: "teal",
				ects: 3,
				startTime: new Date(2020, 2, 17, 12, 15),
				endTime: new Date(2020, 2, 17, 15, 0),
				lecturer: "Dr. Dieter Holz",
			}
		})

		return of(elements);
	}

	getTasks(userId: number): Observable<ToDoElement[]> {
		let elements: ToDoElement[] = [];

		let tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);

		elements.push({
			dueDate: tomorrow,
			text: 'Beispielaufgabe 1',
			type: ToDoType.TASK,
			module: {
				id: 2,
				name: "Objektorientiertes Programmieren 2",
				shortName: "OOP2",
				color: "green",
				ects: 3,
				startTime: new Date(2020, 2, 17, 12, 15),
				endTime: new Date(2020, 2, 17, 15, 0),
				lecturer: "Dr. Dieter Holz",
			}
		});

		elements.push({
			dueDate: new Date(2020, 5, 20, 9, 40),
			text: 'Beispielaufgabe 2',
			type: ToDoType.TASK,
			module: {
				id: 3,
				name: "Mathematik für Datenkommunikation",
				shortName: "MADA",
				color: "purple",
				ects: 3,
				startTime: new Date(2020, 2, 17, 12, 15),
				endTime: new Date(2020, 2, 17, 15, 0),
				lecturer: "Dr. Dieter Holz",
			}
		});

		elements.push({
			dueDate: new Date(2020, 5, 22, 18, 15),
			text: 'Beispielaufgabe 3',
			type: ToDoType.TASK,
			module: {
				id: 4,
				name: "Technical English 2",
				shortName: "TEN2",
				color: "teal",
				ects: 3,
				startTime: new Date(2020, 2, 17, 12, 15),
				endTime: new Date(2020, 2, 17, 15, 0),
				lecturer: "Dr. Dieter Holz",
			}
		})

		return of(elements);
	}
}
