import {interval, mergeMap, of} from 'rxjs';
import {take} from 'rxjs/operators';

// SUBSCRIBE
const firstObservable = of('Перший потік');
const secondObservable = () => interval(1000).pipe(take(3));
firstObservable.subscribe(data1 => {
    secondObservable().subscribe(data2 => {
        console.log('Вкладений subscribe:', data2);
    });
});

// HOMEWORK
// MERGE MAP
const firstObservable2 = of('Перший потік');
const secondObservable2 = () => interval(1000).pipe(take(3));
firstObservable2
    .pipe(mergeMap(() => interval(1000).pipe(take(3))))
    .subscribe(result => console.log('Вкладений subscribe:', result));
