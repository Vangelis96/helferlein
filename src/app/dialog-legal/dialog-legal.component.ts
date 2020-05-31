import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'hlf-dialog-legal',
  templateUrl: './dialog-legal.component.html',
  styleUrls: ['./dialog-legal.component.scss']
})
export class DialogLegalComponent {

  constructor(public dialog: MatDialog) {}

  openDialogImprint() {
    const dialogRef = this.dialog.open(DialogContentImprintComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogPrivacy() {
    const dialogRef = this.dialog.open(DialogContentPrivacyComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-imprint',
  templateUrl: 'dialog-content-imprint.html',
})
export class DialogContentImprintComponent {}


@Component({
  selector: 'dialog-content-privacy',
  templateUrl: 'dialog-content-privacy.html',
})
export class DialogContentPrivacyComponent {}
