import {
  Component
} from '@angular/core';

import {
  NavController
} from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  items = [];
  currentId = 0;
  makeItems(num) {

    for (let i = 0; i < num; i++) {
      let item = {
        id: this.currentId,
        title: 'Title',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
        avatarUrl: 'assets/img.jpg',
        height: i * 92397.0 % 61 + 50
      };

      this.items.push(item);
      this.currentId ++;
    }

  }

  constructor(public navCtrl: NavController) {
    this.items = [];
    this.makeItems(20);
  }


  doInfinite(): Promise < any > {
    console.log('Begin async operation');

    return new Promise((resolve) => {

      setTimeout(() => {

        console.log('Begin Async operation');
        this.makeItems(20);
        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }




}
