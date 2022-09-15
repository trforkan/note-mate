import { Note } from './../../../model/models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocalService } from './../../../local/local.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DialogComponent } from './../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  allData: Note[] = [];
  filteredNotes: Note[] = [];

  dataPresent = false;

  searchText = this.formBuilder.group({
    text: [''],
  });

  constructor(
    private local: LocalService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar
  ) {}

  dataLoad() {
    this.allData?.splice(0);
    this.filteredNotes?.splice(0);

    this.allData = this.local.getData();

    var filterReferanceValue = this.searchText.value.text;
      for( var i=0; i < this.allData.length; i++){
        var objTitle = this.allData[i].title;
        if(objTitle.includes(filterReferanceValue as string)){
          this.filteredNotes?.push(this.allData[i]);
        }
      }
  }

  ngOnInit(): void {
    this.dataLoad();
  }

  formatStorage() {
    this.allData?.splice(0);
    this.filteredNotes?.splice(0);
    this.local.formatData();
  }

  deleteNote(keyValue: number) {
    this.local.removeData(keyValue);
    var noteTitle = localStorage.key(keyValue);
    this.snackbar.open(`${noteTitle} is deleted successfully`);
    setTimeout(()=>{
      this.snackbar.dismiss();
    },1500);
    this.dataLoad();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(() => {
      this.dataLoad();
    });
  }

  searchData() {
    this.dataLoad();
  }
}
