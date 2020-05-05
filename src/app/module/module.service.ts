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
				color: "#2f80ED",
				ects: 2,
				startTime: new Date(2020, 2, 17, 9, 15),
				endTime: new Date(2020, 2, 17, 11, 0),
				lecturer: "Gabriela Von Wyl",
			},
			{
				id: 1,
				name: "Objektorientiertes Programmieren 2",
				shortName: "OOP2",
				color: "#27AE60",
				ects: 3,
				startTime: new Date(2020, 2, 17, 12, 15),
				endTime: new Date(2020, 2, 17, 15, 0),
				lecturer: "Dr. Dieter Holz",
			}
		]);
	}
}
