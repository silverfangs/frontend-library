---
templateKey: blog-post
title: Intro to functional programming in Javascript
date: '2018-06-15T14:33:07+08:00'
description: Last update on 06/15/2018
tags:
  - Functional programming
  - immutable
---
## What is functional programming?
Functional programming is the process of building software by composing pure functions. 
By constructing pure functions, it enables you to avoid any state sharing, mutation of data and any side-effects.
Let me show you what it means.

### Example
- Impure function:
```javascript
// Let's say we have an object x with value equal to 2
let x = {
    val: 2
};

// say we have a function of plus 1
function plus1() {
    return x.val += 1;
}

// and another function of multiply by 2
function mult2() {
    return x.val *= 2;
}

// let's run the functions
plus1();
mult2();

// then let us console log the value
// as you can see the value of object x
// is mutated without putting in 
// any argument
console.log(x.val); // -> 6
```

- Pure function:
```javascript
// then in the next example
// say, we have the same object x with value of 2
let x = {
    val: 2
};

// this time round, we change the value
// if any argument is given
// then we return x plus 1
function plus1(x) {
    return x.val + 1;
}

// then doing the same it will return
// any number given multiply by 2
function mult2(x) {
    return x.val * 2;
}

// then let us run the functions
console.log(plus1(x.val)); // -> 3
console.log(mult2(x.val)); // -> 4

// then let us console log object x
console.log(x.val) // -> 2
```

Nice, as you can see, the value of the object remain unchange. 
So in real world application, functional programming is very suitable paradigm as utility functions for use throughout your codebase. As pure functions always give you the same output, as long as you feed in the same input to it. With this consistency, it makes your code more predictable, less prone to errors and much easier to test.


## Criteria
A pure function must satisfy both of the following properties:
- **Referential transparency**: The function always gives the same return value for the same arguments. This means that the function cannot depend on any mutable state. (you can replace a function call with its resulting value without changing the meaning of the program)
- **Side-effect free**: The function cannot cause any side effects. Side effects may include I/O (e.g., writing to the console or a log file), modifying a mutable object, reassigning a variable, etc.

## Testing
Functional code tends to be more concise, more predictable, and easier to test than imperative or object oriented code

### Example: Function composition
```javascript
// h(x) = x + 1
// number -> number
function h(x) {
  return x + 1;
}

// g(x) = x^2
// number -> number
function g(x) {
  return x * x;
}

// f(x) = convert x to string
// number -> string
function f(x) {
  return x.toString();
}

// y = (f.g.h)(1)
const y = f(g(h(1)));
console.log(y); // '4'
```


## Important takeaway about functional programming
- Pure functions
- Function composition (process of combining two or more functions in order to produce a new function or perform some computation)
- Avoid shared state
- Avoid mutating state
- Avoid side effects

**Contrast with object oriented programming**: where application state is usually shared and colocated with methods in objects.


### References:
- [An introduction to functional programming in JavaScript](https://goo.gl/FcRkNk)
- [Master the JavaScript Interview: What is Functional Programming?](https://goo.gl/S6Ydia)
