import { Observable, of, from, fromEvent, concat, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';

let timesDiv = document.getElementById('times');
let button = document.getElementById('timerButton');

let timer$ = interval(1000);

let timerSubscription = timer$.subscribe(
  value => timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br>`,
  null,
  () => console.log('All done!')
);

fromEvent(button, 'click')
  .subscribe(
    event => timerSubscription.unsubscribe()
  );
