const getAverage = arr => {
    // sum the values from the array
    const reducer = (total, currentValue) => total + currentValue;
    const sum = arr.reduce();
    return total / arr.length;
    // get the length of the array
    // divide the array sum by length
const arr = [1, 2, 3, 4, 5, 6];
getAverage(arr); 
    
}

//OVERVIEW
//built an arrow function than we're calling it
// created a reducer and we're using the reduce function so we're passing our reducer into reduce. 
//accumulating the value that's how we're creating the sum.
// just taking our sum and we're dividing up by the length.


// what the reduce function does, so when you pass in a function to reduce it expects this kind of setup where you're 
// passing in the first argument is what is called the accumulator, so what it does is it accumulates the value.

// arr.reduce
//  reduce is a reserved word so reduce is a function that is available to the array class inside of JavaScript so 
// any array you can call reduce on.

// length function -- want to divide the array sum by the length. So I can do that by just saying sum which is our 
//variable divided by the array length. And as you can see right here we have our entire working program.

// reduced does is iterates through the entire collection

// reducer takes two arrguments
// reduce is a reserved word its argument is a function
//  all you have to do for reduce is you pass it in a function

// reduce is not limited to doing sums 
// accumulator (is the plus sign) here, this total, is taking the current value and then it can now multiplying it.

//starting with a total  so it doesn't give us an error
// total, when you start off, is zero 
// then from there take that current value.
//this case  passing this in the current value is 1
// getAverage so that's the first time
//Now we add 1 + 0, well we know 1 + 0 = 1 So that's now the current value of total.

//reduced does is iterates through the entire collection
// keeps track of that total so now the total is going to be 1 and that current value because we're now iterating through
//current value is now 2 which means that the return value is going to be 2 + 1, so it's going to be 3. 
//next time it's going to be total which means our new total is going to be 3 because that's what the return value was 
//it's accumulating and then the current value is now going to be 3. And as you may guess it's going to tally up 3 + 3 = 6 
//and then it's going to continue on from there.
//going to keep track of that value it's going to loop through and it's going to keep on adding on

//const reducer =
//store entire functions and variables and then pass them in just like we're doing right here on line 4.

