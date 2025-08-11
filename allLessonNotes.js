//*Namaste Node.JS.

//* Season 1 - Episode - 1 - Introduction to NodeJS

//* Node.js is maintained by "Open IS foundation." Node.js is a open source and cross platform language.  Node.js runs on the V8 Javascript Engine and executes javascript code outside a web-browser.It has an "event-driven architecture capable of asynchronous i/o /Non-Blocking i/o. Node.js was first released on 2009. It was Created by - Ryan Dahl.
//*And always to run Javascript code we need a Javascript Engine.

//* In 2009. When Ryan Dahl started to develop Node ,he started with spider-monkey which is firefox's Javascript Engine but just after 2 days he decided to shift on chrome's V8 Engine. And from then to now Node.js is built on top of Chrome's V8 Engine. When Ryan Dahl was building node.js at that time a company named Joyent" was working on a similar kind of project. they were trying to run javascript on Server side. As Ryan Dahl was working on similar kind of project the company was very impressed and  hired Ryan Dahl to work on their project and funded Node js  initially, they also used Node.js on some of their internal projects and that's how Node.js started. As Ryan Ryan Dahl  developed it for the purpose of creating web servers that's why initially he named it web.js, but later he  understood the potential of this language that the use case of this is not only limited to creating servers but even more that's why he changed its name from 'web.js' to 'Node.js'

//* # Why he started to develop this?
// *At that time, there was Apache which was used to create http servers, but the problem was, it was a blocking server. So Ryan wanted to build a non-blocking server. Non blocking Server can handle multiple requests with lesser number of threads.
// *In 2010, another developer from Joyent developed NPM(Node Package Manager). It is like a registry/central place where you can a add a new package to do any thing.
// * In 2011, Node.js got windows support. Initially Node was only built for Linux and Mac. But in 2011, Joyent and Microsoft worked together and came up with windows support, so, Node.js can be more accessible.

//* In 2012, Ryan left the Node.js team and  responsibility of maintaining Node.js was given to Isaac Z. Schlueter. He is the same person who developed NPM. But the development of Node.js became very slow.
//* Chrome was releasing there new versions but node.js releases was not catching up with chromes new updates. Like Joyent was holding on new releases of Node.js
// *In 2014, Fedor Indutny, created  'io.js' as a fork of Node.js. It occurred in Dec, 2014, due to dissatisfaction with Joyent's governance of Node.js and as a desire for more open and community driven development model.
//* The goal  was to accelerate development and release new versions of Node.js under an open governance Structure.

//* In 2015, September, both io.js and Node js maintained by Joyent merged. They decided no single person or company will manage it.They decided that a single committee named "Node.js Foundation" will manage its development. And from then we got the Node.js we use now.
//* In 2019, there we were two committees named "JS Foundation" and "Node.js Foundation" both merged and created a new committee named 'Open Is Foundation'. And this  foundation right now handles all active development of Node.js.

//* ⁡⁢⁣⁣Season 1 - Episode - 2 - Js on the server⁡

// ?  javascript on server
// * node js came with a philosophy it can run outside the browser primarily on the server
// * what is a server?
//* Server means nothing but a remote computer you can assume that it's a computer, working remotely ,so basically think of a server as a computer so assume it is a cpu its its located at somewhere ,suppose if you are running a website on a server what does it mean?  it means that you are running a website on a   somebody's computer, its generally a cloud , at the end of the day it is 1 cpu it is one machine which is receiving that request ok so that receiver or that receiving computer is known as a server.
//* suppose if you type Google.com so you make a request through your client( your browser), so  there is a server and there is something known as a client ,let me demonstrate client,  suppose you have your web browser and over here you try to access Google .com, you wrote Google.com ,so what will happen every domain name maps to an ip, so it will just map to an ip ,suppose the ip is 114.265.123.8 okay this is the ip, now what is this IP,this ip points to a device, a server, server means a machine , so whenever you are requesting Google.com that means this computer is making a request to the server  and now initially what happened was javascript was the main language which was used inside the browsers , but after node js you can even run javascript on this server.
//* Now this is very powerful, why? this is very powerful because when javascript was just used in front end or on the web or on the client or on the websites that we build so there were different front end developers and now on the back end there were languages like Java and all these other high level languages were used like- java, python and C and all these languages were used. you know there were separate back end developers but now with javascript coming on server as well as web, what happens it  gave us an opportunity for a single developer to develop full stack. They started calling it as full stack basically  a javascript engineer who knows javascript properly can now write code on using libraries and frameworks like react, angular, can write code on computers, can write code on websites ,on the client side, the same coder can also use node js to write code on servers, so that is why this is kind of like client and server and now when the javascript can be run on both client and server it became a lot popular and a lot of developers now just have to learn one language javascript they have to become very good at it and then now they can be a full stack developer. they can build they can write front end code they can write back end code and that's why node js also gained a lot of popularity and frameworks like mern, came in, MERN where M means Mongodb E-  express  R -react and N is node ,  just because javascript can run on both client as well as server
//*   A amzing fact is that node js has C++ code, the  js engine V8 which is developed by Google Chrome, which is used inside Google Chrome and developed by Google you know  what is it written in?
// //* V8 is written in C++, V8 is C++ programme , when I tell this to a lot of developers they just feel that oh my god , so the javascript engine uses C++ to execute javascript code, just search for V8 github ,visit the Github repository of V8 engine.
// * if you go to the open repository of V8 and you can see 72% , so majority of the code of V8 is written in C++, at the end of the day a javascript engine is C++ programme
// ? what is javascript engine?
// *  javascript engine is C++ programme
// * let us basically go to the V8 website((link- https://v8.dev/)) and let us see what actually V8 engine is,
// *V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows, macOS, and Linux systems that use x64, IA-32, or ARM processors. V8 can be embedded into any C++ application.
//*   it is again cross platform , windows, Mac os, Linux and all kind of processors, V8 can be embedded into any C ++ application.
// ?what does it mean ? that is why it gives you superpowers, the job of V8 engine is to execute javascript code , so what happens is basically you write some javascript code that javascript code is read by V8  and it is then converted to the code which machine understand basically V8 converts our javascript code to machine level code and machine understands it and then execute that code that's how V8 works
// * javascript is being read by v8 and then telling the machine, it is converted at the end to Binary which must computer understand
// *these are all just languages so that is why I laugh when students says that ok which language is better is javascript better than C++ better than javascript? no every language has its own specific use case , it has their own specific potential and its own specific problems that they solve , because at the end of the day javascript engine is C++ code now when I told you about that V8 can be embedded into any C++ application now if this is the main thing which led to the invention of node js , so what the creator of node js did he created node js which is again C++ application
// //* this node js is again a C++ application with V8 embedded into it

// * node js is C++ application and then there is V8 engine inside it, but when V8 executes any piece of javascript,then why was there a need of node js?
// //* when V8 can execute our javascript code then V8 can be just put  on the server then V8 can execute everything where does Node.js come into picture ?
// * we have node js and node js has V8 inside it what happens is now V8 is a javascript engine that follows Ecma script standards. what is ecmascript? ecmascript is a standard which is followed by javascript and a lot of other languages ,so ecmascript is a standard for scripting languages including javascript, jscript and action script, so basically whatever javascript you write it follows a standard , you would have written var a = 10; right so how do you declare a variable you write a var and then you write a and then = 10; , if you are writing var A That means var should come before the variable name and then you should have an equal to sign to assign something to it and then there should be a number or integer or floating or string, so these are the standards, the javascript standards basically the way you write javascript, that are maintained by a standard that is known as Ecma script, javascript follows Ecmascript Standard and so to run javascript this engine should understand the rules, ecmascript defines rules.
// * now there are a lot of javascript engines and js engines follows these standards  because these standards are defined by a Central Committee who is responsible for adding new features into the language , they make these ecmascript standards and then now all these browsers  who have their own javascript engine ,  known as Spider Monkey spider, which is inside Firefox right firefox , Chakra this is developed by Microsoft ,and similarly javascript engine in Safari Mac Os is JavaScriptCore (also called Nitro) , these these javascript engine which are being built has to specifically follow these Ecmascript standards, they have to adhere to these Ecmascript standards, why so that I am the user I am writing a javascript that should be executed by any engine, any engine that executes that javascript should respond should emit should give us the same result , it can only happen when you have some same standards, all these javascript engines are built differently some other logic would have been implemented in Microsoft, some other logic would have been implemented in V8 and javascript enginees again a very complicated software , it is C++ programme, it has garbage collection, it has compiler, interpreter, but at the end of the day what these javascript engine should do it should take a javascript code convert it into a code that machine understands, that is their job every browser has their own implementation of these javascript engines but these javascript engines follows a specific format this is known as Ecma script standards you might have heard or something known as ES6 javascript ES6 that is known as Ecma script 6 that means that was the sixth version of that Ecmascript standard
// *so now this V8 has to follow Ecma standards  V8 has to follow Ecma Standard and it is written in C++ code, now V8 cannot go outside ecmascript standard , so what happens is node js gives it extra superpower, node js has V8 engine plus it has a lot more superpower, what are these superpowers?, node js as C++ programme, it has V8 embedded in it and along with that there are more superpowers and that node js when it runs on the server makes it very powerful , "you can assume these superpowers are apis" ,apis on server ,suppose if you want to access database onto your server suppose if you have a database installed , suppose there is a sql database or Mongo database installed if you want to connect to that database through your javascript, how will that happen? V8 can't do that, V8 cannot connect to database because it does not have access to database, you want to make a network request to some other computer ,suppose if you want to make a http call V8 cannot do that because its not an ecmascript standard, the only job of V8 is to execute javascript code, V8 cannot connect to database, V8 connect cannot go into file system, V8 cannot fetch the image from the folder , so you need some superpowers and those super powers come in form of api and that that is the core thing that node js adds on to V8 and it becomes powerful
// * so node js is basically C++ programme with some superpowers and with V8 engine , it can be embedded into any C programm ,now the V8 follows ecmascript standards but to get more access to get more superpowers node js had some more superpowers on top of V8
//* Node.js is known as javascript runtimeand now this node js is executed on the server so now with this V8 engine and with these apis with these superpowers ,if you go to node js repository, its 62% javascript and 21% C++, so now node js is built using javascript ,but at the end of the day it is a C++  programme, but it also has a lot of javascript apis , these are the apis which a user can call

//*? so V8 is C++ code what does it do? and why is it C++ code?

// * suppose if you have a computer  computer understands binary , binary is all zeros and ones , on top of this binary code, there is something known as assembly code,it is written in assembly language, on top of this assembly code, there is machine code,  on on top of this assembly code there is machine code, these machine code and assembly code are caleed low level languages, on top of this machine code, there is high level languages like C++ , javascript , java etc. Basically your computer understands binary (zeros and ones) but we can not write binary , if you have to write like some alphabet in binary, it will be a very big code , we are not programmed, our head cannot process binary, so we are capable of writing high level languages, so basically we as users write high level languages

//*  and these high language languages like C++ and on top of C++, we write javascript, so the javascript is very easy for us,  because  you just write few lines of code and so much happens behind the scenes , so basically we write javascript what happens is this C++ code or the javascript engine takes our javascript and converts it to machine code , converts into the low level code and this code is known as low level code , machine code and assembly level code is known as low level code

//*  a js engine that converts your high level code to machine understandable code this is the job of your javascript engine so this is why you need javascript engine
// *if you go to node js try to go into this repository try to explore , you will see V8 over here, so V8 javascript engine is just one dependency inside node js ,
//*? TC39 committee
// *if you go to ecmascript specification it is managed by TC39 community ,it is a committee of thirty nine people who maintain these standards and you write string concatenation everything that happens in the javascript those standards are written over here, this is kind of like the documentation for javascript

// * you might have heard of something known as x86 what is it you might have understood what is x86 you might have understood on processor right there are so many type of processors inside your computer they understand low level code they understand this machine code .

//* ⁡⁢⁣⁢Season 1 - Episode - 3 - let's write code⁡

//* first we have to install node.js

//* to check the version we can come to our terminal  and write node -v

//* the easiest way to write code in node is node repl(read evaluate print loop)
//* to use it we just need  to open terminal and write "node".
//* and enter .now our node repl is ready , in the terminal we can write node code.
//* we are not gonna use this for production so let's create our app.js file

//* now inside the app.js file we can write some simple code like
/*
var a = 10;
var b = 20;

console.log(a + b);
*/
//* now to print it , previously we used browser while learning frontend , but now we are learning backend so obviously we are not gonna use browser to run this code , this time  as we already installed node we just need to open our terminal here and just write "node fileName" , so if we want to run app.js then in the terminal we just need to write "node app.js" then enter and it will execute our code. As Node.js already contains V8 inside it.

//? Global object and accessing differences across browser and node

//* to access the global object in the browser , we already know we can write :-
//*console.log( window), or
// *  console.log( this),
//* console.log(self);
//* console.log(frames);
// *all of them will give us the window object, now one important fact is , the global object shown by the browser is actually not part of javascript language , instead , it is the part of browser itself. and this global object contains a lot of things like setTimeOut,setInterval etc.

//* In Node, when you try to access the global object, you can't do it with window keyword or this keyword, if you try to access the global object using this keyword in node it will return empty object.you try using window it will return window is not defined.
//* So to access the global object, in node, we have to use the "global" keyword.
// console.log(global);

//* and this global object we access in node , is also not part of js , and also not part of v8 engine , this global object is one of super powers of node js, and v8 can understand it because node provide it to v8.

//* different named of global object
//* When browsers were created they were using V8 engine, they named it window and then all the people who were writing code and on the browser they started using window as a global object then there was a concept of "this" keyword came then the "this" started pointing to window object in the browsers, then , there is a concept of web workers came in inside web workers, they started writing self to denote the global object, when node js was created the creator started using "global" keyword as the global object , so what happened is  there was a very big discrepancy/mismatch , you know on every platform be it web worker be it web browser be it node js everywhere at the end of the day we are writing javascript , so there should be a common global object, now to standardize this in 2020 javascript committee "open js foundation" they were actively maintaining javascript and they were developing new features inside javascript, "⁡⁣⁢⁣they came up with a proposition that there should be a standard global object in all the runtime environments⁡" ,if you are using node if you are using browser if you are writing web worker all everywhere there should be a single global object and there should be a single way to represent it
// *somebody said okay lets make global as the  global keyword , some people said it should be window, some people said it should be self, there were different proposals, later  the committee did not decide on any of these keywords, why? the answer is because  suppose  at some later point of time global started pointing to window object then what will happen is suppose some people or some website are using this word global as their variable name there will be a conflict with their variables. there will be a lot of confusion if you write the word global or , window or this or self as a standard. so what committee did was they came up with a new word and that was known as that was known as ""globalThis"".
//* So using this "globalThis" keyword you can access the global object in any js runtime either in browse or node or web-workers.

//* ⁡⁢⁣⁡⁢⁣⁢⁡⁢⁣⁢Season 1 - Episode - 4 - module.export & import⁡

//* we can write all of our code in just one file, but usually we don't do it.
//* we create multiple files to write code for multiple parts of parts of our project.
//* when we write "node app.js" , here app.js is the entry point of our code , but what if we have another file like xyz.js(in node it is called module) and we want to execute that here also, because right now app.js and xyz.js is not connected.
//* So the answer is require() function.
//* we just need to add this require() function in the top of app.js and inside this we just mention the path of that another module/file like require("./xyz.js") and that's it. now before executing app.js code first xyz.js modules's code will  be executed first.then the code of app.js 's code will run.

//* problem with require
//* let's say we have a function named sum() , in the xyz.js module, and we have to used require function to get the xyz.js here inside app.js , but if we try to execute the sum() function here in the app.js then it will not work, the terminal will show "sum is not defined". Because when you create another separate module, and using require function you require that module then the module's code will be executed but you can't access the variables,methods, functions of that module simply by requiring the module.
//* "Modules protect their variables and functions from leaking."
//* so can we access any function from another module?
//* We have to intentionally export that function from that module like
/* ⁡⁣⁢⁢module.exports = sum ⁡ */
//* and also import that in app.js where we want to use that function like
// ⁡⁣⁢⁣const sum = require(./sum.js)⁡;//* this require function is returning the sum function as we explicitly exported that from the module. and now we are saving that in a sum constant.

//* exporting multiple things at once
//* let's say inside xyz.js module we have a sum function and a variable named x and we want to export both so how can we do that.
//* we have to use a object while exporting like:
/* module.exports= {
x:x,
sum:sum
} */
//* or below both are same
// module.exports= {x , sum}

//* and now while importing we have import the obj like
// const obj = require(./sum.js);
//* then use the function or variable using the obj.like
//* console.log(obj.x)/
//* obj.sum(3,4);

//* or we can directly destructure while importing like
// const {sum,x} = require(./sum.js);

//* why modules protect their variables and functions?
//*  suppose we have imported module 2 inside module1 , now inside module 1 we want create a variable name x , but module 2 which we imported already has a  variable named x , so what will happen is that both variables with conflict with each other that's why it is important to keep the variables and functions protected unless they are needed.

//* different module patterns
//* there are two kind of module patterns , the one we just learnt is called commonjs module pattern, here we use module.exports and require, it is the older one, and it is by default used in node.it is also represent with .cjs extension.

//* the new module pattern is called ES module pattern . here for exporting we just need to write export before the function or variable and while importing we just need to write - import {function , variable} from "./path". , it is by default used in react , angular.it is also represent with .mjs extension.
//* to use this es modules , in the package.json file in the type property you have to set its value to "module" and for commonjs,it is by default in node but you can also write commonjs to use commonJs.
//* commonjs always require modules in synchronous way but in ES modules we have option to import module in asynchronous way.
//* commonjs js by default runs in non-strict mode for example when you are using it  you write z=15 and run the code then it will not through any error even you have not used any keyword like var or let or const. ES modules by default runs in strict mode for example if if we do the same z= 15 then it will through an error while running  the code that z is not defined.

//* what is module.exports?
//* if we try to print it using console.log(module.exports) , then it will show {} , empty object.
//* that why instead of doing this
/* module.exports= {
x:x,
sum:sum
} */
//* some people also do below
// * module.exports.x = x;
// * module.exports.sum = sum;
//* both ways are right.

//* ⁡⁢⁣⁣making a folder module⁡
//* let's say we have a folder named calculate and inside that we have multiple file exporting multiple functions like sum , multiply ,divide . it becomes hectic to access each of them using the path specially when we have 100s of files, in that case we can make the folder itself a module, to do that we just need to go inside the folder and create a file index.js . then inside that file first import all of the function and then export them again. now outside the calculate folder we have app.js , now if we want to access the functions from the calculate folder files, we don't need to mention the path of every file/module because now the folder is itself a module now, so we can just mention the folder in the path and that's all.like-
// ⁡⁣⁢⁣const { sum, divide, multiply } = require(./calculate);⁡

//* importing json
//* it is very easy , just where you want to import the json file,do like this and remember you don't event need to even need to export the json , just import it like -
//* const data = require("./data.json");

//* ⁡⁣⁣⁢there are other important modules inside node js like util, if we want to use it then we just need to do⁡

//* ⁡⁣⁢⁣const util = require("node:util");⁡
//* console.log(util);

//* modules - Modules encapsulates some piece of code which is only accessible to itself unless we explicitly export something from it.

//*  ⁡⁢⁣⁡⁢⁣⁢⁡⁢⁣⁡⁢⁣⁢Season 1 - Episode - 5 - Diving into node js github repo⁡

//* now we will learn what happens when we use require() function to import any module?

//* const a = require("./app");
//* console.log(a);

//* in the above line we are requiring the app.js module, so before importing node.js will take all of the code of app.js and put it inside a IIFE(immediately invoked function expression), then executes it. that's why the variables and functions of that module remains private. we already know that the variable or function we create inside any function are function scoped , so that means those variables and functions are private and only accessible inside that function where they are present. Same happens in case of requiring modules , as node js wraps all of the code any module inside a IIFE , before executing the code that's why the code that module remains private inside that IIFE.
//* Example of IIFE
(function () {
  var cd = "compact disk";
  function sum() {
    const a1 = 2;
    const a2 = 34;
    return a1 + a2;
  }
  console.log(cd + "--" + sum());
})();

//* Q. How are variables and functions are private in different  modules?
//* A. IIFE and require function

//* Q. How do we get access to module.exports?
//* because when node js wraps a module inside IIFE , it sets some parameters for that IIFE which are module, require,etc. and while calling a IIFE , node js also passes the arguments module, require. that's why inside the module we can require another module and from inside of IIFE it also returns module.exports that why we can access the exported variables and functions through module.exports. module.exports is by default is a empty object. while we export explicitly we modify the empty object of module.exports={}.
//* example
(function (exports, require, module, __filename, __dirname) {
  //⁡⁣⁢⁣ require("./app.js")⁡; //* we can access require because node js passes it as parameter
  var cd = "compact disk";
  function sum() {
    const a1 = 2;
    const a2 = 34;
    return a1 + a2;
  }
  // ⁡⁣⁢⁣return module.exports = { cd };⁡ //* we can access the exported variables and functions because node js returns module.exports automatically.
})(exports, require, module, __filename, __dirname);

//* So after doing all of this node js gives the code to v8 engine to execute.

//* ⁡⁣⁢⁣Q. What steps happen when you require a file using the require(/path) function?⁡
//* A. The steps are:-
/*
* 1.Resolving the module :- So in this steps , node checks what kind of file it is , so it can be ./lacalpath , ./ json , node:module . So first node check which type of file it is, because for every type the resolving process will be different.
* 2. Loading the module :- file content is loaded according to the file type.
* 3.Compile(Wraps inside IIFE) :- when it is a javascript file , it wraps the whole code inside IIFE with necessary parameters.

* 4. Evaluation :- using the V8 engine it executes the code , calculates the result . In this step module.exports is also returned.
* 5, Caching :- it caches the result , because if the same file is required by multiple files then there is no need to calculate the same thing multiple times , instead it will provide the calculated result from the cached memory.
*/

//* the v8 engine we are taking about is not a machine or engine , it is just some piece of C++ code, it is just a dependency inside the node js.
//* libuv is also a dependency inside node, this library gives so many super powers to node , one of them is async I/O / Non-Blocking I/O.

//* ⁡⁢⁣⁡⁢⁣⁢⁡⁢⁣⁡⁢⁣⁢Season 1 - Episode - 6 - Libuv async IO

//* Node js has a event driven architecture capable asynchronous I/O.

//* we already know javascript is synchronous single threaded language.So if we try to execute some piece of code. it will execute that using a single thread line by line(synchronous). Inside the operating system we have many processes. Thread is like a container where we can run any process , any application , any program.

//* let's understand synchronous execution using an example:-
//* [see image - "images\synchronous code execution example.jpg"]
//* Let's assume we have a restaurant and it works in synchronous way so the restaurant has three items to serve to the customers the first item is Coke which takes 0 minutes to serve we just need to go to the dispenser and serve the cook now the second item is pizza which takes 10 minutes to serve and the last item is noodles which takes five minutes to serve now as we can see in the picture mentioned above that the restrain works in a synchronous way so that means once ordered is fulfilled only then the next order can be taken and fulfilled so every person has to wait until the person before him gets their order and go out of the queue so if we look at the image the first person is ordering Coke so that means it will take zero minutes and he will immediately get his order now he goes out of the queue and now  the second person Orders noodles which takes five minutes to prepare so he has to wait 5 minutes to get his order now after five minutes he gets his order and goes out of the queue now the third person came and he orders a pizza so we already know the preparation time of pizza is 10 minutes so total the third person has to wait 15 minutes because the person before him waited 5 mins and he has to wait again 10 minutes to get his pizza so after 15 minutes the third person gets his order and goes out of the queue now the 4th person comes and he orders coke, Now as he ordered Coke he immediately gets the order but to get this coke total he has to wait 15 minutes people before him ordered noodles and pizza which had taken 15 minutes so that is why he has to wait total 15 minutes to get his coke, Which makes no sense for a restaurant but as this works in a synchronous way so so that what happens actually so now the next person comes and orders noodles now as noodle takes 5 minutes to prepare so after 20 minutes standing on the queue he get his orders because people before him taken already 15 minutes to get their orders and and with five minutes of preparation time of noodle total he spent 20 minutes to get the order and in between many other people have joined the queue and waiting so it is a very bad way of managing a restaurant we know that but that is how synchronous way works and the same happens with the synchronous languages like javascript Because it is a synchronous language it has to wait to finish a line's execution to go to the next line.
//* here this  is a blocking operation because every order was blocking the queue until it is fulfilled.

//* Let's understand how asynchronous code execution works:-
//* [see image - "images\asynchronous code execution example.jpg"]
//* Now we will learn how asynchronous code execution works using the same restaurant example but this time it works in an asynchronous way so let us start understanding how asynchronous way will work so first of all the first customer comes to the restaurant counter And orders Coke so as it takes 0 minutes to serve the first customer immediately gets the Coke now the second customer comes and he orders pizza so this time as it will take 10 minutes to prepare the counter manager takes the order and tells the second person to wait in the waiting area now the third person comes and orders the noodle now this time again the counter manager takes the order and tells the 3rd person to wait in the waiting area so the third person goes out of the queue and the 4th person comes And the 4th person ordered coke, So the counter manager immediately gives him the Coke and the 4th person goes out of the queue now the 5th person comes and orders noodles so as it will take 5 minutes to prepare that is why he takes the order and tells the 5th percent to wait inside the waiting area so the 5th person goes out of the queue and now the other person's coming in the queue can also order so now we can clearly see how the asynchronous way is faster so in the previous synchronous way the person in the 4th number ordering Coke Had to wait 15 minutes to get his coke without any reason and that was happening as it was managed in synchronous way but this time as it is managed in asynchronous way so this person can immediately get his coke and now person 2, 3 and 5th person  waiting in the waiting area and as 5 minute completes The 3rd person gets his noodles now they can start preparing the next noodle order and in between the pizza is also preparing and after 10 minutes the pizza is also prepared so the 2nd person gets his pizza and also another noodle is prepared so the 5th percent gets his noodle so we can clearly see how it decreases the waiting time when the restaurant operates in asynchronous way and that is how all of the restraints work today using this same asynchronous way because this is much more efficient and faster.

//* So it is a non-blocking operation because no order is blocking the queue.

//* So javascript is synchronous but with the power of node it becomes asynchronous/non-blocking.

//* now let's see how v8 javascript engine executes javascript code :-
//* [see image - "images\v8 js engine code execution(sync code).jpg"]

//* so we will understand how thw below code will will be executed through v8 engine.
/*
 * var a = 576597;
 * var b = 47807;
 * function multiply(a, b) {
 *   const result = a * b;
 *   return result;
 * }
 *
 * var c = multiply(a, b);
 */

//* So we know that javascript is a synchronous single threaded language so all of the code will be executed line by line one after another in the synchronous manner , All of our code will be wrapped inside a global execution context and that will be post inside the call stack, so the V8 engine has three things- the call stack ,the memory heap and the garbage collector, So inside the call stack the global execution context will be pushed so our code will start to execute line by line so at the first line our variable a has some value so that will be saved inside the memory heap then javascript engine will move to the next line and again it sees variable B and it has some value so it again saves its value to the memory heap and the garbage collector works in sync with the memory heap so when some variable or something is not needed it will immediately go to the garbage collectors so garbage collector always keep checking the memory heap that if anything is not needed so now the javascript engine will move to the next line and it will see a function so as it is not a function call so it will not execute the function it will just save the whole function inside the memory heap then it goes to the next line and it sees the variable c and its value is a function call so as soon as javascript engine sees that it is a function call it wraps the code of that function inside a function execution context and push that function execution context inside the call stack so the global execution context is still running and on top of that the function execution context is pushed so inside it they functions code is running so inside the function the first line it is multiplying two values and saves the result inside the memory heap in the next line it returns the result so the function execution context will return the result to the global execution context and immediately the function execution context will be popped out so it goes out from the call stack so now the control comes back to the global execution context and the variable C has got the returned value now this value will be also saved inside the memory heap and beside that all of the unnecessary variables will be collected by the garbage collector and as the whole code is finally executed now the global execution context will also popped out from the call stack and now the call stack is empty again so that is how synchronous code is executed inside javascript V8 engine.
