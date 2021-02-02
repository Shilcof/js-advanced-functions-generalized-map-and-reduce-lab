// Add your functions here

function map(array, operation) {
    const output = array.slice();
    for (let i = 0; i < array.length; i++) {
        output[i] = operation(output[i]);
    };
    return output;
}

// my own map-like methods
// map returns an array with all values made negative
//     1) transforms correctly
//     map returns an array with the original values
//     2) transforms correctly
//     map returns an array with the original values multiplied by 2
//     3) transforms correctly
//     map returns an array with the original values squared
//     4) transforms correctly

function reduce(array, operation, init) {
    let start = (!!init) ? init : array[0]
    let i = (!!init) ? 0 : 1
    
    for (; i < array.length; i++) {
        start = operation(array[i], start);
    };
    return start;
}

// my own reduce-like methods
// reduce returns a running total when not given a starting point
//     5) reduces correctly
// reduce returns a running total when given a starting point
//     6) reduces correctly
// reduce returns true when all values are true
//     7) reduces correctly
// reduce returns false when any value is false
//     8) reduces correctly
// reduce returns true when a true value is present
//     9) reduces correctly
// reduce returns false when no true value is present
//     10) reduces correctly