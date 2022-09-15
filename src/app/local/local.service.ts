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

    for(var i=0; i<localStorage.length; i++) {
      let key = (localStorage.key(i));
      let obj=localStorage.getItem((key as string));
      allNotes.push(JSON.parse(obj as string));
    }
    return allNotes;
  }

  removeData(uniqueKey: number) {

    let keyValue = localStorage.key(uniqueKey);
    localStorage.removeItem(keyValue as string);
    // localStorage.removeItem(key);
  }

  formatData() {
    localStorage.clear();
  }

}
