import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLegalComponent } from './dialog-legal.component';

describe('DialogLegalComponent', () => {
  let component: DialogLegalComponent;
  let fixture: ComponentFixture<DialogLegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
