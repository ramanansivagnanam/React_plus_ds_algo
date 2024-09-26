const ArrowFunction = () => {
    console.log(this);
}

const obj = {
    good_name: "Ramanan",
    displayName:  () => {
        console.log(this.good_name);
        console.log(this === obj);
    }
}

obj.displayName();
//  No this, arguments, super or bindings of its own
//  It doesnt have prototype property
//  we cannot use them as constructor
// Unique named paramaters
//  yield cannot be used (in some special cases)



