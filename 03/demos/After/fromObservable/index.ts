import { from } from 'rxjs';
import { allBooks } from './data';

let source2$ = from(allBooks);
source2$.subscribe(book => console.log(book.title));