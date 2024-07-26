function SampleFunction() {
    this.name = "Ramanan",
    this.displayName = function() {
        return `Name is${this.name}`;
    }
}
// SampleFunction()
// this.displayName();
function SampleFunctionStrict() {
    "use strict"
    // if we use strict mode this will be undefined

    this.name = "Ramanan",
    this.displayName = function() {
        return `Name is${this.name}`;
    }
}
// SampleFunctionStrict()
// this.displayName();

const ff = {
    
    name: 'Ramanan',
    displayName : function() {
        "use strict"
        console.log(this.name);
        console.log(this === ff);
    }
}

ff.name = "Gowri Ramanan"
// ff.displayName();

// const ffAssign = ff.displayName; reassigning will change the scope
// ffAssign();

const exampleInnerFunctionScope =  {
    age: 12,
    displayName: function() {
        
        function inner() {
            console.log(exampleInnerFunctionScope ===  this);
            console.log(this.age);
        }
        inner();
    }
}


// exampleInnerFunctionScope.displayName();

// Value of this when invoked as method


// Fat arrow function tecnique

const exampleInnerFunctionScopeFatArrow =  {
    age: 12,
    displayName: function() {
        console.log(this.age);
        const inner = () => {
            console.log(exampleInnerFunctionScope ===  this);
            console.log(this.age);
        }
        inner();
    }
}

exampleInnerFunctionScopeFatArrow.displayName();

// indirect invocation - call, apply, bind