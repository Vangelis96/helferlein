import { Injectable } from '@angular/core';
import { Module } from 'src/core/models/module';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ModuleService {
	constructor() { }

	getModulesByUser(userId: number): Observable<Module[]> {
		return of([
			{
				id: 1,
				name: "Workshop",
				shortName: "ws3C",
				color: "orange",
				ects: 2,
				startTime: new Date(2020, 2, 17, 9, 15),
				endTime: new Date(2020, 2, 17, 11, 0),
				lecturer: "Gabriela Von Wyl",
			},
			{
				id: 2,
				name: "Objektorientiertes Programmieren 2",
				shortName: "OOP2",
				color: "green",
				ects: 3,
				startTime: new Date(2020, 2, 17, 12, 15),
				endTime: new Date(2020, 2, 17, 15, 0),
				lecturer: "Dr. Dieter Holz",
			},
			{
				id: 3,
				name: "Mathematik für Datenkommunikation",
				shortName: "MADA",
				color: "purple",
				ects: 3,
				startTime: new Date(2020, 2, 17, 12, 15),
				endTime: new Date(2020, 2, 17, 15, 0),
				lecturer: "Dr. Dieter Holz",
			},
			{
				id: 4,
				name: "Technical English 2",
				shortName: "TEN2",
				color: "teal",
				ects: 3,
				startTime: new Date(2020, 2, 17, 12, 15),
				endTime: new Date(2020, 2, 17, 15, 0),
				lecturer: "Dr. Dieter Holz",
			},
			{
				id: 5,
				name: "User Interface and Interaction Design",
				shortName: "UIDC",
				color: "pink",
				ects: 3,
				startTime: new Date(2020, 2, 17, 12, 15),
				endTime: new Date(2020, 2, 17, 15, 0),
				lecturer: "Dr. Dieter Holz",
			},
			{
				id: 5,
				name: "Lineare Algebra und Geometrie",
				shortName: "LAG",
				color: "indigo",
				ects: 3,
				startTime: new Date(2020, 2, 17, 12, 15),
				endTime: new Date(2020, 2, 17, 15, 0),
				lecturer: "Dr. Dieter Holz",
			}
		]);
	}
}
