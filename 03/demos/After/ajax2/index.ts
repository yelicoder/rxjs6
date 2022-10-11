import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';

let button = document.getElementById('readersButton');

fromEvent(button, 'click')
.subscribe(event => {
    ajax('/api/readers')
    .subscribe(ajaxResponse => {
        let readers = ajaxResponse.response;

        let readersDiv = document.getElementById('readers');

        for (let reader of readers) {
            readersDiv.innerHTML += reader.name + '<br>'
        }
    })
   
});



