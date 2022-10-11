import { Observable, of } from 'rxjs';
import { allBooks, allReaders } from './data';

let source1$ = of('hello', 10, true, allReaders[0].name);
source1$.subscribe(value => console.log(value));