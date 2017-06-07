# next-dll-package
> Get the right package by NODE_ENV.


## usage:
```js
var NxDllPackage = require('next-dll-package');
var reactPkg = NxDllPackage.get('react');

console.log(reactPkg);

// process.env.NODE_ENV = production:
//[ 'react.min', 'react-dom.min' ]

// process.env.NODE_ENV = development:
//[ 'react', 'react-dom' ]
```


## resources:

## todos:
- [ ] todo list..
