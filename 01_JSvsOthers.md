<div id="index"></div>

<sub>[<<Back to README](README.md)</sub>

# 1. What makes Javascript different from any other programming language?

Table of contents:
- [1. What makes Javascript different from any other programming language?](#1-what-makes-javascript-different-from-any-other-programming-language)
- [1.1. What is JavaScript?](#11-what-is-javascript)
- [1.2. JavaScript differs from other programming languages in several ways](#12-javascript-differs-from-other-programming-languages-in-several-ways)
- [1.3. JavaScript compared with Python](#13-javascript-compared-with-python)
- [1.4. How to Add JavaScript in HTML Document?](#14-how-to-add-javascript-in-html-document)
- [1.5. Syntax](#15-syntax)
- [1.6. Why to use JS](#16-why-to-use-js)
- [1.7. Uses of JavaScript](#17-uses-of-javascript)
- [1.8. References](#18-references)

<br>

<figure>
    <img src="images/JavaScript_mascot_bliss.png" 
         alt="Image caption">
    <figcaption>By Mickwellington, via Wikimedia Commons</figcaption>
</figure>



<br>

# 1.1. What is JavaScript?


JavaScript is:
- a multi-paradigm, **dynamic language** with types and operators, standard built-in objects, and methods. 
- Its **syntax** is based on the Java and C languages — many structures from those languages apply to JavaScript as well. 
- JavaScript supports **object-oriented programming** with object prototypes and classes. 
- It also supports **functional programming** since functions are first-class objects that can be easily created via expressions and passed around like any other object.

JavaScript, often abbreviated as **JS**, is a high-level, interpreted scripting language that is widely used in web development. It can be **embedded in HTML and is executed in a user’s web browser**. JavaScript is designed to **add interactivity and dynamic behavior** (e.g., having complex animations, clickable buttons, popup menus, etc.) **to static web pages**, allowing developers to create complex, **interactive web applications**. Making them more engaging and user-friendly. 

Initially designed to create interactive web pages, has since evolved from a simple **client-side** scripting language to a versatile language that now also supports **server-side** programming.

There are some more advanced **server side versions** of JavaScript such as **Node.js**, which allow you to add more functionality to a website than downloading files (such as realtime collaboration between multiple computers). Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide **programmatic control** over them.

Node.js provides a set of features that allow developers to create high-performance, scalable server applications. This includes the ability to handle HTTP requests, access the file system, communicate with databases, and more. While JavaScript runs in the browser, **Node.js extends the capabilities of JavaScript to the server,** opening the door for full-stack development using a single language.

<!-- https://zerotomastery.io/blog/frontend-javascript-interview-questions/ -->

JavaScript has some **special features** that make it powerful:

- It can **‘handle events**’, which means it can respond to things like mouse clicks and keystrokes.

- It can **create objects**, which are like containers that can hold data and perform actions.

- JavaScript is also **flexible** in how it handles data. Unlike some other programming languages, you don't need to specify what kind of data a variable will hold. For example, you could create a variable called "x" and set it equal to a number, a string of text, or even an entire object.

<br>

<br>

# 1.2. JavaScript differs from other programming languages in several ways
<br>

![Screenshot Table comparison Py vs JS](/images/screenshot%20table.png)

<br>

- **Compiled vs Interpreted**
One of the major differences between JavaScript and other programming languages is how they are executed. Most programming languages are compiled (like Java), meaning that the code must be compiled into machine code before it can be run. In contrast, JavaScript is an **interpreted language**, meaning that it does not need to be compiled before it can be run. This feature makes JavaScript easier to work with, as developers don't have to wait for their code to compile before they can test it.

- **Client-Side vs Server-Side**
Another key difference between JavaScript and other programming languages is where they are run. JavaScript is a client-side scripting language, meaning that code written in JavaScript will be **executed on the user's computer** rather than on the server, providing a more interactive user experience. In contrast, server-side languages must be sent from the server to the user's computer before they can be executed.

- **Object-Oriented vs Procedural**
JavaScript is an object-oriented programming language, meaning that code written in JavaScript is made up of **objects that contain data and functions**. These objects can be manipulated and used to create complex programs. On the other hand, many other programming languages are procedural, meaning that code written in these languages consists of a series of instructions that must be followed in order.

- **Dynamic vs Static Typing**
Another key difference between JavaScript and other programming languages is how they handle data types. JavaScript is a [dynamic language](02_datatypes1.md), meaning that variables do not have to be declared with a specific type, making it easier to work with data (similar to Ruby and Python). On the other hand, statically typed languages (like Java or C or C++) require that variables be declared with a specific type before they can be used.

  For example:
  ```JS
  var age = 12; 
  console.log(age);
  ```
  In the other statically type language woul be similar to this:
  ```JS
  var age : Number = 12; //declared with a specific type: Number
  ```
  Javascript has some kind of side languages or some precompiler such as **typescript** that are very similar to JS but they force you to put in the data types that are actually the reason why typescript is called typescript. 


<br>

<br>

# 1.3. JavaScript compared with Python

JavaScript was originally designed to support HTML pages in the browser. Python was made to run from the command line to support servers (and desktops).

Both languages are now supporting larger communities. Python is popular as a data processing language in the social sciences. JavaScript is found now on servers and other locations.

<br>

![Screenshot Table comparison Py vs JS](/images/screenshot%20JS%20vs%20Python%20differences.png)

<br>

JavaScript uses **curly brackets** to designate blocks of code. Python uses indentation and whitespace.

Python offers flexible parameter blocks for methods, while JavaScript insists that all **parameters must be specified**.

JavaScript code is often **driven by events** such as **mouse clicks or keystrokes.** Python responds to function calls.


Many Python libraries are focused on data processing and analysis, while many JavaScript libraries are designed to **manipulate HTML** in the browser.

<br>


**Do you want to see what can JavaScript do?**

JavaScript can for example change HTML attribute values. In this case JS changes the value of the src (source) attribute of an image.


```HTML
<!DOCTYPE html>
<html>
  <body>
    
    <h2>What Can JavaScript Do?</h2>

<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

</body>
</html>
```

Try this example yourself [here in the W3 School interactive web.](https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb)
    <figure>
        <img src="images/screenshot bulbon.png" 
             alt="Image caption">
        <figcaption>By W3 Schools </figcaption>
    </figure>


<br>


# 1.4. How to Add JavaScript in HTML Document?

JavasScript code is inserted between <script> and </script> tags when used in an HTML document. 

Scripts can be placed inside the **body** or the **head** section of an HTML page or inside both the head and body. 

We can also place JavaScript **outside** the HTML file which can be linked by specifying its source in the script tag.

* JavaScript inside **`<head>`** Tag.
  - JavaScript code is placed inside the `<head>` section of an HTML page and uses the **`<script>`** element. This ensures the script is **loaded and executed when the page loads.**
  - Example:  This example shows the addition of a script file inside the head section
    ```HTML
    <!DOCTYPE html>
    <html>

    <head>
        <title>
            Add JavaScript Code inside Head Section
        </title>
        <!-- Adding script file inside the head section. -->
        <script>
            function myFun() {
                document.getElementById("demo")
                    .innerHTML = "Content changed!";
            }
        </script>
    </head>

    <body>
        <h2>
            Add JavaScript Code
            inside Head Section
        </h2>

        <h3 id="demo" style="color:green;">
            GeeksforGeeks
        </h3>

        <button type="button" onclick="myFun()">
            Click Here
        </button>
    </body>

    </html>

* JavaScript inside **`<body>`** Tag.
  - JavaScript Code is placed inside the `<body>` section of an HTML page and  we also use `<script> </script>` tag **inside and above the closing tag of `</body>`.**

  - Example:  This example shows the addition of a script file inside the body section
    ```HTML
    <!DOCTYPE html>
    <html>

    <head>
        <title>
            Add JavaScript Code inside Body Section
        </title>
    </head>

    <body>
        <h2>
            Add JavaScript Code
            inside Body Section
        </h2>

        <h3 id="demo" style="color:green;">
            GeeksforGeeks
        </h3>

        <button type="button" onclick="myFun()">
            Click Here
        </button>
        <!-- Adding script file inside the body section. -->
                <script>
            function myFun() {
                document.getElementById("demo")
                    .innerHTML = "Content changed!";
            }
        </script>
    </body>

    </html>
    ````
You can try yourself these examples on this web: [geeksforgeeks.or.](https://www.geeksforgeeks.org/where-to-put-javascript-in-an-html-document/)
* **External JavaScript**
  - JavaScript can also be used in external **file**, **folder** or **url**. 
  - The file extension of the JavaScript file will be **`.js`**.
  - To use an external script put the name of the script file/folder/url in the **`src`** attribute of a `<script>` tag. External scripts cannot contain script tags. 
   - Example: This example shows the **linking of an external script file** inside the head section. And in the *comments* you can see the folder and url examples.
 
    ```HTML           
    <!DOCTYPE html>
    <html>
    <body>

    <h2>Demo External JavaScript</h2>

    <p id="demo">A Paragraph.</p>

    <button type="button" onclick="myFunction()">Try it</button>

    <p>This example links to "myScript.js".</p>
    <p>(myFunction is stored in "myScript.js")</p>
    <script src="myScript.js"></script>       <!-- Adding link of an external script FILE inside the head section. -->
   

    <!-- Other external options: -->
      
    <!-- <script src="/js/myScript.js"></script> -->     <!-- Adding link of an external script FOLDER inside -->

    
    <!-- <script src="https://www.example.com/my-script.js"></script> -->  <!-- Load an external URL JavaScript file -->

    </body>
    </html>
    ````

Try the above example yourself [here](https://www.w3schools.com/js/tryit.asp?filename=tryjs_whereto_external)



In general, **inline** scripts ( scripts reside within the same HTML file) are convenient for small examples or dynamic rendering, while **external** scripts (reside in separate files (e.g., .js files)) offer better maintainability and performance in larger projects.

<br>

# 1.5. Syntax
JavaScript syntax is the set of rules, how JavaScript programs are constructed:

Some key aspects are :

* **Basic Print method in JavaScript**:
   - Example: 
  
     ```javascript
     console.log("Basic Print method in JavaScript");
     ```


* **Variables**:
   - Variables are **containers** for storing values. 
   - To create or **declare** variables, you can use the **keywords** `var`, `let`, or `const`. 
   - They are automatically declared when first used.
   - Example: **y** is defined as a variable. Then, **y** is assigned (given) the value 6 and end with a semi-colon `; `:
  
     ```javascript
     // How to create/declare variables:
      var x;
      let y;
     // How to use variables/ Assign value to the variable:
      x = 5;
      y = 6;
      // How to use variables:
      let z = x + y;
     ```
    
   - **When to Use** *var*, *let*, or *const*?
      1. Always declare variables. It is considered good programming practice to always **declare variables before use**.

      2. Always use **const** if the *value* should **not be changed**

      3. Always use **const** if the *type* should not be changed (Arrays and Objects)

      4.  `let` variables cannot be re-defined. Only use **let** if you can't use const. For more information about how to use **let** check this link [Let](https://www.w3schools.com/js/js_let.asp).
       
      - Variables declared with let have Block Scope

      - Variables declared with let must be Declared before use

      - Variables declared with let cannot be Redeclared in the same scope.
      ````JS

        let age = 12;
        console.log(age);

        let age = 15; // nope!
        console.log(age);
      ````
      5. `Var` variables can be re-defined. Only use **var** if you MUST support old browsers.
      
      ````JS

        var age = 12;
        console.log(age);

        var age = 15; // yep!
        console.log(age);
      ````


* **Types of variables**:
   - **Gobal**: Declare a variable outside function or with a window object.  (`let Name = "Apple";` )
   - **Local**: Declare a variable inside of a block or function. (`let num = 45;`)
   - Example:
     ```javascript
         // Declare a variable and initialize it
      // Global variable declaration
      let Name = "Apple";

      // Function definition
      function MyFunction() {

          // Local variable declaration
          let num = 45;

          // Display the value of Global variable
          console.log(Name);

          // Display the value of local variable
          console.log(num);
      }

      // Function call
      MyFunction();

      // Output:
      // Apple
      // 45
     ```


* **Statement**:
   - You can declare many variables in one statement.
   - Start the statement with let and separate the variables by comma. 
   - Example:
     ```javascript
     let person = "John Doe", carName = "Volvo", price = 200;
     let name = "John Doe"; //String
     ```
* **Values**:
   - JavaScript has fixed values (called **literals**) and variable values (called **Variables**)
   - Literals include **numbers** (with or without decimals) and **strings** (are text, enclosed in double or single quotes).
   - Example:
     ```javascript
     let num = 10.50; //Number
     let name = "John Doe"; //String
     ```

* **Operators**:
   - JS Uses **arithmetic** operators (`+`, `-`, `*`, `/`) to compute values. 
   - JS  follows PEMDAS:
      Paranthesis
      Exponents
      Multiplication 5 / 5 * 4
      Division
      Addition
      Subtraction
      var num = 5 + (5 * 10) / 6**2 - 1;
      var num = 5 / 5 * 4;
   - Example:
     ```javascript
     let result = (5 + 6) * 10;
     ```

   - JS uses an assignment operator ( `=`) to assign values to variables:
   - Example:
     ```javascript
     let x, y;
     x = 5;
     y = 6;
     ```

  

* **Expressions**:
   - Expressions combine values, variables, and operators to compute a value.
   - Example:
     ```javascript
     let expressionResult = 5 * 10; // Evaluates to 50

     x * 10  //Expressions can also contain variable values

     ```
     ```javascript
     //this line of code is commented out

     console.log('Hi there'); // Here is another comment

     //multi-line comments:

     /* and then you can
      put anything you
      want here on
      multiple lines
      */
     
     ```



* **Comments**:
   - Uses `//` for single-line comments and `/* ... */` for multi-line comments (comment block)
   - Any text between // and the end of the line will be ignored by js(will not be executed).
   - Any text between /* and */ will also be ignored.
   - Example:
     ```javascript
     let x = 10; // This code will be executed

     // x = 10; This code is a comment and will **NOT** be executed
     ```

* **Identifiers (Names)**:
   - Identifiers are used to name variables, keywords, and functions.
   - Rules:
     - Must start with a letter, `$`, or `_`.
     - Subsequent characters can be letters, digits, underscores, or dollar signs.
     - **Numbers are not allowed as the first character.** This way JS can easily distinguish identifiers from numbers.
   - Example:
     ```javascript
     let firstName;
     ```

* **Case-Sensitive**:
   - Remember that JavaScript is **case-sensitive**, so `lastName` and `lastname` are two different variables.
   - Example:
      ```JS
      let lastname, lastName;
      lastName = "Nadal";
      lastname = "Federer";
      ```
* **Camel Case**:
   - Underscore:
      ```JS
      first_name, last_name, master_card, inter_city.
      ```
   - Upper Camel Case (Pascal Case):
      ```JS
      FirstName, LastName, MasterCard, InterCity.
      ```
   - **Lower Camel Case** (very popular):
      ```JS
      firstName, lastName, masterCard, interCity.
      ```
   - ATTENTION!! **Hyphens are NOT allowed** in JavaScript. They are reserved for subtractions.



`Hoisting`

It is essentially a very specific way that the javascript interpreter actually reads variables.

It referes to Where you should define your variables in your program. If you define them in the wrong order then you might run into some odd types of bugs.

Essentially what the interpreter does with hoisting is: it tries to find every spot where a variable has been declared.

It's really considered the best practice to assign your variables and to declare them at the very top of the program.

```JS
// Hoisted
name = 'Kristine';
console.log(name); // 'Kristine'
var name;

// Initializers not hoisted
console.log(age); // undefined
var age = 33;
```




<br>

**Syntax Comparison between JS and Python**.

Here is a side-by-side syntax comparison of Python and JavaScript for common constructs:
<br>

![Screenshot Table comparison Py vs JS](/images/screenshot%20table%20syntax%20python%20vs%20js1.png)

The table highlights syntax differences but the core constructs are similar.

However it is important to remember that these two programming languages do not necessarily replace each other. As a matter of fact, **you can make the most of their benefits by using them together**. For example, Instagram handles its enormous traffic by doing so – using JavaScript for the client-side and Python for the server-side.

<br>

# 1.6. Why to use JS

Web applications are the dominant way that people interact with the computing universe, and JavaScript is the foundation. Even server applications are increasingly written in JavaScript as programmers turn to **Node.js** for **increased speed and the freedom to run the same code on the server and the client.**

JavaScript is **ubiquitous**. JS is the only programming language that can actually be understood by a web browser.  This provides JavaScript with a great distribution platform. It means that anyone that has a browser, which almost means everyone, can effortlessly run your JavaScript code.

**Some of the world's most powerful applications are built-in JavaScript.** You don't have to go far to find an application that was built using JavaScript. Popular applications such as Gmail, Twitter, and Facebook use JavaScript extensively.

It's great for working with **automation**. JavaScript is one of the most **powerful tools** you use  **to automate your day-to-day workflow**. JS allows you to automate many of busywork tasks. For example: Imagine you want to update and follow a bunch of people on Instagram or on Linkedin. Instead of having to manually click a button a hundred times to follow that people, you can actually build a very simple JavaScript script that will run directly in the browser and it will automate it and do all that work for you.

According to Stack Overflow’s [2023 Developer Survey](https://survey.stackoverflow.co/2023/), JavaScript has been **the most popular programming language** for over a decade. Almost 66% of professional developers use this language (only 30% of developers use Java, which ranks number seven).

<br>

![Stack Overflow Developer survey](/images/Survey%20JS%20most%20used%20programming%20languages.png)
<br>

Source: Stack Overflow Developer Survey


It looks like it will continue to be a primary language for front-end developers as long as it continues to be **the only language that all browsers understand.** 

Given the popularity of JavaScript, it is really **easy to find resources and information** about it. It has a big, vibrant community behind it. In the popular StackOverflow web, there are over a million questions that are related to JavaScript.

JavaScript has a** huge ecosystem** that provides it with **powerful and engaging tools and libraries**. For example: Electron (for building desktop apps), PhantomJS and CasperJS (for automating web pages), D3.js library(for advanced data visualizations), React Native (for building native mobile apps), Angular, Vue.js.,Phaser(HTML5 games), MogoDB (databases), Three.js (for visual and animations), IBM Watson (cognitive applications that make use of Artificial Intelligence ), etc.

JavaScript’s ubiquity and adaptability make it indispensable for modern software development, from small interactive web components to large-scale applications across platforms.

<br>


# 1.7. Uses of JavaScript


JavaScript is used for a **multitude of purposes** across web development, mobile app development, server-side applications, and more. Here are some common uses of JavaScript:

- **Web Development:**

  * **Dynamic Web Pages:** JavaScript manipulates HTML and CSS, enabling interactive user experiences.

  * **Form Validation:** It validates user input on the client-side before sending data to the server.

  * **Interactive Web Features:** Slideshows, carousels, and modals enhance user engagement.

  * **Single-Page Applications** (SPAs): JavaScript frameworks like Angular, React, and Vue.js create SPAs without page reloading.

  * **Real-Time Updates:** Content updates without page refresh, useful for stock tickers, news feeds, and social media timelines.

- **Server-Side Applications:**
Node.js: JavaScript on the server side for scalable network applications.

- **Mobile App Development:**
React Native: Uses JavaScript to create native apps for iOS and Android.

- **Cross-Platform Desktop Applications:**
Electron: Developers create desktop apps using JavaScript.

- **Web Browsers Extensions and Plugins:**
  * Enhances user browsing experiences by creating extensions for browsers like Chrome and Firefox.

- **Animations and Visual Enhancements:**
JavaScript powers web animations, making websites visually appealing.

* **Testing and Automation:**
Tools like Jest and Selenium automate web application testing.

<br>

Essentially, JavaScript's **versatility** allows it to be used virtually everywhere, from small interactive web components to large-scale applications across various platforms.

# 1.8. References
mdn
[mdn docs](https://developer.mozilla.org/es/docs/Web/JavaScript/Language_overview)

[JavaScript vs. other languages: Live long and prosper?](https://techbeacon.com/app-dev-testing/javascript-vs-other-languages-live-long-prosper)


If you'd like to explore more, you can refer to resources like [W3Schools](https://www.w3schools.com/js/js_syntax.asp) or [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/javascript)

[JavaScript syntax](https://www.w3schools.com/js/js_syntax.asp)


[The Modern JavaScript Tutorial](https://javascript.info/)

[JavaScript examples: What can JavaScript do?](https://www.w3schools.com/js/js_examples.asp)


[ <span style="color: #blue; font-size: 30px;">↑</span>
Back to Top](#index)


<sub>[<<Back to README](README.md)</sub>