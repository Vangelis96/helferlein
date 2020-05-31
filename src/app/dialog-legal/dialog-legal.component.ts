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
    const dialogRef = this.dialog.open(DialogContentImprint);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogPrivacy() {
    const dialogRef = this.dialog.open(DialogContentPrivacy);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-imprint',
  templateUrl: 'dialog-content-imprint.html',
})
export class DialogContentImprint {}


@Component({
  selector: 'dialog-content-privacy',
  templateUrl: 'dialog-content-privacy.html',
})
export class DialogContentPrivacy {}
