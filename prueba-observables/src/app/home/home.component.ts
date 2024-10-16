import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, interval, map } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000).pipe(map(
      (data: number) => {
        return data * 2;
      }
    ));
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) =>
        console.log(number)
    )
    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first package');
        }, 2000);
        setTimeout(() => {
          observer.next('second package');
        }, 4000);
        // setTimeout(() => {
        //   observer.error('this does not work');
        // }, 5000);
        setTimeout(() => {
          observer.complete();
        }, 5000);
        //No se ejecuta, porque ya se completo
        setTimeout(() => {
          observer.next('third package  ');
        }, 6000);
      }
    );
    this.customObsSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    )
  };
  ngOnDestroy() {
    this.customObsSubscription.unsubscribe();
    this.numbersObsSubscription.unsubscribe();
  }
}
