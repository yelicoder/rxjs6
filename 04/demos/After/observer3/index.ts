import { Observable, of, from, fromEvent, concat, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';


//#region Subscribing to Observables with Observers

let books$ = from(allBooks);

books$.subscribe(
  null,
  null,
  () => console.log(`All done!`)
);
//#endregion