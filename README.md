[![Build Status](https://travis-ci.org/DonKarlssonSan/vectory.svg?branch=master)](https://travis-ci.org/DonKarlssonSan/vectory)
# vectory
vectory is a JavaScript vector math library written in ES6.

## Install
````
npm install vectory-lib
````

## Using vectory, some examples
First you need to load vectory. Note that vectory is just the name of the lib, but the JavaScript class is called Vector and the module is called vectory-lib.

````
import Vector from 'vectory-lib';

````

Adding with v1.add(v2). Does not change v1.
````
let v1 = new Vector(2, 3);
let v2 = new Vector(4, 5);

let sum = v1.add(v2);
console.log(sum.x); // 6
console.log(sum.y); // 8
````

Adding with v1.addTo(v2). Changes v1.
````
let v1 = new Vector(2, 3);
let v2 = new Vector(4, 5);

v1.addTo(v2);
console.log(v1.x); // 6
console.log(v1.y); // 8
````


## Developing

````
git clone https://github.com/DonKarlssonSan/vectory.git
cd vectory
npm install
````

# Thanks
Thanks to [Keith Peters](https://twitter.com/bit101) for his awesome Youtube channel [Coding Math](https://www.youtube.com/channel/UCF6F8LdCSWlRwQm_hfA2bcQ). This library is more or less the code from [Episode 7 - Vectors Part 2](https://www.youtube.com/watch?v=zYOGtlY6xaM)
