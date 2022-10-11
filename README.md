# rxjs6
RxJS 6: Getting Started by Brice Wilson, September 26, 2018, Pluralsight

## Project
### 02/demos/After
1. RxBookTracker: run npm start and go to localhost:3000
### 03/demos/After
1. RxBookTracker: delete package-lock.json and run npm install can fix some of the version issue. Updated webpack-cli to version 3.0.4 to fix an issue. updated typescript to 3.9.7 to fix another issue. 
2. ObservablebyFunction: using constructionAdded "devtool: "source-map" to webpack.config.js to fix the source map not found issue
3. IncorrectPageTitle: observable to throw error
4. correctPageTitle: display book title again and after while trigger the return function (clean up)
5. createObservable: replace the constructor with the create method
6. ofObservable: using of to create Observable. Can pass any comma separated lists
7. fromObservable: passing an array to from to create an observable
8. concatObservable: concat observables to one
9. fromEventObservable: Observable created by button click event
10. ajax: make ajax requests with Rxjs
11. ajax2: display the result
### 04/demos/After
1. RxBookTracker: remove package-lock.json, npm i, and update start script path for mac
2. observer1: use object literal for observer
3. observer2: use callback function for observer
4. observer3: callback functions are optional
5. multiObservers: multiple calls to subscribe to the same observable. Each observer trigger a different observable
6. subscription: when cancel subscribe, you will not get the completion method
7. subscriptionWithCleanUp: add tear down code
8. subscriptionAdd: add a subscription to another subscription. The cancel can be done by the second subscription


