import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables-promise-difference',
  standalone: true,
  imports: [],
  templateUrl: './observables-promise-difference.component.html',
  styleUrl: './observables-promise-difference.component.scss'
})
export class ObservablesPromiseDifferenceComponent {

  myObservable:any;
  myPromise:any;
  mySubscription:any;

  create() {
    this.myObservable = new Observable<string>((observer) => {
      // console.log('Observable has created');
      observer.next('Observable has emmited 1st value');
      observer.next('Observable has emmited 2nd value');
      observer.next('Observable has emmited 3rd value');
      // setInterval(() => {
      //   observer.next('Observable emmited');
      // }, 1000);

      // setTimeout(() => {
      //   observer.next('Observable emmited');
      // }, 5000);
    });

    this.myPromise = new Promise<string>((resolve, reject) => {
      // console.log('Promise has created');
      resolve('Promise has emmited 1st value');
      resolve('Promise has emmited 2nd value');
      resolve('Promise has emmited 3rd value');
      // setInterval(() => {
      //   resolve('Promise emmited');
      // }, 1000);

      // setTimeout(() => {
      //   resolve('Promise emmited');
      // }, 5000);
    });

    // this.myPromise.then((res:any) => {
    //   console.log(res);
    // });
    
    // this.myObservable.subscribe((res:any) => {
    //   console.log(res);
    // });
  }

  execute() {
    this.mySubscription = this.myObservable.subscribe((res:any) => {
      console.log(res);
    });

    this.myPromise.then((res:any) => {
      console.log(res);
    });
  }

  cancel() {
    this.mySubscription.unsubscribe();
  }
}
