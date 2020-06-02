import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../module/module.service';
import { Module } from 'src/core/models/module';
import { Router } from '@angular/router';

@Component({
	selector: 'hlf-create-overview',
	templateUrl: 'create-overview.component.html',
	styleUrls: ['create-overview.component.scss']
})

export class CreateOverviewComponent implements OnInit {

	userId = 0;
	modules: Module[];
	lastMove;
	startId;
	endId;
	touchStartModule: Module;

	constructor(
		private _moduleService: ModuleService,
		private _router: Router,
	) { }

	ngOnInit() {
		this._moduleService.getModulesByUser(this.userId).subscribe(o => {
			this.modules = o;
		})
	}

	setModule(module: Module) {
		this.touchStartModule = module;
	}

	setAction(event) {
		var element = document.elementFromPoint(event.center.x, event.center.y);
		this.searchButton(element, 0);
	}

	searchButton(element: Element, depth: number) {
		if (element != null && depth < 5) {
			if (element.tagName == 'BUTTON') {
				this.readAction(element);
			} else {
				this.searchButton(element.parentElement, depth + 1);
			}
		}
	}

	readAction(element: Element) {
		switch (element.id) {
			case 'task': this._router.navigate(['/', 'task', 'create'], {
				queryParams: {
					id: this.touchStartModule.id,
				}
			}); break;
			case 'submission': this._router.navigate(['/', 'submission', 'create'], {
				queryParams: {
					id: this.touchStartModule.id,
				}
			}); break;
			case 'exam': this._router.navigate(['/', 'exam', 'create'], {
				queryParams: {
					id: this.touchStartModule.id,
				}
			}); break;
			default: break;
		}
	}
}
