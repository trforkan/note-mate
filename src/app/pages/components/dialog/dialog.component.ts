import { LocalService } from './../../../local/local.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  note = this.formBuilder.group({
    title: [""],
    body: [""]
  });

  constructor(private formBuilder: FormBuilder, private local: LocalService) { }

  ngOnInit(): void {
  }

  saveData() {
    console.log(this.note.value);
    this.local.saveData(<string>this.note.value.title, <string>this.note.value.body)
  }

}
