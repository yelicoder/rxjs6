import { Observable, of, from, fromEvent, concat, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';


//#region Subscribing to Observables with Observers

let books$ = from(allBooks);

let booksObserver = {
  next: book => console.log(`Title: ${book.title}`),
  error: err => console.log(`ERROR: ${err}`),
  complete: () => console.log(`All done!`)
};

books$.subscribe(booksObserver);

//#endregion