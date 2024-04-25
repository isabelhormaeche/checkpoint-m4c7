<div id="index"></div>

<sub>[<<Back to README](README.md)</sub>

# 2. What are some JS data types?

JavaScript is a "**dynamically typed language"**, which means that, unlike some other languages, you **don't need to specify what data type a variable will contain** (numbers, strings, arrays, etc.). A variable can hold a value of any data type and **can be changed to hold a different type at any time**.


For example, if you declare a variable and give it a value enclosed in quotes, the browser treats the variable as a **string**:

```JS
let myString = "Hello";
```
**ATTENTION**!! 
    Even if the value enclosed in quotes is just digits, it is still a string — not a number — so be careful.

```JS
let myNumber = "500"; // oops, this is still a string
typeof myNumber;

myNumber = 500; // much better — now this is a number
typeof myNumber;
```
Try entering the four lines above into your console one by one, and see what the results are. 

You'll notice that we are using a special operator called `typeof` — this **returns the data type of the variable** you type after it. 

The first time it is called, it should return string, as at that point the myNumber variable contains a string, '500'. 

Have a look and see what it returns the second time you call it.

![Console screenshot](images/screenshot%20dynamic%20typing.png)

<br>

**Some Data Type examples:**

<br>

```Javascript
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
```

<br>

In JavaScript, we have both:

- **Primitive** data types: representing simple values like strings, numbers, and booleans.

- **Non-Primitive** data Types: Also known as reference types, these include objects, arrays, and other complex structures that can hold multiple values.


Let´s see in more detail the **data types** available in JavaScript that we can **store in variables**:

**Numbers**

Represents both **integer** and **floating-point numbers.**
You can store numbers in variables, either whole numbers like 30 (also called integers) or decimal numbers like 2.456 (also called floats or floating point numbers). **You don't need to declare variable types** in JavaScript, unlike some other programming languages. **When you give a variable a number value, you don't include quotes ( " )**:

```JS
// Number
var mynumber = 500;
let myNumber = 500;

let myAge = 12;
```

**BigInt**
Introduced in ES2020 to represent integers that are **too large** for the Number type to handle.


**Strings**
A unique and **immutable** primitive data type introduced in ES6, useful for creating unique object keys.

Strings are pieces of text. It **can include letters, digits, and symbols** within quotes.

When you give a variable a string value, you need to **wrap it in single (' ') or double (" ") quote marks**; otherwise, JavaScript tries to interpret it as another variable name.

```Javascript
let greetings = "Good morning, how are you today?";
```

**NOTE**: Both double cuotes `" "` or single cuotes `' '`  will work the same way.
```JS
var name = "Isabel";
var nameTwo = 'Isabel';

console.log(name); // Isabel
console.log(nameTwo); // Isabel
```
<br>


**Booleans** <br>

Booleans are true/false values — they can have two values, **true** or **false.** These are generally used to test a condition, after which, code is run as appropriate. So for example, a simple case would be:


```Javascript
let iAmAlive = true;
```
Whereas in reality it would be used more like this:


```JS
let test = 6 < 3;
```
```JS
// BOOLEAN -> only two options: true or false
var truthy = true;
var notTruthy = false;

console.log(truthy); // true
console.log(notTruthy); // false
```
<br>

**Null**

Denotes a **null value**, implying that the variable deliberately **points to no object**. Null means that it is **defined**. 
It does **have access to that variable** but it just is **empty**.
So **null means empty.** It's the absence of any kind of value.

For example: You had a registration page and you had some optional fields such as a Twitter user name. If an user decided not to fill that in then, that value for that Twitter user name would just be null. It's our way of understanding that that variable or that value could be there. But in this case, it's just empty.
```JS
// NULL -> one possible value = null -> null = empty

//var nully = null;
//console.log(nully); //output-> null

age = null;
// null

typeof age;
// "object"
```

**Undefined**

Indicates a variable that **has been declared** but has **not yet been assigned a value.** **It has not been defined**.

It's **not empty.** There literally is **no value** that yet it needs to be assigned later.

It's what you get when something is simply declared and it's not given a value. It´s **useful for debugging,** to check if something has been defined, but **null is used to say that something is empty**. <----ATTENTION!!
```JS
var notDefined;  /* we're not going to set it equal to anything. We don´t set it equal to undefined because by default when you simply declare a variable javascript is going to set it equal to undefined. */

console.log(notDefined); // undefined

//--------------------another example:---------------------

var age;
// undefined

typeof age;
// "undefined"
```
<br>

**Symbol**

New in ECMA 6. It is used to work with objects.
They're kind of similar to strings except they **can not be changed**. There **can only be one of them**. And so they're the closest thing that Javascript has to what's called an immutable type object. So when you create it then it is what it is you **cannot change that value**.
```JS
var mySym = Symbol("foo");

console.log(mySym); // Symbol(foo)
```
<br>


**Objects**

In programming, an object is a structure of code that models a real-life object. 

You can have a simple object that represents a box and contains information about its width, length, and height, or you could have an object that represents a person, and contains data about their name, height, weight, what language they speak, how to say hello to them, and more.

Objects **are variables** too. But objects **can contain many values.**

![alt](images/JS%20objects.png)
Source: W3school
<br>

This code assigns many values (Fiat, 500, white) to a variable named car:
```JS
const car = {type:"Fiat", model:"500", color:"white"};
```

Used for storing collections of data and more complex entities. Objects **can contain properties and methods.**

**Syntax**:

In JavaScript objects, we use **curly braces**, the values are written as **`name:value`** pairs (name and value separated by a colon **`,`**) and are called **`properties`**.

**NOTE**: In JavaScript, the use of semicolons **`;`** at the end of statements is **optional**, but it is considered a good practice to include them.


```Js
let dog = { name: "Spot", breed: "Dalmatian" };

// To retrieve the information stored in the object, you can use the following syntax:

dog.name;  // output: "Spot"
```
<br>
We can define an object, parse values from an object,  work with nested objects, and add new key/value pairs on the fly.

In summary it gives you an ability to query data and to set data and also to create a blueprint for your object.
<br>

**Query data:**

```Js
var user = { name: 'Kristine' }
console.log(user);
```
```JS
// output [object Object] 
{
  "name": "Kristine"
}
```
```JS
var user = { name: 'Kristine' }
console.log(user.name);  //To retrieve the information stored in the object
//output
// "Kristine"
```
This gives us the ability to call the key inside the object and reference points inside of the object. And we could **change the object value**. For example:

```JS
var user = { name: 'Kristine' }
user.name = 'Jordan';
console.log(user.name);
// output:
// "Jordan"
```

**Spaces and line breaks are not important.** An object definition **can span multiple lines**.

We can **add** a new key-value pair:

```JS
var user = {
  name: 'Kristine',
  age: 12,
  city: 'Scottsdale',
  grades: {
    math: 90,
    science: 80,
    languageArts: 100
  }
}

user.age = 13;    // change the value
user.grades.coding = 95; //to add a new key-value pair inside of grades.
```
<br>

**Arrays**

An array is a **single object** that contains **multiple values** enclosed in **square brackets** and separated by **commas**.

```JS
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];

// Once these arrays are defined, you can access each value by their location within the array
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40

```
The square brackets specify an **index value** corresponding to the **position of the value** you want returned. 

**NOTE**: Arrays in JavaScript are zero-indexed: the first element is at index 0.
<br>

**How you can check for data types in JavaScript ( typeof function)**

Checking for a component's data type in JavaScript can be very important since the **data type determines the types of functions that can be passed.**

You need to know what types of functions you can call on them.

If you use the regular javascript console in the browser's developer tools. You can use  the `typeof` function, you can pass something to it. 

For example: We can pass 12, run it and you can see that it tells us that 12 is a type of number. 


```JS
typeof 12;
// "number"

typeof 'Astros';
// "string"

typeof true;
// "boolean"

typeof { name: "Kristine" };
// "object"

var age;
// undefined --> no value assigned yet

typeof age;
// "undefined"


age = null;
// null

typeof age;
// "object" --> empty
```

<br>

**Type Casting**

How to **convert** data from various data types **into different data types** in JavaScript. You may need to change from one datatype into another one. 

Let’s see some options with the aid of the following **examples**:

```JS
"100" + 42; // "10042"
42 + "100"; // "42100"

/*JS doen´t know if we´re trying to append the number 42 onto the string of 100 or are we trying to perform some type of computation on it. */

//But with "-" it´s OK:
"100" - 42; // 58

100 + null; // 100   JS was able to see null, and instead of throwing an error it converted null to be zero


//CONVERT NUMBER INTO STRING:

var ageOne = 12;
//Two ways to do it:
String(ageOne); // '12'  change ageOne to a string
ageOne.toString(); // '12'



//CONVERT STRINGS INTO NUMBERS-> Several ways:

var ageTwo = '33';
Number(ageTwo); // 33


var ageThree = "33.5"
parseInt(ageThree); // 33 (integer)
parseFloat(ageThree); // return 33.5 as a float which means a decimal point.
//console.log(Number(ageThree)); // 33.5
//console.log(parseFloat(numberTwo)); // 33.5

//Example check with typeof:
console.log(typeof agethree); // string
console.log(+ agethree); // 33.5 -> converts the string into a number
console.log(typeof + ageThree); // number



// it returns the phone number as an integer.
parseInt('5555555555 is my phone number'); // 5555555555

//IMPORTANT!! --> We need to have something that can be converted into a number at the beggining of the string
parseInt('foo 5555555555 is my phone number'); // NaN (not a number) ->it can't parse this foo into an integer


//Unary operator
var ageTwo = '33';
+ ageTwo; // 33

var foo = + ageTwo;
// undefined
// then if we return this, foo is 33
foo;
// 33


Number("100") + 42; // 142
//you're unsure about both of them, then:
Number('100') + Number(42);
// 142

```
<br>

In summary, if you're not sure what kind of data you're going to get but you want to be able to be confident about it. 

You can put a *number* around it or use one of the other types of systems like the *unary operator* or *parseInt* or *parseFloat* then you can be confident that your computation is going to work.


**How we can convert booleans**

All the computers, every server, every system in the whole world, uses the actual ones and zeros, it uses **binary code.**

We just happen to be writing in languages we can use words and symbols in, but eventually it all has to come down to 1 or 0. 

```JS
Number(true); // 1
Number(false); // 0

//Same way but in CodePen:
console.log(Number(true)); // 1
console.log(Number(false)); // 0
```
Real example: 

Say that you have a function and it communicates with some other API and that **API doesn't know what** **true or false is they can't interpret that**. **But it can interpret 1 and 0** and that's how it should be represented. You can wrap True or False into it. Return it and everything works. That is how you can use **typecasting** in javascript.




<br>




# References
* In the w3 schools website, you can practice with many interactive examples:
[w3schools: JavaScript Data type Examples](https://www.w3schools.com/js/js_datatypes.asp)

* [DevCamp: Guide to JavaScript Objects](
https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/guide-javascript-objects)

* [DevCamp: How to Perform Type Casting in JavaScript](https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/how-to-perform-type-casting-javascript)

 * [This DevCamp´s repository: stores the SOURCE CODE for each lesson of Devcamp's JavaScript Programming Course. DATA TYPES](https://github.com/rails-camp/javascript-programming/blob/master/section_b_09_data_types.js)


[ <span style="color: #blue; font-size: 30px;">↑</span>
Back to Top](#index)

<sub>[<<Back to README](README.md)</sub>