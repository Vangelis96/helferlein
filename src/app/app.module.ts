import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuleModule } from './module';
import { LayoutModule } from './layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CreateOverviewModule } from './create-overview';
import { DoOverviewModule } from './do-overview';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { ExamModule } from './exam';
import { SubmissionModule } from './submission';
import { TaskModule } from './task';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		ModuleModule,
		LayoutModule,
		CommonModule,
		CreateOverviewModule,
		DoOverviewModule,
		HammerModule,
		MatNativeDateModule,
		ExamModule,
		SubmissionModule,
		TaskModule,
	],
	providers: [
		{provide: MAT_DATE_LOCALE, useValue: 'de-CH'}
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
