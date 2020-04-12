# Uwadie Plugin

## How to install

NPM: `npm i uwadie --save`

Yarn: `yarn add uwadie`

## Implementation

The implementation is straight forward, you create a new instance of Uwadie passing in no options.
Afterwards you call the `getFormattedTime` method which takes in an object of options and a callback which returns the formatted time.
Passing in an empty object returns the formatted time with the AM/PM convention.
Passing in an object with `setTimestamp` property set to false returns the time without the AM/PM convention

```
// use with the import syntax
import Uwadie from "Uwadie";
// use with require (commonJS)
const Uwadie = require("uwadie");
//returns time with AM/PM convention
const getTime = new Uwadie();
getTime.getFormattedTime({}, time=> console.log(time)) // returns 23:22PM
```

```
//returns time without AM/PM convention
const getTime = new Uwadie();
getTime.getFormattedTime({setTimeStamp: false}, time=> console.log(time)) // returns 23:22
```

Interested in my work ? <a href="https://timothyogbemudia.dev" target=_blank>Check me out</a>
