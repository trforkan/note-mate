import { localStorageData } from './../model/models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() {}

  saveData(object: localStorageData) {
    localStorage.setItem(object.title, JSON.stringify(object));
  }

  getData() {
    var allNotes:localStorageData[]=[];

    allNotes.splice(0);

    for(var i=0; i<localStorage.length; i++) {
      var key = (localStorage.key(i));
      var obj=localStorage.getItem((key as string));
      allNotes.push(JSON.parse(obj as string));
    }

    return allNotes;
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }

  formatData() {
    localStorage.clear();
  }

}
