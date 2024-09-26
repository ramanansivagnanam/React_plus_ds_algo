
console.log('dfs');

let person = { name: 'John', age: 30 };

console.log(person.hasOwnProperty('age'));

let numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(result);

let arr = [1, 2, 2, 3, 4, 4, 5];

let uniqueValues = [...new Set(arr)];

console.log(uniqueValues);

let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let merged = { ...obj1, ...obj2 };
console.log(merged);

console.log(isNaN(1)); // true

// prototypal inheritance

function Animal(name) {
  this.name = name;
}
Animal.prototype.sound = () => {
  console.log('generic sound');
};
const animal = new Animal('Dog');
animal.sound();
const dog = Object.create(Animal.prototype);

function Dog() {}
Dog.prototype.bark = () => console.log('Wow wow');

console.log(dog);


class SingleTon {

  constructor() {
    if(!SingleTon.instance) {
      SingleTon.instance = this;
    }
    return SingleTon.instance;
  }

}

const singl1 = new SingleTon();

const signl2 = new SingleTon();



/// SingleTon using functions

const SingleTonF = (function () {
    let instance;
    function createInstance(value) {
        instance = new Object(value);
        return instance;
    }
    return {
        getInstance: function () {
            if(!instance) {
                instance = createInstance("dfsdfd dfasd");
            } else {
                instance;
            }
        }
    }
})();

const sf1 = SingleTonF.getInstance();
const sf2  =SingleTonF.getInstance();

console.log(sf1 === sf2)


// Answer: 'for...of' iterates over values, while 'for...in' iterates over keys.
let arr1 = [1, 2, 3];
for (let value of arr1) {
  console.log(value); // 1, 2, 3
}
for (let key in arr1) {
  console.log(key); // 0, 1, 2
}

// Answer: Throttling limits function calls within a specified time interval.
function throttle(func, delay) {
    let timeout;
    return function(...args) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func(...args);
        }, delay);
      }
    };
  }
  const log = throttle(console.log, 5000);

  log("sdfsd", "fdf", {});


//   How do you implement a recursive function to traverse a nested object?

const obj = { a: 1, b: { c: 2, d: 3 } };

function traverse(obj, flattenedObj={}) {
  for( const key in obj ) {
    if(typeof obj[key] === 'object') {
        traverse(obj[key], flattenedObj);
    } else {
        flattenedObj[key] = obj[key];
    }
  }
  return flattenedObj;
}
const flattnedObj = traverse(obj, {});

console.log(flattnedObj);


function debounce(func, delay) {
    let timeOutid = null;

    return function(...args) {
        console.log(args)
        clearTimeout(timeOutid);
        console.log(this);
        timeOutid = setTimeout(() => func.apply(this, args), delay);
        
    }
}

const debouncedFunction = debounce(function ( name="Ramanan", age="23" ){
    console.log('Some value', this)
}, 5000);

debouncedFunction();

function throttle(func, limit) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

// Usage
window.addEventListener('click', throttle(() => {
    console.log('Scroll event throttled to run once every 200ms');
}, 5000));


// Answer: Promise.race() resolves or rejects with the first promise outcome.
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 2000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
Promise.race([promise1, promise2]).then((value) => console.log(value)); // 2

// How do you handle browser storage limitations when using localStorage?

// Answer: Check storage limits, use JSON.stringify/parse, and handle quota errors.
try {
    localStorage.setItem('key', JSON.stringify({ value: 'data' }));
  } catch (error) {
    if (error.name === 'QuotaExceededError') {
      console.error('Storage limit exceeded');
    }
  }

//   How do you implement a function to flatten an array of nested objects?

const nestedArr = [1, { a: { d: { f : [9, 10] } }, b: 3 }, [4, 5]];

// [1, 2, 3, 4, 5]


function flattenMixedArray(nestedArr) {
    return nestedArr.reduce((acc, cur) => {
        if(Array.isArray(cur)){
            return [...acc, ...flattenMixedArray(cur)];
        } else if (typeof cur === 'object') {
            return [...acc, ...flattenMixedArray(Object.values(cur))];
        } else {
            return [...acc, cur];
        }
    }, [])
}

console.log(flattenMixedArray(nestedArr));

// What is the difference between 'Array.prototype.slice()' and 'Array.prototype.splice()'?

const arr3 = [1, 2, 3, 4];
console.log(arr3.slice(1, 3)); // [2, 3]
console.log(arr3.splice(1, 2)); // [2, 3]
console.log(arr3); // [1, 4]


// How do you implement a function to find the first non-repeating character in a string?

function firstNonRepatingChar(str) {
    let frequencyMap = {};
    for(let char of str) {
        frequencyMap[char] = (frequencyMap[char]  || 0) + 1;
    }
    for(let char of str) {
        if(frequencyMap[char] === 1) 
        return char;
    }
    return false;
}

console.log(firstNonRepatingChar('abaccdeff')); // 'b'
