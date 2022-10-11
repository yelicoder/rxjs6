import { fromEvent } from 'rxjs';
import { allReaders } from './data';


let button = document.getElementById('readersButton');

fromEvent(button, 'click')
.subscribe(event => {
    console.log(event);

    let readersDiv = document.getElementById('readers')

    for (let reader of allReaders) {
        readersDiv.innerHTML += reader.name + '<br>'
    }
});



