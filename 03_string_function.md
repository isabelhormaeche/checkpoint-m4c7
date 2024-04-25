<div id="index"></div>

<sub>[<<Back to README](README.md)</sub>

# 3.  Which are the three String functions in JS?
- [3.  Which are the three String functions in JS?](#3--which-are-the-three-string-functions-in-js)
  - [3.1. Length property](#31-length-property)
  - [3.2. Basic String Methods](#32-basic-string-methods)
  - [3.3. Regular expressions](#33-regular-expressions)
  - [3.4. Slice, case, and trim functions](#34-slice-case-and-trim-functions)
  - [3.5. References](#35-references)

Normally, strings like "Rafael Nadal", cannot have methods or properties because they are not objects.

But with JavaScript, methods and properties are also available to strings, because **JavaScript treats strings as objects** **when executing methods and properties.**

```NOTE
NOTE:

All string methods return a new value.

They do not change the original variable.
```
<br>

![Full list of JS methods](images/screenshot%20JS%20methods.png)
![Full list of JS methods1](images/screenshot%20JS%20methods1.png)
Source: W3schools



Essentially a **function allows you to encapsulate behavior**. In this case, we do not need to create the functions, these are **provided in the core javascript library**, so we can simply call them. 

We can have an object and we will **be able** to either **change** it or make certain kinds of **value queries** on it-all kinds of things.

The nice thing that functions allow us to do is to perform a task again and again **without having to repeat any code**.

## 3.1. Length property
For example, the **length** property returns the length of a string:

```JS
var str = 'The quick brown fox jumped over the lazy dog';

str.length(); // VM2349:1 Uncaught TypeError: str.length is not a function

str.length; // 44
```

Here we can see **`.length`** is an **attribute** of the string and **not** a function. Without parentheses at the end.
<br>
<br>


## 3.2. Basic String Methods

In the rest of examples, bellow, all are going to be **functions**. It's going to follow the pattern of having parens **`( )`** at the very end. Sometimes we will also pass an argument to it.

Javascript strings are primitive and **immutable**: All string methods **produces a new string without altering the original string**.


We can do useful operations on strings with **built-in methods**, such as finding the **length** of a text string, **joining** and **splitting** strings, **substituting** one **character** in a string for another, and more.

```Note

IMPORTANT!

The **variables** in javascript when they get passed to functions they **simply pass the value**. They don't pass in, a reference to the variable. In other words, when something changes that or alters it, **it doesn't** go back and **change the original variable**. It simply **returns an updated set of values**. 

We could use it, we could store it in another variable, we could wire that up into another function. Anything like that and that would all work. But we still can be confident that our variable string didn't get changed.
```


There are many string functions but if I have to choose only three, I choose: 

* **slice()**: Extracts a part of a string and returns a new string.
  
* **search()**: Searches a string for a value, or regular expression, and returns the index (position) of the match.
  
* **replace()**: Searches a string for a pattern, and returns a string where the first match is replaced.

But there are a few more functions that you'll potentially use quite often as well. We can learn about them with the aid of some examples:


```JS
var str = 'The quick brown fox jumped over the lazy dog';

// charAt() -> Returns the character at a specified index (position)

//is short for character
str.charAt(2); // "e" finds whatever letter is at the index of two
str.charAt(200); // "" a space


// concat() -> Returns two or more joined strings

str.concat(' again and again'); // "The quick brown fox jumped over the lazy dog again and again"

// combined what we passed as the argument to concat() into and appended it to the end of our string.
//IMPORTANT!  you're NOT changing the string, you're simply changing the value that got returned from running that concat function on it.

// Keep it in a NEW STRING: 
//If you wanted to permanently connect those two then you put that in a new string, your new string now contains those values. But the preexisting string doesn't.
var newStr = str.concat(' again and again');
str; // "The quick brown fox jumped over the lazy dog"


// Other functions:

// INCLUDES() -> Returns if a string contains a specified value
str.includes('quick'); // true

str.startsWith('Foo'); // false

str.endsWith('dog'); // true
str.endsWith('g'); // also true
str.endsWith('lazy dog'); // also true
// NOTE: It doesn't check for words it checks just character by character.
// Useful:  when looking through some raw data files and you want to find out which ones end in a semi-colon.

```
<br>

![JS scn](images/scn-javascript-01.svg)

<br>

## 3.3. Regular expressions

How to integrate **Regular Expressions** in order **to find patterns** in string based data.


```JS
var str = 'The quick brown fox jumped over the lazy dog';

// REPEAT()-----------------------------
//Returns a new string with a number of copies of a string

// I can pass (5) as an argument in the parens in however many times I want to repeat that line.
str.repeat(5); // "The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog"

//this did not alter the original string. This simply returned a value.


// MATCH()----------------------------
// Searches a string for a value, or a regular expression, and returns the matches

//in order to see if something that you're wanting to check against actually is a match or not.
// for example: is required for things such as web form validations (form for an e-mail, form for a phone number).

// take in a regular expression and then it tells you if it was a match.

// Let´s build a regular expression matcher for phone numbers. It's going to compare this pattern and see if match what's contained in the string:
str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // it returns null (no error)

//Another example with a phone number--> now gives us a full object back.
'555-555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // (4) ["555-555-5555", "555-", undefined, "555-", index: 0, input: "555-555-5555"]0: "555-555-5555"1: "555-"2: undefined3: "555-"index: 0input: "555-555-5555"length: 4__proto__: Array(0)



// REPLACE ()-----------------------------
// Searches a string for a pattern, and returns a string where the first match is replaced
// Takes in -> two arguments. The first is what you're searching for (Fox) and the second argument separated by a comma is what you want to replace it with(wolf).

str.replace('fox', 'wolf'); // "The quick brown wolf jumped over the lazy dog"

// You could pass in a regular expression as first argument because there are many times where you don't know what you're looking for. You may be looking just for a pattern.



// SEARCH ()----------------------------------
// Searches a string for a value, or regular expression, and returns the index (position) of the match

//  it looks and when it finds a pattern that it matches with, then it will actually return the index

'555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 0 -> means that it found it at the zeroth index.

// 'foo'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // -1 -> means that it means it didn't find anything.


'Hi, 555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 4 -> means that it found it at the 4th index.



// INDEXES

var str = 'The quick brown fox jumped over the lazy dog';

// indexOf () ---------------------------------------------
// Returns the index (position) of the first occurrence of a value in a string

// looks through the whole string, once it finds the very first instance of what it's searching for it just turns that index
str.indexOf('jumped'); // 20 -> is index 20 but it is the index of the FIRST word that it finds.


// lastIndex() ------------------------------------------------
//it goes through every one it finds, every one of the patterns or the words we're looking for. And then it returns the last one that it found.

str.lastIndexOf('jumped'); // 20


// Example to see lastIndex() it returns the LAST one that it found.
var str2 = str.concat('again and again');
//var str2 = 'The quick brown fox jumped over the lazy dog again and again';

str2.indexOf('again'); // 44

str2.lastIndexOf('again'); // 54
```

<br>


## 3.4. Slice, case, and trim functions

Now we'll walk through the **slice(), trim()** and case (**toUpperCase()** and **toLowerCase()**) functions. We'll also examine how we can chain functions together.


```JS
var str = 'The quick brown fox jumped over the lazy dog';

//SLICE() -----------------------------------------------
// Extracts a part of a string and returns a new string

//Three ways that we can use slice:

//1) gives you all of the items and you're counting from left to right:
//pass an index value: it will return all of the items to the right of that. (if you know that you have some values that you want to skip over and you don't care about them)

str.slice(10); // "brown fox jumped over the lazy dog"

str.charAt(10); //"b" --> to see where that's at. so it grabs the b all the way to the end.


// 2) go backwards-> If you use negatives you're counting backwards

str.slice(-8); // "lazy dog" --> still finding an index and it's returning everything from that index all the way to the right


// 3) grab a slice inside of the string: passing two arguments.

str.slice(4, 10); // "quick "
str.slice(4, 9); // "quick"
//(q is 4, K is 8, space is 9, b is 10)

// TRIM METHOD -----------------------------------------------
// returns a string with removed whitespaces

//to clean up user data
var messyString = '    Hi there    '; // undefined
messyString;   // '    Hi there    '--> If we call messyString you can see that it keeps all those spaces.

messyString.trim(); // "Hi there" 
// Example we can combine them:
str.slice(4, 10).trim(); // "quick" -->it removes the space

```
These functions can be **chained** together.

For example, we can chain the slice() and the trim() function.There will be times where you want to slice something and then call trim to make sure that we have some nice clean values afterwards. 

```JS
str.slice(4, 10); // "quick "

// now we chain slice() and trim() functions:
str.slice(4, 10).trim(); // "quick" -->it removes the space after quick
```

There are some recommended principles that say you **don't really want to ever have more than two to three different items** that are chained together.

Anything above that it can lead to some very challenging bugs to get fixed and it's also very hard to refactor that code and clean it up.


For converting the values to uppercase or lowercase we have: toUpperCase() and toLowerCase().

```JS

// toUpperCase () -> to convert all of the values to uppercase.

str.toUpperCase(); // "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"



// toLowerCase() -> to convert all of the values to lowercasd.
str.toLowerCase(); // "the quick brown fox jumped over the lazy dog"
```


**Note**

The **`at()`**** method** is a new addition to JavaScript.

It allows the use of negative indexes while charAt() do not.

Now you can: 
```JS
// use at() :

let myString = "Hello, World!";
let char = myString.at(-2); // Also returns "d"


// instead of chartAt() and length:

let myString = "Hello, World!";
let char = myString.charAt(myString.length - 2); // Returns "d"

```
<br>

I´m including a link to the **documentation** that shows all of the Srping functions [from W3 Schools: **Full list of String functions**.](https://www.w3schools.com/jsref/jsref_obj_string.asp)

<br>

## 3.5. References

* [Basic String Methods](https://www.w3schools.com/js/js_string_methods.asp)

* [mdn web docs: Useful string methods](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods)


* [mdn: Tasks  to demonstrate an understanding of the JavaScript features](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/tasks/strings/marking.md)

[ <span style="color: #blue; font-size: 30px;">↑</span>
Back to Top](#index)

<br>

<sub>[<<Back to README](README.md)</sub>

