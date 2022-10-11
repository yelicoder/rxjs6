import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';

let button = document.getElementById('readersButton');

fromEvent(button, 'click')
.subscribe(event => {
    ajax('/api/readers')
    .subscribe(ajaxResponse => {
        console.log(ajaxResponse);
    })
   
});



