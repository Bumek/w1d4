// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

// refactored
function findWaldo(arr, found) {
  
    arr.forEach(function(name, i) {
        if (name == "Waldo") { found(i)}
    });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


// Same code as above with arrow functions

function findWaldo(arr, found) {
    arr.forEach((name, i) => { if (name == "Waldo") found(i); });
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], i => console.log("Found Waldo at index " + i + "!"));
