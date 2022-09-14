import { Note } from './../model/models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() {}

  saveData(notes: Note) {
    localStorage.setItem(notes.title, JSON.stringify(notes));
  }

  getData() {
    let allNotes:Note[]=[];

    // allNotes.splice(0);

    for(var i=0; i<localStorage.length; i++) {
      var key = (localStorage.key(i));
      var obj=localStorage.getItem((key as string));
      allNotes.push(JSON.parse(obj as string));
    }
    // if(localStorage.getItem("allNotes")){
    //   allNotes=JSON.parse(localStorage.getItem("allNotes"))
    // }

    return allNotes;
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }

  formatData() {
    localStorage.clear();
  }

}
