import { LocalService } from './../../../local/local.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DialogComponent } from './../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchText = this.formBuilder.group({
    text: ['']
  });

  constructor(private local: LocalService, private dialog: MatDialog , private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  searchData() {
    console.log(this.local.getData(<string>this.searchText.value.text));
  }

}
