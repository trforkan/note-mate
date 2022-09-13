import { LocalService } from './../../../local/local.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DialogComponent } from './../dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchedData?: {
    title: string,
    body: string
  }[]=[];

  dataPresent = false;

  searchText = this.formBuilder.group({
    text: ['']
  });

  constructor( private local: LocalService, private dialog: MatDialog , private formBuilder: FormBuilder) { }


  dataLoad(){
    for(var i=0; i<localStorage.length; i++){
      // console.log(localStorage.getItem(localStorage.key(i)));
      // console.log(localStorage.key(i));
      var isPresent = false;
      isPresent = localStorage.key(i)?.includes(<string>this.searchText.value.text) as boolean;

      // console.log(localStorage.key(i)," - ",localStorage.key(i)?.includes(<string>this.searchText.value.text));
      if(isPresent) {
        this.searchedData?.push({
          title: <string>(localStorage.key(i)),
          body: <string>(localStorage.getItem(<string>localStorage.key(i)))
        });
      }
    }
  }

  ngOnInit(): void {
    this.dataLoad();
  }

  formatStorage() {
    this.searchedData?.splice(0);
    this.local.formatData();
  }

  deleteNote(index: number) {
    var titleName = localStorage.key(index);
    this.local.removeData(titleName as string);
  }

  openDialog() {
    this.dialog.open(DialogComponent, { disableClose: true });
    // this.dialofRef.open()
    // console.log(dailogModal.afterClosed());

  }

  searchData() {

    this.searchedData?.splice(0);
    // if(this.searchText.value.text==""){
    //   this.searchedData?.splice(0,this.searchedData.length);
    // }

    this.dataLoad();

  }

}
