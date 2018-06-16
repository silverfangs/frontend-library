---
templateKey: blog-post
title: Functional Programming
date: '2018-06-15T14:33:07+08:00'
description: Last update on 06/15/2018
tags:
  - Functional programming
  - immutable
---
## What is it functional programming and quirks?
- Pure functions
- Function composition (process of combining two or more functions in order to produce a new function or perform some computation)
- Avoid shared state
- Avoid mutating state
- Avoid side effects

**Contrast with object oriented programming**: where application state is usually shared and colocated with methods in objects.

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

References:
- [An introduction to functional programming in JavaScript](https://goo.gl/FcRkNk)
- [Master the JavaScript Interview: What is Functional Programming?](https://goo.gl/S6Ydia)
