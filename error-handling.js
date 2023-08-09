// 1.
function sum(array) {
    let sum = 0;
    try {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
    } catch (error) {
        throw new TypeError("Not a valid array");
    }
    return sum;
}

try {
    let res = sum(null);
    console.log(res);
} catch (error) {
    console.error(error.name + ": " + error.message);
}

// 2.
function sayName(name) {
    if (typeof name !== "string") {
        throw new TypeError("Invalid name! Must be a string!");
    }
    console.log(name);
}
// tests
try {
    sayName("Alex");
} catch (error) {
    console.error(error.name + ": " + error.message);
}

try {
    sayName(1);
} catch (error) {
    console.error(error.name + ": " + error.message);
}

// 3.
function greet(greeting) {
    if (!greeting) {
        throw new Error("There was no greeting given.");
    }

    console.log(greeting);
}

try {
    greet();
} catch (error) {
    console.log("Hello World!");
}