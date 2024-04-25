<div id="index"></div>

<sub>[<<Back to README](README.md)</sub>

# 7. What is the (this) keyword  in JavaScript? 

In JavaScript, the **this** keyword always refers to an **object**. 

But the object it refers to **will vary depending on how and where this is being called(invoked)**.

And there's a few different ways in which you can use the this keyword, so let's see the most common cases and how it behaves in each of them.

<br>

![This keyword by W3 Schools](/images/this%20keyword.png)
<br>

The **this** keyword refers to different objects depending on how it is used. By W3 schools.
<br>

```Note
NOTE: (this) is not a variable. It's a keyword, so its value can't be changed or reassigned.
```
<br>


# How to Call this By Itself

If we call this by itself, meaning not within a function, object, or whatever, it will refer to the global window object.

If you print it like:
```js
 console.log('this alone', this); 
```
 
You'll get this in your console: 
[object Window]. See the screenshot of the browser´s console  bellow:

![Expanded result of calling this by itself](images/screenshot%20this%20itself%20return%20window.png)

# How to Call (this) in an Object Method
But if we call this within an object method, like in the following example:

```Js
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log('this in object method', person.getThis());
```
We'll see that this no longer refers to the object itself:

![Result of calling this within an object method](images/screenshot%20this%20person.getThis.png)
<br>

Screenshot of result of **calling** **this** **within an object method** in the browser´s console.  
<br>

And given this, we can use this to **access other properties and methods** from the same object:

```jS
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    getFullName : function() {
      return this.firstName + ' ' + this.lastName;
    }
};

console.log('this in object method', person.getFullName());
```
![Result of calling this accessing getFullNAme method](images/screenshot%20this%20person.getFullName().png)
<br>
Result of calling this accessing getFullNAme method.

<br>

<br>

# How to Call this in a Function

If we call this within a function like in the following example:
```JS
function test() {
    console.log('this in a function', this);
}

test()
```
<br>

This will now refer again to the general window object, and we'll get this in our console: [object Window] as in the image bellow:

![Result of calling this in a function ](images/screenshot%20this%20in%20a%20fuction.png)

![Result of calling this accessing getFullNAme method](images/screenshot%20this%20person.getFullName().png)
<br>
Result of calling this in a function.

<br>


Inside a function, **the value of this depends on how the function is called**. Think about this as a hidden parameter of a function ( just like the parameters declared in the function definition), this is a binding that the language creates for you when the function body is evaluated.

For a **regular function**, the **value of this is the object that the function is accessed on.** In other words, **if the function call is in the form obj.f()**, then **this refers to obj.**

For example:

```JS
function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
```
<br>

Note how the **function getThis() is the same**, but based on how it's invoked, **the value of this is different**. This is analogous to how function parameters work.

**The value of this** is not the object that has the function as an own property, but **the object that is used to call the function.**

<br>

![screenshot of call this in a function](images/sreenshot%20call%20this%20in%20a%20fuction%20codepen%20console.png)
<br>

Screenshot of calling **this** **in a function** using CodePen console.

<br>

<br>


# Summary

In summary, in JavaScript, the **this** keyword refers to the context where a piece of code, such as a function's body, is supposed to run. 

Most typically, it is used in object methods, where **this** refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

In most cases, the value of **this** is determined at run time and is based on the execution context the function is in at the time of invocation.

Therefore, **this** keyword can be used in many different contexts or scopes:

* **Global context:** If **this** is used **outside** of any function, it refers to the global object.

* **Object scope**: If **this** is used **within a method of an object**, it refers to the very object to which the method belongs.

* **Functional Context**: If a **function** has a ‘this’ reference inside it,  this refers to an object, not the function itself( which is generally the most common mistake programmers make ). To determine which object the ‘this’ points to depends on how the function was called in the first place. 

If called directly, **this** can reference the global object, but if used in a function inside an object, it can reference the object that contains that function.

You can check these two visual **diagrams** of **"this" keyword different uses, bellow:**

![alt](images/this%20keyword%20explain.png)
<br>
Source: freecodecamp.org

![alt](images/this%20keyword%20explain1.png)

<br>


# References

* [mdn web docs: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

* [freecodecamp: ¿Qué significa "this" en JavaScript? La palabra clave "this" explicada con ejemplos](https://www.freecodecamp.org/espanol/news/que-significa-this-en-javascript-la-palabra-clave-this-explicada-con-ejemplos/)

* [freecodecamp: How to Use the "this" Keyword in JavaScript](https://www.freecodecamp.org/news/the-this-keyword-in-javascript/#this-in-an-object-method)

* [W3 Schools: this](https://www.w3schools.com/js/js_this.asp)

* [Object methods, "this"](https://javascript.info/object-methods#this-in-methods)

* [DevCamp:guide-introduction-this-keyword-javascript]( https://basque.devcamp.com/pt-full-stack-development-javascript-python-react/guide/introduction-this-keyword-javascript)

<br>

[ <span style="color: #blue; font-size: 30px;">↑</span>
Back to Top](#index)

<br>

<sub>[<<Back to README](README.md)</sub>





