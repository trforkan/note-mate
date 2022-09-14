import { Note } from './../../../model/models';
import { LocalService } from './../../../local/local.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  note = this.formBuilder.group({
    title: [''],
    body: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private local: LocalService,
    public dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {}

  saveData() {
    // console.log(this.note.value);
    // alert("Note added to local storage Successfully");
    this.local.saveData(this.note.value as Note);
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  openSnackBar() {
    this.snackbar.open('Data Stored in local storage successfully');
    this.saveData();

    setTimeout(() => {
      this.snackbar.dismiss();
    }, 1500);
  }
}
