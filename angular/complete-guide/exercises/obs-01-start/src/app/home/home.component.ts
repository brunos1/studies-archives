import {Component, OnDestroy, OnInit} from '@angular/core';

import {interval, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);

    // create is deprecated
    // const customIntervalObservable = Observable.create(observer => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     count++
    //   }, 1000);
    // });

    // the current way to make new instances of Observable
    const customIntervalObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    });
    // });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
