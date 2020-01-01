


## 设定nvm中node的默认版本
`nvm alias default 8.15.1`

KeystoneJS
ElementalUI

## import FontFaceObserver from 'fontfaceobserver';
Webfont loading. Simple, small, and efficient.
https://github.com/bramstein/fontfaceobserver

## import 'sanitize.css/sanitize.css';
A best-practices CSS foundation https://csstools.github.io/sanitize.css

## import { ConnectedRouter } from 'connected-react-router';
A Redux binding for React Router v4
https://github.com/supasate/connected-react-router#readme

## react-intl
https://github.com/formatjs/react-intl
Internationalize React apps. This library provides React components and an API to format dates, numbers, and strings, including pluralization and handling translations.

## createSelector(...inputSelectors | [inputSelectors], resultFunc)
https://github.com/reduxjs/reselect#readme
Selector library for Redux
Takes one or more selectors, or an array of selectors, computes their values and passes them as arguments to resultFunc.

## history
Manage session history with JavaScript
https://github.com/ReactTraining/history

## connected-react-router
A Redux binding for React Router v4
https://github.com/supasate/connected-react-router#readme
connectRouter
```javascript
// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  ... // rest of your reducers
})
export default createRootReducer
```

## produce(currentState, producer: (draftState) => void): nextState
Create the next immutable state by mutating the current one https://immerjs.github.io/immer/
The Immer package exposes a default function that does all the work.
https://github.com/immerjs/immer/blob/master/docs/produce.md

## hoist-non-react-statics
```javascript
import hoistNonReactStatics from 'hoist-non-react-statics';
hoistNonReactStatics(targetComponent, sourceComponent);
```
If you have specific statics that you don't want to be hoisted, you can also pass a third parameter to exclude them:
```javascript
hoistNonReactStatics(targetComponent, sourceComponent, { myStatic: true, myOtherStatic: true });
```
Copies non-react specific statics from a child component to a parent component. Similar to Object.assign, but with React static keywords blacklisted from being overridden.
Copies non-react specific statics from a child component to a parent component
https://github.com/mridgway/hoist-non-react-statics#readme

## The repository for high quality TypeScript type definitions.
https://github.com/DefinitelyTyped/DefinitelyTyped#readme

## invariant
https://github.com/zertosh/invariant
A mirror of Facebook's invariant (e.g. React, flux).
A way to provide descriptive errors in development but generic errors in production.
```javascript
var invariant = require('invariant');

invariant(someTruthyVal, 'This will not throw');
// No errors

invariant(someFalseyVal, 'This will throw an error with this message');
// Error: Invariant Violation: This will throw an error with this message
```

## _.conformsTo(object, source)
Checks if object conforms to source by invoking the predicate properties of source with the corresponding property values of object
https://lodash.com/docs/#conformsTo
```javascript
var object = { 'a': 1, 'b': 2 };

_.conformsTo(object, { 'b': function(n) { return n > 1; } });
// => true

_.conformsTo(object, { 'b': function(n) { return n > 2; } });
// => false
```