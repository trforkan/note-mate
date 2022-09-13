import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  searchedData?: {
    title: string,
    body: string
  }

  constructor() { }

  saveData(title: string, body: string) {
    localStorage.setItem(title, body);
  }

  getData(index: number){
    // return localStorage.getItem(localStorage.key(index));
    // var value = localStorage.getItem(localStorage.key(index));
    // if (value && value.startsWith('Good') console.log('found it!', 0, value);
  }

  removeData(title: string) {
    localStorage.removeItem(title);
  }

}
