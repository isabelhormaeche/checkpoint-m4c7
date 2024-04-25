<div id="index"></div>

<sub>[<<Back to README](README.md)</sub>

# 6. What is the difference between a function declaration and a function expression?

# 6.1. JavaScript functions

JavaScript functions are reusable blocks of code that perform a specific task, taking some form of input and returning an output.

**Syntax**

To define a function, you must use the function keyword, followed by a name, followed by parentheses ( ). Then you have to write the function logic between curly brackets { }

Here is an example of how to write a function in JavaScript:

```JS

function greetThePlanet() {
       return "Hello world!";
}
​
greetThePlanet();
OUTPUT
"Hello world!"
```

Example:

```JS
function addTwoNumbers(x, y) {
       return x + y;
}
```
<br>

Let’s look at each part of the above example:

* **Function** is the keyword required to actually start declaring a function
“addTwoNumbers” is the function’s name, which is customizable. Function names can contain letters, numbers, and certain special characters, just like variables.

* (x, y) are **parameters**, which are variable names for the inputs the function will accept. These parameters are also referred to as arguments.

* **Return** is the keyword that exits the function and shares an optional value outside.
  
* The code that the function will execute must be put inside of curly brackets **{ }**
  
* Once a JS function is **defined (declared)**, you can use it by referencing its name with parentheses ( ) right after. Note that a function doesn’t have to have parameters - they can simply be left blank in the parentheses.

There can be zero, one, or multiple arguments in a function. In thefirst  example above, the function "greetThePlanet" simply returns the phrase "Hello World!", and it doesn't require any parameters (arguments) in order to do so.

However, **if a function does have parameters, you’ll need to provide values inside the parentheses when using the function**. Otherwise, your code won’t work and you’ll get an error message.

Example:

```JS
function square(number) {
       return number * number;
}
​
square(16);
OUTPUT
256
```
<br>

If your function takes **more than one argument**, simply **separate** them with a **comma** inside of the parentheses. 

Example:

```JS
function addTwoNumbers(x, y) {
       return x + y;
}
```

**Why Use JS Functions?**

Functions are great for efficiency - you can define it one time and then use it multiple times, as needed. You **don't have to rewrite the same or similar code over and over again**. JavaScript functions also allow you to plug in different inputs, or arguments, to get different results, based on the information you are working with. Using JavaScript functions **saves a lot of time and makes your code less cumbersome**.

<br>

# 6.2. Function Expression vs Function Declaration

We must remember that functions are values. They can be assigned, copied or declared in any place of the code.

The main differences between **function declarations** and **function expressions** in JavaScript:

1. **Function Declaration**:

   - A function declaration is created using the `function` keyword.
   - It **must have a function name**.
   - These declarations are **hoisted**, meaning they are loaded/processed before any other code execution.
   - The function is declared as a separate statement in the main code flow.
   - They can be accessed both **before and after** the function definition.
   - Examples:
  
     ```JS
     // Function Declaration
     function sampleDeclaration(paramA, paramB) {
         return paramA + paramB;
     }
     let result = sampleDeclaration(5, 5);
     console.log('Sum=', result); // Output: Sum= 10
       ```
       
       ```JS
       // another function declaration
       function sayHi() {
       alert( "Hello" );
       }
     ```

2. **Function Expression**:
   It allows us to create a new function in the middle of any expression.
   - Similar to a function declaration but **without a function name**.
   - It can be stored in a variable assignment.
   - Function expressions **loaded and executed only when the interpreter reaches that line of code**. They are created dynamicallywhen the execution flow reaches them.
    - The function can be accessed **only after** the function definition.
   - Example:
  
     ```JS
     // Function Expression
     let sampleExpression = function (paramA, paramB) {
         return paramA + paramB;
     };
     let result = sampleExpression(5, 5);
     console.log('Sum: ', result); // Output: Sum: 10
       ```
      ```JS 
       // Another example of Function Expression
       let sayHi = function() {
              alert( "Hello" );
       };
     ```


In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.

So we should use a Function Expression only when a Function Declaration is not fit for the task.

# References

* [Difference between ‘function declaration’ and ‘function expression'](https://www.geeksforgeeks.org/difference-between-function-declaration-and-function-expression-in-javascript/.)

* [When to use a function declaration vs. a function expression](https://www.freecodecamp.org/news/when-to-use-a-function-declarations-vs-a-function-expression-70f15152a0a0/)

* [Function expressions](https://javascript.info/function-expressions)

* [JavaScript.com](https://www.javascript.com/learn/functions)

<br>

[ <span style="color: #blue; font-size: 30px;">↑</span>
Back to Top](#index)
<br>

<sub>[<<Back to README](README.md)</sub>