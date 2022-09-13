import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  saveData(title: string, body: string) {
    localStorage.setItem(title, body);
  }

  getData(title: string){
    return localStorage.getItem(title);
  }

  removeData(title: string) {
    localStorage.removeItem(title);
  }

}
