<div id="index"></div>

<sub>[<<Back to README](README.md)</sub>

# What is a Ternary Operator?

It´s is one of the multiple different types of [conditionals](04_conditionals.md) in JavaScript.

Sometimes, we need to assign a variable depending on a condition.

For instance:

```JS
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
```

The ternary operator **lets us do that in a shorter and simpler way.** It´s a "shortcut" way to write an *if else* conditional.

The operator is represented by a question mark **(?).** Sometimes it’s called **“ternary”**, because the operator has three operands:
- a **condition**, 
- a **value1** to be returned if the condition is **true**,
- and a **value2** to be returned if the condition is **false**.

It evaluates the condition and returns one of the two specified values based on whether the condition is true or false.


Its syntax is quite simple and **allows you to write a conditional block on a single line**.

**Syntax:**
```JS
let result = condition ? value1 : value2;
```

The condition is evaluated: if it is truthy then value1 is returned, otherwise – value2.


**For example:**
```Js
let accessAllowed = (age > 18) ? true : false;
```

Note: Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >.


![Ternary operator by DevCamp](images/ternary%20operator%20by%20DevCamp.png)
Ternary operator by DevCamp.

Another example:

```Js
function ageVerification(age) {
  // if (age > 25) {
  //   console.log('can rent a car');
  // } else {
  //   console.log("can't rent a car");
  // }

  return age > 25 ? "can rent a car" : "can't rent a car";
}

ageVerification(30); //can rent a car
ageVerification(10); //can´t rent a car
```


One more example:

```JS
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
```

Now using the conditional operator '?':
```JS
let result = (a + b < 4) ? 'Below' : 'Over';
```
(The **if** is replaced by the question mark **(?)** and The **else** is replaced by the colon **(:)** 
)

<br>


**Multiple (?) ternary operators**

![Screenshot DevCamp example of MULTIPLE Ternary Operator](images/screenshot%20DevCamp%20example%20of%20Ternary%20operator.png)
[Screenshot from DevCamp´s example of MULTIPLE Ternary Operator](https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/overview-javascript-ternary-operator)

<br>


A sequence of question mark operators (?) can return a value that depends on **more than one condition**.

For instance, here we have **3 expressions or values**:
```JS
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
```

Here is how this looks using **if..else** instead:
```Js
if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}
```
Let´s explain the above example:

- The first question mark (?) checks whether age < 3.
- If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon **“:”**, checking age < 18.
- If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon **“:”**, checking age < 100.
- If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon **“:”**, returning 'What an unusual age!'.

In summary, the **ternary operator** is a **conditional operator** that takes three operands: a **condition**, a value to be returned if the condition is **true**, and a value to be returned if the condition is **false**. It evaluates the condition and returns one of the two specified values based on whether the condition is true or false.

The ternary operator allows for concise decision-making in code.

<br>


# References

* [mdn web docs:Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
  
* [Ternary Operator in Programming - GeeksforGeeks](https://www.geeksforgeeks.org/ternary-operator-in-programming/)
  
* https://www.deleonnet.com/blog/javascript/if-else

* [DevCamp: Ternary operator](https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/overview-javascript-ternary-operator)

* [Javascript.Info: Conditional branching: if, '?'](https://javascript.info/ifelse#the-if-statement)
  
<br>

[ <span style="color: #blue; font-size: 30px;">↑</span>
Back to Top](#index)
<br>

<sub>[<<Back to README](README.md)</sub>