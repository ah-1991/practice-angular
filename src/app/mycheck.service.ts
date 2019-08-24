import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

class MyData {
  data: string;
  list: Person[] = [];
}

class Person {
  name: string;
  mail: string;
  tel: string;
}

@Injectable({
  providedIn: 'root'
})
export class MycheckService {
  private _name: string;
  private data: string[];
  private mydata: MyData = new MyData();

  constructor(private client: HttpClient) {
   this._name = '(no-name)';
   this.data = [];
   this.client.get('./assets/data.json').subscribe((result: MyData) => {
    this.mydata = result;
   });
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  pushData(item: string) {
    this.data.push(item);
  }

  popData() {
    this.data.pop();
  }

  getData(n: number) {
    return this.data[n];
  }

  get dataSize() {
    return this.data.length;
  }

  get dataJson() {
    return JSON.stringify(this.data);
  }

  get dataList() {
    return JSON.parse(JSON.stringify(this.data));
  }

  hello() {
    return 'Hello, ' + this._name;
  }

  getMyData(n: number) {
    return this.mydata.list[n];
  }

  get myDataSize() {
    return this.mydata.list.length;
  }

  get myDataList() {
    return this.mydata.list;
  }

  get myData() {
    return this.mydata.data;
  }
}
