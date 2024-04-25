<div id="index"></div>

<sub>[<<Back to README](README.md)</sub>

# 4. What is a conditional?

In JavaScript, conditionals allow us to make decisions and execute different actions based on specific conditions.

Conditional statements **control behavior** in JavaScript and **determine whether or not pieces of code can run**.

![conditional staments image](images/conditional%20statements%20by%20Sessionstack%20Blog.webp)
By SessionStack Blog

<br>


- [4. What is a conditional?](#4-what-is-a-conditional)
- [4.1. Syntax](#41-syntax)
  - [Comparison operators](#comparison-operators)
- [4.2. Types](#42-types)
  - [The "if" statement](#the-if-statement)
  - [The “else” clause](#the-else-clause)
  - [Several conditions: “else if”](#several-conditions-else-if)
  - [Switch Statements](#switch-statements)
- [4.3. Uses of JS conditionals](#43-uses-of-js-conditionals)
  - [Logical AND operator](#logical-and-operator)
- [4.4. References](#44-references)

<br>


# 4.1. Syntax

How to write an if else in JavaScript?

To write a conditional in JavaScript, you must start with the reserved word **`if`** followed by the condition to be evaluated within **parentheses**. JavaScript uses curly  braces to open and close lines of code ( `{ }` ); You should also consider that **conditions evaluate to true by default** unless you indicate otherwise.

If you want to evaluate a second contrary condition, use **`else`** but do not indicate the condition inside parentheses.

Example

```JS
if(true){
  console.log("Condición evaluada en true");
}else{
  console.log("Se imprimirá este mensaje si la condición es false");
}
```


## Comparison operators


Thery are placed inside of your conditionals and the left side and the right side these are both called operands.

A comparison operator **compares its operands and returns a logical value based on whether the comparison is true**. The operands can be numerical, string, logical, or object values.

* **===** and **!==** — test if one value is identical to, or not identical to, another.

* **<** and **>** — test if one value is less than or greater than another.

* **<=** and **>=** — test if one value is less than or equal to, or greater than or equal to, another.


Example:

```JS
var age = 10;
var ageTwo = '12';

if (age === ageTwo) {
  console.log('They are equal');
}

if (age !== ageTwo) {
  console.log('Not equal');
}

if (age >= 25) {
  console.log('Old enough to rent a car');
}

if (age <= 10) {
  console.log('You can eat from the kid menu');
}
```
<br>

**NOTE**: You can also learn about another coparison operator, the [**logical AND operator (&&) in the *Uses section* here.](#43-uses-of-js-conditionals)

<br>


# 4.2. Types

Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.

There are multiple different types of conditionals in JavaScript that we can use:

  * **`if`** , **`else`** and **`else if`** statements  
  * the (**`?`**) **Ternary (conditional) Operator**, that’s also called a “question mark” operator. [Check here to learn about it.](05_ternary_operator.md)
  * And we can also use the **Switch Statements**.
  * We also have `For loop` and `While loop`. We´ll see them later in the course.

<br>
 

The most common type of conditional statement you'll use in JavaScript is: **if...else statement.**

## The "if" statement
As the name suggests, a piece of data must meet a condition (is true) to execute certain code.

**Basic if...else syntax:**

```JS
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}
```



For example: 
```JS
let year = prompt('In which year did an astronaut first set foot on the moon?', '');

if (year == 1969) alert( 'You are right!' );
```
Here the if(...) statement evaluates the condition in parentheses (year == 1969) and, if the result is true, executes a block of code (alert ( "You are right!"))


As mentioned earlier it is recommended to wrapp your code block with curly braces `{}` every time you use an `if` statement, even if there is only one statement to execute. Doing so improves readability.

```JS

if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}

```
<br>

**Boolean conversion**

The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

The conversion rules are:

A number **0, an empty string "", null, undefined, and NaN** all become **false**. Because of that they are called **“falsy”** values.

Other values become **true**, so they are called “truthy”.



```JS
// The code under this condition would never execute:

if (0) { // 0 is falsy
  ...
}

// and inside this condition – it always will:

if (1) { // 1 is truthy
  ...
}
```

Any value that is not false, undefined, null, 0, NaN, or an empty string ('') actually returns true when tested as a conditional statement, therefore **you can use a variable name on its own to test whether it is true**, **or even that it exists** (that is, it is not undefined.) 

So for example:

```JS
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```




## The “else” clause
The if statement may contain an optional **else** block. It executes when the condition is falsy. 

For example:
```JS
let year = prompt('In which year did an astronaut first set foot on the moon?', '');

if (year == 1969) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 1969
}
```
## Several conditions: “else if”
Sometimes, we’d like to test several variants of a condition. The **else if** clause lets us do that. This specifies a new test if the first condition is false.

For example:
```JS
let year = prompt('In which year did an astronaut first set foot on the moon?', '');

if (year < 1969) {
  alert( 'Too early...' );
} else if (year > 1969) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
```
In the code above, JavaScript first checks year < 1969. If that is falsy, it goes to the next condition year > 1969. If that is also falsy, it shows the last alert.

There can be more **else if** blocks. The final else is optional.

Another example, this time, with several **if.. else if** type of conditional or **Compund conditionals**:

We set up a full range of scenarios. It will check if, you are old enough to eat from the kids' menu, if you're old enough to drive, and if you're old enough to rent a car. Then set up different types of age **ranges**.

```Js
var age = 30;

if (age <= 10) {
  console.log("You can eat from the kid's menu");
  console.log("You are not old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 16 && age < 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are old enough to rent a car");
} else if (age >= 11 && age <= 15) {
  console.log("You can eat from the kid's menu");
  console.log("You are not old enough to drive");
  console.log("You are not old enough to rent a car");
}
```






In summary **if...else** statements are mainly good for cases where you've got a couple of choices, and each one requires a reasonable amount of code to be run, and/or the conditions are complex (for example, multiple logical operators).

However for cases where you just want to set a variable to a certain choice of value or print out a particular statement depending on a condition (ONLY ONE), the syntax can be a bit cumbersome, especially if you've got a large number of choices.

In such a case, switch statements are a better option.


## Switch Statements

They take **a single expression/value as an input**, and then look through several choices until they find one that matches that value, executing the corresponding code that goes along with it.

Syntax:
```JS
switch (value) {
  case option1:
    // Code for option1
    break;
  case option2:
    // Code for option2
    break;
  // ... more cases ...
  default:
    // Code if none of the cases match
}
```
Here we've got:

* The keyword **`switch`**, followed by a set of parentheses.
* An expression or **value** inside the parentheses.
* The keyword **`case`**, followed by a choice that the expression/value could be, followed by a colon(:).
* Some code to run if the choice matches the expression.
* A **break** statement, followed by a semicolon. If the previous choice matches the expression/value, the browser stops executing the code block here, and moves on to any code that appears below the switch statement.
* As many other cases..... as you like.
* The keyword **`default`**, followed by exactly the same code pattern as one of the cases (option 1, option2), except that default does not have a choice after it, and you don't need the break statement. It runs if none of the choices match.

```Note
NOTE: You don't have to include the default section — you can safely omit it if there is no chance that the expression could end up equaling an unknown value. If there is a chance of this, however, you need to include it to handle unknown cases.
```
<br>

Let´s see an example where we have multiple conditions to check against a single value (dayOfWeek:
)
```JS
const dayOfWeek = "Monday";
switch (dayOfWeek) {
  case "Monday":
    console.log("It's the start of the week!");
    break;
  case "Friday":
    console.log("Weekend is almost here!");
    break;
  default:
    console.log("It's a regular day.");
}
```


Now let´s see a real example with both the JavaScript script and HTML codes:

![Simple Switch example](images/screenshot%20simple%20switch%20sample%20.png)


Screenshot of a simple **Switch example** from [mdn web docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements). You can see it [running live here.]( https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html)


Here is the code of the above example:
```HTML

<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Simple switch example</title>
  </head>
  <body>
    <label for="weather">Select the weather type today: </label>
    <select id="weather">
      <option value="">--Make a choice--</option>
      <option value="sunny">Sunny</option>
      <option value="rainy">Rainy</option>
      <option value="snowing">Snowing</option>
      <option value="overcast">Overcast</option>
    </select>

    <p></p>

    <script>
      const select = document.querySelector('select');
      const para = document.querySelector('p');

      select.onchange = setWeather;

      function setWeather() {
        const choice = select.value;

        switch(choice) {
          case 'sunny':
            para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
            break;
          case 'rainy':
            para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
            break;
          case 'snowing':
            para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
            break;
          case 'overcast':
            para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
            break;
          default:
            para.textContent = '';
        }
      }
    </script>
  </body>
</html>
```


# 4.3. Uses of JS conditionals
<br>

![conditional diagram](images/contional%20diagram%20by%20guru99.com.webp)
<br>

Conditionals help us make decisions in our code, whether it’s displaying different graphics in a weather app or handling user interactions in a game.

JavaScript conditionals play a crucial role in various real-life scenarios. Let's explore some real-life examples:

1. **User Authentication**:
   - When a user logs in, conditionals are used to verify their credentials. If the username and password match, they gain access; otherwise, they're denied.
   - Example:
     ```javascript
     if (username === enteredUsername && password === enteredPassword) {
       // Grant access
     } else {
       // Show an error message
     }
     
     ```

2. **E-commerce Websites**:
   - Conditionals determine how products are displayed based on filters (e.g., price range, category, availability).
   - Example:
     ```javascript
     if (selectedCategory === "Electronics" && priceRange === "Under $100") {
       // Display relevant electronics within the specified price range
     }
     ```

3. **Interactive Forms**:
   - When users submit forms, conditionals validate input fields (e.g., email format, required fields).
   - Example:
     ```javascript
     if (emailInput.value.includes("@") && passwordInput.value.length >= 8) {
       // Proceed with form submission
     } else {
       // Show error messages
     }
     ```

4. **Game Development**:
   - In games, conditionals control player interactions, enemy behavior, and game state transitions.
   - Example:
     ```javascript
     if (playerHealth <= 0) {
       gameOver();
     } else {
       // Continue gameplay
     }
     ```

5. **Responsive Web Design**:
   - Conditionals adjust layouts based on screen size (e.g., mobile vs. desktop).
   - Example (CSS media query):
     ```css
     @media screen and (max-width: 600px) {
       /* Apply mobile-specific styles */
     }
     ```

6. **Dynamic Content Loading**:
   - Conditionals fetch data from APIs or databases and display relevant content.
   - Example (fetching weather data):
     ```javascript
     if (isSunny) {
       displaySunnyWeather();
     } else {
       displayRainyWeather();
     }
     ```

7. **Automated Systems**:
   - Conditionals control robotic arms, traffic lights, and smart home devices.
   - Example:
     ```javascript
     if (motionDetected) {
       turnOnSecurityCamera();
     } else {
       turnOffSecurityCamera();
     }
     ```

<br>

Conditionals empower developers to create dynamic, responsive, and personalized experiences across various domains.

<br>

**NOTE**: The logical AND operator `&&` has been used in several examples above. Let´s see what it is and how it works.


## Logical AND operator

In JavaScript is used to evaluate multiple conditions within a conditional statement.

1. **Basic Syntax**:
   - The **`&&`** operator combines two or more conditions.
   - It returns `true` if **all** the conditions are true; otherwise, it returns `false`.
   - Example:
     ```javascript
     if (condition1 && condition2) {
       // Code to run if both conditions are true
     }
     ```

2. **Truthy and Falsy Values**:
   - JavaScript considers certain values as **truthy** or **falsy**.
   - Truthy values: Any value that can be converted to `true`.
   - Falsy values: Any value that can be converted to `false`.
   - Examples of falsy values: `false`, `null`, `NaN`, `0`, empty string (`""`), and `undefined`.

3. **Short-Circuit Evaluation**:
   - The `&&` operator is a **short-circuit operator**.
   - It stops evaluating conditions as soon as it encounters the first **falsy** value.
   - Example:
     ```javascript
     const result = (false && someFunction()); // someFunction() is not called
     ```

4. **Examples**:
   - Using `&&` in an `if` statement:
     ```javascript
     const x = 5;
     const y = 3;

     if (x > 2 && y < 4) {
       console.log("Both conditions are true.");
     } else {
       console.log("At least one condition is false.");
     }
     ```

   - Combining multiple conditions:
     ```javascript
     const age = 18;
     const hasLicense = true;

     if (age >= 18 && hasLicense) {
       console.log("You can drive!");
     } else {
       console.log("You cannot drive.");
     }
     ```

<br>

You can learn about some other comparison operators [up here](#comparison-operators).

<br>

# 4.4. References

* [DevCamp: Basic Syntax for Using Conditionals in JavaScript](https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/basic-syntax-using-conditionals-javascript) and [DevCamp: Compound conditionals](https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/compound-conditionals-javascript)

* [Javascript.Info: Conditional branching: if, '?'](https://javascript.info/ifelse#the-if-statement)

* [mdn web docs: Making decisions in your code — conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

* [mdn web docs: Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

* [mdn web docs: Logical AND (&&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)

<br>

[ <span style="color: #blue; font-size: 30px;">↑</span>
Back to Top](#index)

<br>

<sub>[<<Back to README](README.md)</sub>