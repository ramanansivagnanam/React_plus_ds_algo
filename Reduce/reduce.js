//     const data = [1,2,3,4,5,6,7];
//     function reduceFunction(intialValue=0,currentValue){
//         return intialValue + currentValue;

// }

// const accumulation = data.reduce(reduceFunction);
// console.log(accumulation);
// --------------------------------------------------


// const array = [1.1,1.2, 1.3, 2.1, 3.2];

// const groupedValues = array.reduce((previousValue, currentValue)=> {
//    const flooredValue = Math.floor(currentValue);
//    if(!previousValue[flooredValue]) {
//       previousValue[flooredValue] = [];
//    }
//    previousValue[flooredValue].push(currentValue);
//    return previousValue;

// }, {})

// console.log(groupedValues);
// --------------------------------------------------

// Create a promise helper

const asynTask = function (i) {
    return new Promise((resolve) => {
        setTimeout(() =>  resolve(`completing ${i}`), i * 1000);
    })
}

const asyncTaskList = [
    asynTask(1),
    asynTask(3),
    asynTask(2),
    asynTask(6),
    asynTask(2)
]

const tasksDone = function (promises) {
    promises.reduce((previousTask, currentTaks) => {
        return previousTask.then(() => {
            return currentTaks.then((value) => {
                console.log(value);
            })
        },)
    }, Promise.resolve())
}

tasksDone(asyncTaskList)