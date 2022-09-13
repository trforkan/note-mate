import { LocalService } from './../../../local/local.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';

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
    private local: LocalService,
    public dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {}

  saveData() {
    console.log(this.note.value);
    alert("Note added to local storage Successfully");
    this.local.saveData(
      <string>this.note.value.title,
      <string>this.note.value.body
    );
    this.dialogRef.close();
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
