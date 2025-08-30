//*Namaste Node.JS.

//* Season 1 - Episode - 1 - Introduction to NodeJS
//* to execute any file command - "node fileName"
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

// * suppose if you have a computer  computer understands binary , binary is all zeros and ones , on top of this binary code, there is something known as assembly code,it is written in assembly language, on top of this assembly code, there is machine code,  on on top of this assembly code there is machine code, these machine code and assembly code are called low level languages, on top of this machine code, there is high level languages like C++ , javascript , java etc. Basically your computer understands binary (zeros and ones) but we can not write binary , if you have to write like some alphabet in binary, it will be a very big code , we are not programmed, our head cannot process binary, so we are capable of writing high level languages, so basically we as users write high level languages

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
  // console.log(cd + "--" + sum());
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

//* ⁡⁢⁣⁡⁢⁣⁢⁡⁢⁣⁡⁢⁣⁡⁢⁣⁢Season 1 - Episode - 6 - Libuv async IO⁡

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

//* So all of this javascript can do in some milliseconds but when the code is synchronous.

//! but happens when we give some asynchronous code to v8 engine to execute like reading file from the Operating system or, making some changes in the database, fetching some data from the web, or running some timer?

//* js engine can not do all of these things

//? How js engine handles asynchronous tasks?
//* => Node js helps v8 engine to do all of these async tasks . Node js has some superpowers which help v8 engine to do all of these. And that super power is a library named "LIBUV". So whenever v8 engine sees some async task  like reading file from the Operating system or, making some changes in the database, fetching some data from the web, or running some timer , v8 engine immediately offloads /delegates the task to libuv. So libuv is like a genie for v8 engine , whenever some async task comes v8 engine offloads/ delegates the task to libuv.and then libuv does those tasks and then give back to v8 engine, and that's what makes it non-blocking. Because whenever v8 engines sees some async/blocking code it immediately delegates that to libuv, and continues the code execution without waiting.

//* libuv is written using c language(97%) which is a low level language. but javascript is a  high level language. So to communicate with the operating system we need a low level language, that why libuv is very very efficient to do that because libuv is written using C language.

//* operating system has the files, os can make api call, os has access to time, and libuv is efficient to communicate with operating system.

//* So like v8 engine ,libuv is also a dependency inside node js. and js engine talks to libuv and libuv talks to operating system .so libuv is working like a middle layer between our js engine and operating system.and that's how node js makes async I/o easier .

//* So we can say libuv is one of the most important library inside node js.

//* Now we will se how v8 engine executes async code using libuv:-
//* [see image - "images\v8 engine async code execution with libuv.jpg"]
/*
//*suppose we need to execute below code
? const https = require("https"); //* importing https module from node, we can also write it like require("node:https"), both are the same thing , so writing node: is optional
? const fs = require("fs"); //* importing file system module from node
* var a = 576597;
* var b = 47807;
* 
? https.get("https://dummyjson.com/products/1", (res) => {
?   console.log("fetched data successfully");
? });
* 
? setTimeout(() => {
?   console.log("setTimeout");
? }, 5000);
* 
? fs.readFile("./file.txt", "utf8", (error, data) => {
?   console.log("file data", data);
? });
* 
* function multiply(a, b) {
*   const result = a * b;
*   return result;
* }
* 
* var c = multiply(a, b);
* console.log(c);
*/
//* So now we will discuss how the V8 engine will execute the above code using Libuv , So in the above code there is some synchronous code and there is also some asynchronous code, So the first step is our whole code is wrapped inside a global execution context and pushed inside the call stack, Now our code will start to execute line by line so at the first line we have a variable A so it will be saved inside the memory heap and the interpreter will move to the next line and it will see variable now again it will save it to the memory heap and then goes to the next line and js engine sees that it is a api call so J S engine cannot perform api call so immediately js engine delegates this api call task to lib uv now libuv Will register this api call with the callback function and wait until the response returns from the server meanwhile javascript engine move to the next line to execute the code and it again sees a setTimeOut() Function so javascript engine has no concept of time it just gets the code and immediately executes it that's how javascript works so as javascript engines is this set I timeout function Immediately it gives this to libuv Now leave we will register this set timeout function with the callback function and start to count the time as libuv Can talk with the operating system and access it time functions meanwhile javascript engine moves to the next line and again it sees that it has to read a file from the file system so javascript engine again can't read this file itself so it again offloads this task to leave uv and leave uv register these file system reading task with the call back function now javascript engine moves to the next line and it sees that it is a normal function, So it saves the whole function inside the memory heap and again it moves to the next line and it sees that it is a variable C and its value is a function call which it has already saved inside the memory heap so it takes the function from the memory heap and wraps it inside a function execution context, And push it inside the call stack now it multiplies it and saves the result inside the memory heap and then in the next line it returns the result now the functional execution context moves out of the call stack and also the result  Constant it created inside the memory heap goes to the garbage collector as it is not needed anymore and the result is already returned so now the control comes back to the global execution context again and the variable C got its result as returned value and J S engine saves it inside the memory heap and In the next line it prints the result of c variable , Now as the code execution is completed the global execution context moves out of the call stack meanwhile lib uv has completed the file system reading and the call stack is already empty as the global execution context is moved out of the call stack so as soon as lib UV Get the file system data immediately it creates a function execution context and push that with the callback function inside the call stack and call stack can now immediately execute it and print the data to the console and this function execution context goes out of the call stack and then after few milliseconds again libuv Sees that the server has returned the api calls data so immediately libuv Creates a function execution context and push that inside the call stack with the callback function it previously register and js engine will execute the function and print the data to the console and then the function execution context moves out of the call stack and finally 5 seconds passed And libuv uv sees that the timer is completed So Libuv again Creates a function execution context and push that inside the call stack as the timer is completed and js engine will immediately execute the function and print set timeout to the console and again the function execution context goes out of the call stack.
//* that's how v8 engine and libuv works together to make everything optimized and fast. And that's why js engine is synchronous but with the power of libuv , node js is capable of asynchronous IO or  non blocking IO.

//! Season 1 - Episode - 7 - Sync,async,setTimeoutZero - code
//* above we already learnt about how to read  a file with fs.readfile() and this asynchronous so when js engine comes to this line where fs.readFile is written it offloads this task to libuv and continues the code execution so this function is non-blocking.
//* but there is another similar kind of function which is blocking type , soo this function is synchronous , and its name is " fs.readFileSync("path","utf8",(err,data)=>{})" , so as the name says "readFileSync()" , this function is synchronous, so we js engine comes to the line where this function is written, js engine will give this this task to libuv as js engine is capable of reading a file from the file system but unlike the readFile() function this readFileSync() function blocks the main thread , so till libuv returns the response of this task , it will block the thread, and only after executing this function js engine can move to the next line.
//* so we should not use this readFileSync() unless we want to block the main thread.

//* So here we will see a good example of blocking the main thread with another example :-
//* importing the crypto module from node
const crypto = require("crypto"); //* The node:crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.
//* on this module we can access many methods , and of the methods named pbkdf2() [password based key derivation function] will help us to see how this method blocks the main thread and decrease the performance and increase the code execution time.hover on the method to know more about the arguments passed.Parameters: (password, salt, iterations: number, keylen: number, digest:encryption type ): Buffer

//* console.log("hi");
//* synchronous function (it will block the thread until it's executed, we have set the iteration to 5000000 ) , as this method is synchronous method so it does not need call back function, because call stack will be blocked until it's executed
//? const key = crypto.pbkdf2Sync("secret", "salt", 5000000, 64, "sha512");
//? console.log(key.toString("hex")); //* this will take so mush time because it has to perform 50lakh iterations before giving the key , and it is blocking the call stack until it is finished , so below code will be executed only after it is executed.
//* console.log("1st key generated");

//* asynchronous version of the same function(non blocking)
//? crypto.pbkdf2("secret", "salt", 500000, 64, "sha512", (err, derivedKey) => {
//?   if (err) throw err;
//?   console.log("second key generated :", derivedKey.toString("hex"));
//? }); //* this function does not blocks the the main thread , when js engine sees this it offloads the task to libuv but does not wait till it's completion, js engine continues the execution of any code below, and when  this task is completed , libuv gives it to call stack then it gets executed, so we used always use this method because it is non-blocking.so the code below this will be executed first before this method's  execution.
//* console.log("second key execution started");

//* so methods with "sync" keyword at last , are synchronous methods so we should not use them , as they block the main thread. we should use the asynchronous methods.

//* trust issues with setTimeOut() with 0 sec timer
//* setTimeOut() is asynchronous function, so even we provide a 0 millisecond timer to this method , it's not trust worthy that it will be executed in 0 milliseconds, because when js engine see the line setTimeout(()=>{},0), it offloads the task to libuv, then when libuv sees it has 0 sec timer, libuv stills can't push the callback function to the call stack immediately, it call only push the call back function when the call stack is empty, so all of the synchronous code below the setTimeout will be executed first, and when the global execution context goes out of the call stack then only libuv can push the callback function (wrapping inside a function execution context) and then only setTimeOut can be executed.
//* So even we provide 0 milliseconds timer to setTimeout , stills it comes with a condition that it will be executed as soon as possible when the call stack is empty.

//* example
/*
console.log("hello");
setTimeout(() => {
  console.log("call me right now");
}, 0); //* it will be call immediately but only after the call stack is empty because this is async function which can be only executed when global execution context moves out the call stack.
const key = crypto.pbkdf2Sync("secret", "salt", 5000000, 64, "sha512");
console.log(key.toString("hex"));
//* as this crypto.pbkdf2Sync() is a synchronous function , so the setTimeout() above it with 0 millisecond timer can only executed once this synchronous code is executed and global execution context moves out of the call stack.⁡
*/
//! Season 1 - Episode - 8 - Deep dive into v8 js engine notes
// ⁡⁣⁢//* Is javascript a interpreted language or compiled language?
//* there are Mainly three types of languages so the first one is interpreted languages so in case of interpreted languages they are executed line by line and their initial execution is fast and there is a interpreter which executes the code now there is second type of languages which are compiled languages so in case of compiled languages the code first gets converted from high level code to machine level code and because of that the compilation process is initially heavy but then executed fast as it is already converted into machine code and there is a compiler which compiles the code and now comes the third category which is just in time compiled(JIT compilation) language and javascript falls in this category so javascript has both the interpreter and the compiler and that is what makes javascript so unique.

//* when we write so js code and give it to v8 engine to execute , what happens behind the scene?
//* when code goes into v8 engine , it goes through may phases, before finally getting executed, so the the first phase is:-
//* 1st phase.Parsing :- This phase has two steps[SEE IMAGE - images\v8 engine 1st phase.jpg]
//* ...............a. Lexical Analysis or Tokenization :- in this step js engine converts every line of code in to separate tokens. let's say a line - var a = 100; so while tokenization , it will create token for var, token for a , token for = , token for 100.
//* ..............b.Syntax Analysis or Syntax parsing:- in this step js engine converts tokens into AST (Abstract syntax tree). its a tree like structure.
//* for this line :- var a=100; the AST will will look like:-
/*{
  "type": "Program",
  "start": 0,
  "end": 191,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "name": "a"
          },
          "init": {
            "type": "Literal",
            "start": 187,
            "end": 190,
            "value": 100,
            "raw": "100"
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "module"
}*/
//* It is not important to remember this AST but we can see just for one line how big AST is generated, there is a website "https://astexplorer.net/", here we can generate AST for any js code.

//* [SEE IMAGE FOR BELOW - images\v8 engine 2nd phase.jpg]
//* 2nd phase:- Conversion to byte code through interpreter and optimization using compiler  :- in this step , there is interpreter, chrome's interpreter is called "ignition interpreter", this interpreter takes the AST(abstract syntax tree) generated in the previous step and converts that into "byte code" which can be executed now. But in between when ignition interpreter converts the code into byte code sometimes it sees some multiple times reused code(also called hot code), Like some function which has been called multiple times so when the interpreter sees this type of hot code , the interpreter gives this hot code to the compiler , chrome's compiler is called "Turbo Fan", So turbofan compiler takes the hot code and optimizes it and converts it to machine code which can be easily executed and the compiler does it because as the hot code is used multiple times so the js engine considers that this kind of code can be optimized more, Now we learnt about conversion to the bytecode using interpreter and also the optimization of code using the compiler but there is another process happens in this phase which is known as de-optimization. So when the interpreter gives some hot code to the compiler for optimization, The compiler makes some assumptions about the code especially about the types of the data ,for example We have sum(num1,num2) function , Which has been used multiple  times , So the interpreter treats it as hot code and gives it to the compiler, Now first time when the compiler sees the code it sees that it is called using two numbers so the compiler assumes that the type of the passed arguments Will be numbers Next time when it will be called and then next 34 times the function is also called using numbers so all of these times the assumptions were correct that is why the code will be executed very fast but suddenly the compiler sees that this time the arguments are not numbers instead this time these are two strings so the user has passed two strings as the arguments of the functions and as we already know that javascript can perform  String concatenation so that is completely fine but as this function call makes the assumption of the compiler false, Immediately the compiler gives the function back to the interpreter for de-optimizing it and the interpreter again converts the function into byte code which can be executed next, So all of these processes of converting the code to byte code or optimizing the code using compiler or even de-optimizing the code all of these things happens together so fast. Even more things like inline caching ,copy elision and many more thing happens at the same time to optimize the code , and run it faster.

//* And in the same time, garbage collector is working with all of this,
//*V8's garbage collection (GC) automatically manages memory in JavaScript, freeing up unused memory to prevent crashes and slowdowns. It employs a two-stage process: minor GC (Scavenger) for the young generation and major GC (Mark-Compact) for the entire heap. These stages utilize different techniques like incremental, concurrent, and parallel processing to optimize performance. [1, 2, 3, 4, 5]
/* Below is detailed overview but it is not important to remember above is enough
* Here's a more detailed breakdown: 
* 1. Memory Allocation and the Heap: 
* 
* • V8 uses a heap to store objects, arrays, and functions. [2]  
* • When an object is no longer reachable (no longer referenced), it becomes * garbage. [3]  
* • V8 automatically identifies and removes garbage, freeing up memory for new * allocations. [3]  
* 
* 2. Minor Garbage Collection (Scavenger): 
* 
* • Focuses on the young generation, where newly created objects reside. [1, 3]  
* • The Scavenger divides the heap into "from" and "to" spaces, using a "copying" * method. [3, 6]  
* • Objects are copied from the "from" space to the "to" space if they are still * reachable. Unreachable objects are left behind and reclaimed. [3, 6]  
* • This process is relatively fast and frequent, reclaiming memory from short-* lived objects. [1]  
* 
* 3. Major Garbage Collection (Mark-Compact): 
* 
* • Deals with the entire heap, including the older generation. [1, 7]  
* • The Mark-Compact algorithm identifies reachable objects and moves them to * reclaim fragmented memory spaces. [7]  
* • This process is more resource-intensive and can cause pauses in program * execution. [1, 3]  
* • V8 uses incremental, concurrent, and parallel techniques to reduce the impact * of these pauses. [3, 5]  
* 
* 4. Optimization Techniques: 
* 
* • Generational Hypothesis: Most objects die young, so minor GCs are more * frequent and efficient. [3]  
* • Incremental GC: Divides the major GC into smaller steps, reducing pauses. [3]  
* • Concurrent GC: Allows the main thread to continue execution while garbage * collection runs in the background. [3, 5]  
* • Parallel GC: Uses multiple threads to speed up the garbage collection process. * [3, 5]  
* 
* 5. Triggers for Garbage Collection: 
* 
* • Garbage collection is often triggered by memory allocation failures. 
* • If V8 cannot allocate memory for a new object, it will attempt to collect * garbage. If it fails after a few attempts, the process may crash. [3]  
* 
* In essence, V8's garbage collection is a sophisticated process that balances * performance and memory management by: 
* 
* • Dividing the heap into generations to optimize garbage collection frequency. 
* • Using different techniques (copying, mark-compact) for different generations. 
* • Employing incremental, concurrent, and parallel techniques to minimize * performance impact. [1, 3, 5, 6, 7, 8]  
⁡
*/

//* v8 also use a garbage collector named "Oilpan". Oilpan implements a Mark-Sweep garbage collector where garbage collection is split among two phases: marking where the managed heap is scanned for live objects, and sweeping where dead objects on the managed heap are reclaimed.
//* there is another garbage collector named orinoco.
//* We can read about all of these garbage collectors in v8.dev (official site of v8) , in their docs and blogs. every thing is written their.
//* to see the whole v8 engine execution process see this image - "images\whole v8 engine execution diagram.jpg".

//! ⁡⁢⁣⁡⁢⁣⁢⁡⁢⁣⁡⁢⁣⁡⁢⁣⁢Season 1 - Episode - 9 - Libuv & Event loop notes

//* now we will learn about how libuv works behind the scenes

//* as we learnt about v8 engines that it has a call stack,garbage collector,memory heap inside it.
//* similarly inside libuv , it has event loop, call queue and thread pool.
//* see image - images\different parts of libuv.jpg

//* So we know that V8 engine of loads or delegates the asynchronous tasks to libuv , After some time when a task is completed ,the callback function of that task, goes to the callback queue And wait until the call stack of the v8 engine is  idle/empty, Because until the V8 engine is blocked so the main thread is blocked, The libuv can't push any callback function into it so libuv has to wait till the call stack is empty, And the event loop continuously watches the call stack and the callback queue so the event loop watch in the call stack if it is empty or not, and event loop watches the callback queue that if any callback function is waiting in the queue or not,
//*So whenever event loop see some callback functions is waiting in the callback queue, it checks if the call stack is empty or not, it has wait till the call stack is empty, as as soon as  the call stack is empty , event loop can now take the callback function which has been waiting in the callback queue and push it to the call stack for execution, wrapping it inside a function execution context.

//? but what happens when multiple tasks are completed at same time, like - a api call, setTimeout, and file reading is completed at the same time, and waiting in the callback queue, so what will be execution order of all these tasks? Will api callback will be pushed first or settimeout or file read callback?
//* to understand thee answer of above we have to understand how the event loop works behind the scenes.
//* See image - images\event loop phrases.jpg
//* How to understand the working process of event loop first we have to understand The phases happens inside the event loop so we can treat all of the phases as steps, and these steps runs one after another in a cyclic order continuously while running the code, the phases are :-
//! 1. Timer : - if any SetTimeOut ,SetInterval waiting the callback queue event loop push that them to call stack
//! 2. Pool :- very importing phrase/period. In this phrase I/O callbacks like - incoming connections(data request from user), api calling , fs (file system reading), crypto function calls, http.get() functions are pushed inside the callback queue.
//! 3.Check:- SetImmediate() is pushed
//! 4.Close :- Socket.on("close") is pushed

//* Show event loop has these four important phases so actually there are more phases but but these phases are the most important phases happens behind the scenes and in each phase the callback functions related to that phase gets pushed into the call stack when it is empty and the event loop is continuously running this four phases in a cyclic order and on the other hand also continuously checking the call stack if it is idle/empty.
//! But before every phase starts event loop Runs a priority cycle which is basically checking if there is any process.nextTick() or Promise Callback , Waiting in the callback queue or not and if any process.nextTick() or Promise Callback is waiting In the callback queue then instantly it push those callback functions to the call stack when it is empty and these priority cycle repeats every time before going to any phase.
//! So the when the event loop starts first even before going to the timer phase first it will repeat this priority cycle so it will check if there is any  process.nextTick() or Promise Callback waiting in the call back queue then event loop will push them first in the call stack then it will enter into the any phrase.
//* inside the the callback queue there are different queues for every phase related callback functions, like - for timer related callback functions there is separate queue , for poll related callback functions there is separate queue, for check related callback function there is separate queue, for close related callback function there is separate queue,for promise related callback function there is separate queue and for process.nextTick()  there is separate queue.
//* So the event loop cheques every queue inside the callback queue at a time and also checks if the call stack is empty so it can push the callback functions from the callback queue.

//* lET'S understand it using a code example
/*
const fs = require("fs");
const a = 100;
setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log(`file reading completed :-${data}`);
});

setTimeout(() => {
  console.log("SetTimeOut");
}, 0);

function printA() {
  console.log("a = ", a);
}
printA();
console.log("Last line of the file");
*/
//* Now we will discuss how the above code will be executed through the v8 engine and Libuv, So first of all it will require the file system as we need it here then in the second line we have a constant a named so v8 engine will save this variable inside the memory heap, Now in the next line it sees a set immediate function so as this is a asynchronous function V8 engine will immediately offload this task to libuv, And v8 engine will continue its execution, Now libuv sees that it is a setImmediate function so immediately it push that to the callback queue For execution but it will be only executed once the check phase comes, Now in the next line V eight engine again sees That is a file system reading function so as this is the asynchronous function immediately v8engine delegates this task to libuv, Now behind the scenes we will read this file So while reading the file it will register the callback function and now it has not pushed the call back function into the queue because it is still reading the file meanwhile the V8 engine continues to execute the code and in the next line it sees a set timeout function with a zero second timer so as this is a asynchronous function immediately v8 engine offloads this task to libuv, And now libuv Sees that it is a set time out Function with zero seconds of time so libuv immediately push this function to the callback queue, Now we v8 engine will continue to execute the code, Now V8 engines is that it is a function declaration in the next line so it saves the function inside the memory heap and goes to the next line and sees that the function it just save inside the memory heap is now called so it gets the function from the memory heap and immediately executes that and print the value of a constant to the console and in the next line it again console logs last line of the file now as this all synchronous code is executed now the global execution context pops out of the call stack and now the call stack is empty so till now the event loop of libuv Was continuously checking if the call stack is empty or not, Now after the call stack is empty Now the event loop first of all see the Priority cycle so it will see if there is any process next function or any promise callback waiting in the callback queue or not then it will go to the timer phase and it sees that  a settimeout function is waiting inside the callback queue, So immediately it will wrap that inside a function execution context and push that inside the call stack and console log of setTimeout will be printed ,now again it runs the priority cycle and it is no promise callback or process.next tick function is waiting in the callback queue so now it enters to the poll phase, But as the file reading is not completed yet so there is no callback function related to poll phase is waiting in the Callback queue so again it goes through the priority cycle and it see nothing is there, So now it enters to the check phase and it says that a set immediate callback is waiting inside the callback queue so immediately it push that to the call stack after wrapping it inside a function execution context, And in the console Set immediate will be printed, Meanwhile the file reading is completed so  libuv pushed the callback function to the callback queue, And the event loop has now finished the check phrase And now it will again check the priority cycle and it will see nothing is there So now it will enter to the close phase and again see that there is nothing related To this phase in the callback queue so now it will again enter to the priority cycle and it will find nothing related to it and now again it will enter through the timer phase and it will see nothing related to it and now it will again enter to the priority cycle and it will again see that there is nothing related to it and then it will again enter to the poll phrase And in the callback queue now it will see that the callback function of the file system reading is waiting so immediately it will push that to the call stack after putting it inside a function execution context and it will be executed and the console log will be printed in the console so that is how this above code will be executed so in this example we can see that as the set timeout we used with zero seconds Is executed in the timer phase but after that when the poll phase comes before the poll phase it ran the priority cycle and when it entered to the poll phase It should run the callback function of the file system reading but that has not happened because at that time the file system reading was not completed so libuv Was not pushed the callback function of the file system reading to the callback queue so that's why the event loop again ran the priority cycle and went to the check phrase And executed the set immediate function and then after completed the whole cycle when it again came to the poll phase second time now it sees that the file system Reading is completed and the callback function of the file system reading is waiting in the callback queue so now in the second cycle it prints the console log of the file system reading System reading took some time that is why it has happened.
//* So the out of the above code, in the console the output will be
/*
 * a =  100
 * Last line of the file
 * SetTimeOut
 * setImmediate
 * file reading completed :-: hello world⭐⭐*/

//*Let's understand another example :-
//* see image - images\event loop code execution example.jpg
/*
const fs = require("fs");
const a = 100;
setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise Resolved").then(console.log);

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log(`file reading completed ${data}`);
});

setTimeout(() => {
  console.log("SetTimeOut");
}, 0);

process.nextTick(() => console.log("Process.nextTick"));

function printA() {
  console.log("a = ", a);
}
printA();
console.log("Last line of the file");
*/
//* Now we will see how the above code will be executed as the above code is the mixture of synchronous and asynchronous code so first of all when we will start to execute the code the javascript engine will wrap all of this code inside a global execution context and push that inside the V8 engine's call stack Now on the first line we have required the file system module so it will first get the file system module from the node and now it will come to the next line and it says that we have created a constant A so js engine will save this constant inside the memory heap then move to the next line and it sees a setImmediate function, So as this is a asynchronous function so V8 engine will immediately offload this task to libuv, and libuv Says that this does not take any time so immediately it will put it inside the check queue inside callback queue, But right now live we can't push this callback function inside the call stack because the call stack is not empty so the V8 engine meanwhile keeps running and again it sees that it is a promise so again v8 engine Delegates this task to libuv And as this is immediately resolved so libuv puts seat inside the promise callback queue present inside callback queue, And the V8 Engine continues the code execution and now it says that it is a file system reading operation so again as this is an asynchronous task that is why V8 engine offloads these tasks to libuv, and libuv Registers the callback function and starts the file reading right now it has not pushed inside the callback queue because the file reading operation takes some time like 200 milliseconds now the V8 engine again moves to the next line and it sees that it is a set timeout function with a zero second timer so as this is also a asynchronous task so v8 engine Delegates this task to libuv, as libuv sees That it has a 0 second timer so immediately it pushes the callback function inside the timer callback queue present inside the callback queue and meanwhile V8 engine is continuing the code execution and it says that it is a process.nexttick() Function so as this is again asynchronous task so v8 engine of loads also this work to libuv, and libuv sees That it does not take any time so immediately push it inside process.nextTick queue present inside the callback queue, and remember this queue has the highest priority, and second highest is promise queue, Meanwhile the V8 engine is continuing the execution and it says that it is a function declaration named printA So it saves it inside the memory heap and in it moves to the next line and it sees that it is the function call so it calls the function and prints the value a constant to the console, And in the Again a console log so it prints "last line of the file", And now after executing all of these synchronous code v8 engine a sitting idle, Immediately when libuv's event loop sees that the call stack is empty, it starts checking the callback queues, with the specific order it follows, So first it will Enter into the priority cycle and it will check the priority queues , so first it checks process.nextTick queue and it has a callback function waiting so it prints to the console - process.nextTick, and then it checks the promise queue so it sees a callback present , so push the callback to callstack and execute it, so in the console Promise is resolved will be printed, now it enters to the timer phrase and it checks the timer queue and see a setTimeout callback is waiting so ity immediately push that to the call stack and execute it, and in the console it prints - timer expired, now again it enter to priority cycle and checks the priority queues and see nothing present so , it enters to poll phrase and checks the poll queue and sees nothing because the file system reading is not completed yet, so again it enter to priority cycle and checks the priority queues and see nothing present so , it enters to the check phrase and sees that a setImmediate callback is waiting so push that to call stack and execute it and prints - setImmediate to the console, and enter to priority cycle and checks the priority queues and see nothing present so it enters to close phrase and see nothing ,so enter to priority cycle and checks the priority queues and see nothing present so and then timer phrase and see nothing so enter to priority cycle and checks the priority queues and see nothing present so it again enters to the poll phrase and this time it sees that the file reading is completed and libuv has pushed the callback to the poll callback queue present inside the callback queue so , it puts the callback function to the call stack and execute it, and print - file reading completed : hello world⭐⭐, and now the function execution context also goes out of the call stack.
//*  So the console output will be :-
/*
 * a =  100
 * Last line of the file
 * Process.nextTick
 * Promise Resolved
 * SetTimeOut
 * setImmediate
 * file reading completed : hello world⭐⭐
 */

//! waiting at poll phrase when event loop is idle/empty:- So in the previous example we have seen that in the first cycle Event loop executed the timer callbacks related callbacks promise related callbacks cheque related callbacks close related callbacks but in the second cycle when the file system reading is finally completed then it executed the poll related callback which was the file reading so when the event loop is idle or empty All of the callback queues are empty because they have already completed the task in this scenario the event loop comes to the poll phase and wait for some time till some data related to poll phase comes like in the above scenario after completing the first cycle the event loop was idle so it was waiting at the poll phase to come some callback function and when the file reading was completed and in the poll callback queue When the callback function came event loop immediately take that callback function wraps it inside a function execution context and push that to Call Stack
//! that's why the event loop of libuv is called semi-Infinite loop because it waits at the poll phrase when event loop is idle.
//? don't confuse this libuv's event loop with browser's event loop because both works in a very different way, we have above learnt how the event loop of libuv works inside node js.

//* now We will understand another example:-
//* see image - images\event loop code execution example-2.jpg
/*
const fs = require("fs");
setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"));

Promise.resolve("Promise is resolved").then(console.log);

fs.readFile("./file.txt", "utf8", (err, data) => {
  setTimeout(() => console.log("2nd Timer expired"));

  process.nextTick(() => console.log("2nd next tick"));

  setImmediate(() => console.log("2nd setImmediate"));

  console.log("file reading completed", data);
});

process.nextTick(() => console.log("next tick"));

console.log("last line of the file");
*/
//* Now we'll try to understand how the above code will be execute through  the v8 engine and libuv because most of the code is asynchronous. So first , js engine will wrap the whole code inside a global execution context and put that inside the call stack now line by line the code will start to execute, at first line we have setImmediate function so it will be delegated to libuv, and libuv will push it to the check queue inside call back queue, now v8 engine continuing the execution and sees a setTimeout with 0 sec timer so it will be also offloaded to  libuv and libuv will push it to timer queue, and v8 will continue execution and it sees that it is a resolved promise so it will give the promise to libuv and libuv will push that to the promise queue , and v8 will continue to execute the code and in the next line it will see, it is  a file reading task so it will offload it to libuv and libuv will register the callback and start to read the file but now it will not push the call to qny queue till the reading is completed , v8 engine continue the execution and next it sees  process.nextTick() so it will delegate it to libuv, and libuv will push it to nextTick queue and v8 goes to the next line and sees console.log , so it prints "Last line of the file".
//* Now the sync code is executed and as soon as event loop sees that the call stack is empty , event loop starts the check the call back queues to push the callbacks to call stack, So, first it checks the priority queues , So first it will check the nextTick queue and push the waiting callback to the callstack and nextTick will be printed in the console, now event loop checks the promise queue ans push the callback to the call stack and print promise is resolved in the console, now it goes to timer phrase and checks the timer queue and push the set timeout callback to call stack and print timer expired in the console and then again it checks the priority queues and finds nothing so it goes to poll phrase and finds nothing because file reading is not completed yet , so it checks the priority queues and finds nothing and then enter to check phrase and push the setImmediate callback to the call stack and print setImmediate then it completes the whole cycle once and as the event loop is idle, so waits at the poll phrase, and meanwhile file reading is completed so event loop push the file reading callback to the poll queue and event loop quickly push that to the call stack as call stack was empty, now call stack starts to execute this callback and in the first it sees a setTimeout with 0 sec so offloads the task to libuv and libuv push that to timer queue present inside callback queue,now v8 engine continues the execution and goes to next line see another process.nextTick() , so it offloads to libuv and libuv push it to next tick queue the in the next line v8 engine sees setImmediate so again v8 offloads it libuv and libuv push that to check queue then v8 sees in the next line that it is console log so quickly it prints  * file reading completed : hello world⭐⭐. MeanWhile , remember while file reading was completed event loop was at poll phase,
//* now again some callbacks are waiting in the queue , so many developers think that again event loop will go the timer phrase but answer is no , it will not go to timer phrase,after poll phrase as expected it checks the priority queues, and first it will push process.nextTick() from the nextTick queue to call stack and print 2nd nect tick to console then goes to the check phrase and from the check queue push setImmediate to call stack and print 2nd setImmediate, and again check priority queues then close phrase then again priority queues then it enters to the timer phrase and from the timer queue it push the setTimeout callback to the call stack and print 2nd timer expired.
//* So the final output in the terminal will be :-
/*
 * last line of the file
 * next tick
 * Promise is resolved
 * Timer expired
 * setImmediate
 * file reading completed : hello world⭐⭐
 * 2nd next tick
 * 2nd setImmediate
 * 2nd Timer expired*/

//! Another important example related to process.nextTick():-
/*
const fs = require("fs");
setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"));

Promise.resolve("Promise is resolved").then(console.log);

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("file reading completed", data);
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  console.log("next tick");
});

console.log("last line of the file");
*/
//* Now we already know how the above code will be executed but one thing about the nexttick function is new in this code so above code has the next tick function which has another next tick function inside that. So in the code execution first the global execution context will be created and after requiring the file system module the set immediate function will go to libuv and wait in the check queue then the set timeout will go to the libuv and wait in the timer queue then the promise will be offloaded to Libuv and wait inside the promise queue then the file system reading will go to libuv and wait inside the pole queue then process.nexttick will go to libuv and wait inside nextTick queue. and then console log - last line of the file will printed.
//* now the call stack is idle, so event loop will start to check the callback queues , so first it will check the priority queues and inside nextTick queue , it sees a call back so it push that to call stack, now call stack sees another process.nextTick() inside it so again it offloads that to libuv and in the console prints nextTick, but this time event loop will not go to check the promise callback queue because the process.nextTick has the highest priority so again event loop will push this inner callback to nextTick Queue and event loop will take the callback and push to call stack, and now the inner nextTick will be printed in console.
//* So it does not matter how many nested nextTicks are present inside a process.nextTick() , as these are high priority these will be executed first, because event loop will push them first to call stack,now it checks the promise queue and and push promise callback to the call stack and print promise is resolved and now event loop goes to timer phrase and check timer queue and push set time out callback to call stack and prints timer expired then again checks priority queues, then poll queue and sees it is empty then again checks priority queues and sees it is empty so goes to check phrase and push setImmediate to call stack and print setImmediate in console.then after completing the rest cycle waits at poll phrase as the event loop is idle and all callback queues are idle, then file reading i s completed and file reading callback comes to the poll queue and event loop push that to the call stack and prints  * file reading completed : hello world⭐⭐ in the console.

//* So the file output will be:-
/*
 * last line of the file
 * next tick
 * inner nextTick
 * Promise is resolved
 * Timer expired
 * setImmediate
 * file reading completed : hello * world⭐⭐*/

//! ⁡⁢⁣⁡⁢⁣⁢⁡⁢⁣⁡⁢⁣⁡⁢⁣⁢Season 1 - Episode - 10 - Thread pool in libuv
//* Tick :- inside libuv's event loop each cycle ,so completing all of the phrases  once is called tick.

//* in the previous lesson we have learned that event loop has 4 main phrases - timer , poll , check and close. But if check the node js docs of event loop[see diagram image in this url - "https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick"] . we can see that after the timer phrase two more phrases are mentioned their , first is pending callback phrase and second is idle,prepare phrase.
//* pending callback phrase - after timer phrase we know priority cycle will be checked after after that this pending phrase comes . In this phrase ,it executes I/O callbacks deferred to the next loop iteration.So , i/o callbacks are executed in the poll phrase we know that, but suppose so many api calls , fs reading, https requests , are waiting in the poll queue , but there is limit in the poll queue, unless the other queues will starve/other queues will not get chance to execute their callbacks , so sometimes , event loop defer / reschedule some I/O callbacks for the next cycle, and those deferred callbacks will execute in the this pending callback phrase.
//* idle ,prepare phrase:-This phrase is only used internally. So before entering into poll phrase libuv performs some internal idle and prepare checks in this phrase, like calculating the timer, suppose , all the queues are empty , and some setTimeouts of 5 sec, 10 sec ,15 secs are running, so in this phrase , event loop sees the nearest timer which is 5 sec in this case, and decide that in the poll phrase it can wait upto 5 secs to poll callbacks and push to the call stack of v8 and after 5 sec it has to start the cycle so it can go to the timer phrase to execute the callbacks from the timer queue through pushing them to call stack of v8.
//* these above phrase are not that important , but we should know them as they are mentioned in the official documentation of node js.

//* But if we go to libuv is doc , the diagram is more complex , libuv's diagram is also explaining the same thing but in more detailed manner. We can that using this link and read the whole explanation and see the diagram by libuv :- "https://docs.libuv.org/en/v1.x/design.html#the-i-o-loop"
//* So the diagram of libuv explains that first it initiates the loop timer then it runs the due timers so basically this is the timer phase then it sees that if the loop is alive or not then if the loop is alive then it will enter to the pending callback phase we just discussed above then it will run the idle handles we also discussed this above then it will run the prepared handles we also discussed this above then these were basically the cheques before running the pole phase then after this it will enter into the pole phase where it runs the input output operations then it runs the check handles here basically it runs the set immediate so this is basically the check phrase Then it cheques the closed queue so basically it calls the close callbacks wear a socket related closing callbacks are closed then again it updates the loop time and run the due timers then it again goes back to the cycle so this diagram is a bit longer but it explains the same thing we learned.

//? what is thread pool inside libuv?
//* see image - "images\libuv threadpool.jpg"
//* Whenever we give some file system Related task or dns lookup task or any crypto related method or any user specified input in this specific cases we already know that V8 engine off loads the task to libuv Because these tasks are time consuming tasks which will block the main thread that's why V8 engine delegates the work to libuv.Now inside libuv there is a thread pool. Which has by default 4 threads .We already know a thread means a container where some process can happen. A computer can have many many threads , but libuv occupies 4 threads by default for thread pool.Now all these task like fs related async  methods like fs.readfile() , dns.lookup() , or crypto related async methods like crypto.pbkdf2() are time consuming and we don't want to block the main thread , so v8 offloads these async operations to libuv and libuv does these operations inside its thread pool. So when we give a fs.readfile() task, libuv will give that to one thread inside the thread pool , that thread will request the file from os and read that and give that to v8 after completion.
//* now let's say we have give 5 file reading tasks to libuv simultaneously ,so as the by default size of threads inside libuv is 4 , So first libuv libuv perform 4 tasks and when one of the thread is free after completing the task then only the fifth task will be executed through the 5th thread.
//* because of this thread pool we can perform time consuming blocking tasks in this thread pool without blocking the main thread.
//!increasing thread pool size:- we can increase the by default size of threads inside the thread pool  is 4, but it can be changed at startup time by setting the UV_THREADPOOL_SIZE environment variable to any value (the absolute maximum is 1024).
// !For Mac :- in the js file we are writing code we have to just write in the above portion:- process.env.UV_THREADPOOL_SIZE= 8; //*or any
//! For windows : - while executing code in the terminal write -"$env:UV_THREADPOOL_SIZE=8; node allLessonNotes.js"
/*
*The thread pool in libuv is used for tasks that are inherently blocking at the operating system level and would otherwise stall the event loop. These typically include:
* File system operations (fs module in Node.js).
* DNS resolution (e.g., dns.lookup() and * getaddrinfo).
* Certain cryptographic functions.
! not api calls or data requests*/
//? now we will see using 5 crypto functions how the code execution will behave in the terminal because the thread pool has 4 threads by default, so the fifth one should be executed after some time once any thread is free and 4 will be executed almost at same time faster than 5th one, and we will see that the order of the execution is not guaranteed because when 4 thread are were occupied and doing the crypto task , any of the give thread which returns the answer first will will , that's why order of the tasks may not be same, and we will also see how we can increase or decrease the size of threads in thread pool and how that effects the behavior of execution.

// const crypto = require("crypto");
/*
crypto.pbkdf2("secret", "salt", 5000000, 64, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log("1st key hashing - Done");
});
crypto.pbkdf2("secret", "salt", 5000000, 64, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log("2nd key hashing - Done");
});
crypto.pbkdf2("secret", "salt", 5000000, 64, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log("3rd key hashing - Done");
});
crypto.pbkdf2("secret", "salt", 5000000, 64, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log("4th key hashing - Done");
});
crypto.pbkdf2("secret", "salt", 5000000, 64, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log("5th key hashing - Done");
});
*/
//? Now we will understand how networking is handled using libuv
//* So when we are running a web server and the user using our api to request some data, so that will not be handled using thread pool of libuv.
/*
 *1. Socket Creation and Binding
 *When an application using libuv (like a Node.js web server) starts to listen for incoming HTTP connections, it instructs libuv to create a listening socket.
 *Libuv then uses the OS's networking APIs (like those from the BSD socket interface) to create and bind this socket to a specific port and IP address, according to libuv documentation.
 * 2. Registering with the I/O Polling Mechanism
 * Instead of constantly checking if there's an incoming connection, libuv registers the listening socket with the Operating System's I/O event notification system.
 *Different operating systems have different underlying scalable I/O event notification mechanisms present in the kernel level for this:-
 *Linux: uses epoll.
 *macOS/BSD: uses kqueue.
 *Windows: uses IOCP (I/O Completion Ports). (also known as wepoll)
 *3. Asynchronous Connection Acceptance
 *When a client initiates an HTTP request, the OS detects the incoming connection on the listening socket and notifies libuv through its registered I/O mechanism.
 *Libuv then uses "uv_accept" to accept the connection and creates a new socket for the client connection.
 *This process is asynchronous: libuv doesn't block the entire application while waiting for a connection.
 *4. Reading and Writing Data (Non-Blocking I/O)
 *Once a connection is established, libuv registers the client socket with the OS's I/O polling mechanism, signifying its interest in read events (when the client sends data) and write events (when the application needs to send data back to the client).
 *Instead of blocking while reading or writing, libuv instructs the OS to notify it when data is ready to be read from the socket, or when the socket is ready to be written to.
 *When the OS has data for the application or is ready to accept data from the application, it triggers an event that libuv's event loop can then process.
 *Libuv uses stream operations (like uv_read_start and uv_write) for interacting with the client.
 *5. DNS Resolution (with Thread Pool involvement)
 *If the HTTP request involves resolving a hostname (e.g., www.example.com), libuv does utilize its thread pool for this part.
 *DNS resolution (specifically, uv_getaddrinfo in libuv) is a potentially blocking operation at the OS level.
 *To avoid blocking the main event loop, libuv offloads this task to one of the threads in its thread pool.
 *Once the DNS resolution is complete, libuv receives the result and processes it on the main thread, continuing the connection process.
 *In Summary
 *Libuv acts as a bridge between the application code (like Node.js) and the operating system, abstracting the complexities of platform-specific asynchronous I/O operations. It employs the OS's event notification systems (epoll, kqueue, IOCP) for efficient, non-blocking network I/O, using a thread pool only for tasks like DNS resolution that might otherwise block the event loop. This allows Node.js applications to handle numerous concurrent HTTP requests efficiently without being blocked by individual I/O operations.
 */

//* Easy description of above:-
//* in computer , there is hardware, on top of that we have kernel, on top of that we have processes(like node js).So, this process has to communicate with kernel to handle networking requests, so in the kernel level we have epoll,kqueue,IOCP.
//*In the libuv library, when it interacts with the OS for networking tasks, it uses sockets. Networking operations occur through these sockets. Each socket has a socket descriptor, also known as a file descriptor (although this has nothing to do with the file system).
//*When an incoming request arrives on a socket, and you want to write data to this connection, it involves blocking operations. To handle this, a thread is created for each request. However, creating a separate thread for each connection is not practical, especially when dealing with thousands of requests.
//*Instead, the system uses efficient mechanisms provided by the OS, such as epoll(on Linux) or kqueue (on macOS. These mechanisms handle multiple file descriptors (sockets) without needing a thread per connection.
//*Hereʼs how it works:
//*epoll (Linux) and kqueue (macOS) are notification mechanisms used to manage many connections efficiently.When you create an epoll or kqueue descriptor, it monitors multiple file descriptors (sockets) for activity.
//*The OS kernel manages these mechanisms and notifies libuv of any changes or activity on the sockets. This approach allows the server to handle a large number of connections efficiently without creating a thread for each one. The kernel-level mechanisms, like epoll and kqueue , provide a scalable way to manage multiple connections, significantly improving performance and resource utilization in a high-concurrency environment. */

//*File Descriptors (fds) and Socket Descriptors
//*File Descriptors (FDs) are integral to Unix-like operating systems, including Linux and macOS. They are used by the operating system to manage open files,sockets, and other I/O resources.
//*Socket descriptors are a special type of file descriptor used to manage network connections. They are essential for network programming, allowing processes to communicate over a network.
//*Event Emitters
//*Event Emitters are a core concept in Node.js, used to handle asynchronous events. They allow objects to emit named events that can be listened to by other parts of the application. The EventEmitter class is provided by the Node.js events module. Here's a brief overview:
//*Creating an EventEmitter: You create an instance of EventEmitter and use the on method to register event listeners.
//*Emitting Events: Use the emit method to trigger events and pass data to listeners.
//* Handling Events:Listeners (functions) handle the emitted events and perform actions based on the event data.
//*Streams
//*Streams in Node.js are objects that facilitate reading from or writing to a datasource in a continuous fashion. Streams are particularly useful for handling large amounts of data efficiently.
//*Buffers
//*Buffers are used to handle binary data in Node.js. They provide a way to work with raw memory allocations and are useful for operations involving binary data, such as reading files or network communications.
//*Pipes in Node.js
//*Pipes in Node.js are a powerful feature for managing the flow of data between streams. They simplify the process of reading from a readable stream and writing to a writable stream, facilitating efficient and seamless data processing

//* epoll uses a red-black tree data structure.Its space and time complexity is O(1) which is very fast previously it was O(n) which was slower previously.
//* the timer queue uses min heap data structure.
//* Some important learnings:-
//*1.Don't block the main thread.
//* Don't use sync methods,heavy json objects(parsing,stringify on large objects on the main thread),complex regex in main thread,complex calculation or loops in main thread.
//* data structure is very important
//* naming is very important.Because even in repos like node , developers make mistakes related naming, like they should have been named setImmediate() as process.nextTick() because setImmediate actually happens after oen tick/cycle but they name it setImmediate. and process.nextTick() should be named setImmediate() because it happens after each phrase.Even in node's website they mentioned this mistake, but they can't change it because it will break many people code written before.
//*There is lot to learn.

//! ⁡⁢⁣⁡⁢⁣⁢⁡⁢⁣⁡⁢⁣⁡⁢⁣⁢Season 1 - Episode - 11 - Creating a server
//* When we talk about server wh
/*
 * What is a Server? The term "server" can refer to both hardware and software, depending on the context.
 * Hardware
 *   A physical machine (computer) that provides resources and services to other computers(clients) over a network.
 * Software
 *  An application or program that handles requests and delivers data to clients.
 *
 * Deploying an Application on a Server When someone says "deploy your app on a server," they usually mean:
 *     Hardware Aspect: You need a physical machine (server) to run your application. This machine has a CPU, RAM, storage, etc.
 *      Operating System OS The server hardware runs an operating system like Linux or Windows. Your application runs on this OS.
 *      Server Software: The software (e.g., a web server like Apache or an application server built with Node.js) that handles requests from users.
 *
 *AWS and Cloud Computing AWS Amazon Web Services) provides cloud-based resources, including servers.
 *   EC2 Instance: When you launch an EC2 instance, youʼre essentially renting a virtual server from AWS. AWS manages the underlying hardware, and you deploy your application on the virtual server.
 *   Scalability: AWS allows you to easily scale your resources. For example, you can increase the memory or processing power of your server with a few clicks, which is not as straightforward on a physical laptop or desktop.
 *    Reliability: AWS servers are equipped with constant power, internet backup, and redundant systems to ensure high availability, which is difficult to achieve with a personal computer.*/

//* Can You Use Your Own Laptop as a Server?
//* A: Yes, but with limitations:Hardware Constraints Your laptop likely has limited RAM, CPU, and storage, which may not be sufficient for handling a large number of requests. Internet Connectivity A home internet connection is typically less reliable and has dynamic IP addresses, making it less suitable for hosting a publicly accessible server.
//* Power and Maintenance:- Ensuring that your laptop is always on, connected to the internet, and has backup power is challenging. AWS handles all these concerns for you.
//* Software Servers in Node.js :-When you create an HTTP server in Node.js, you are building an application that listens for requests from clients and responds to them. This is an example of a software server

//* Client-Server Architecture[see image - images\client server architecture.png]
/*
 *The term "client" refers to someone accessing a server. Imagine a user sitting at a computer wanting to access a file from a server. For this, the client needs to open a socket connection (not to be confused with WebSocket). Every client has an IP address, and every server has an IP address as well. The client could be a web browser.
 * To access the file, the client opens a socket connection. On the server side, there should be an application that is listening for such requests, retrieves the requested file, and sends it back to the client
 * There can be multiple clients, and each client creates a socket connection to get data. After the data is received, the socket connection is closed. If the client needs to make another request, a new socket connection is created, data is retrieved, and the connection is closed again.
 * Sockets operate using the TCP/IP protocol (Transmission Control Protocol/Internet Protocol).
 *
 */
//? What is a protocol?
/*
 *A protocol is a set of rules that define how computers communicate with each other. Protocols determine the format in which data is sent between devices
 * FTP (File Transfer Protocol): Used for transferring files.
 * SMTP (Simple Mail Transfer Protocol): Used for sending emails.
 * HTTP :- When we talk about a web server, we usually mean an HTTP server. HTTP (HyperText Transfer Protocol) is a language or set of rules that defines how clients and servers communicate. Essentially, when we create a server, it's often built using HTTP to handle basic data exchanges. Toward the end, we'll demonstrate how to create a server.
 */
//? Q: When you make a server request, how is data sent?
//* see image - images\data exchanging process between client and web server.png
//* Data is sent in chunks, and these smaller units are known as packets. Whenever data is transmitted, it's broken down into these packets. Remember the term "packets." The TCP/IP protocol is responsible for sending these packets and ensuring that the data transmission is properly managed. In Node.js, there are concepts of streams and buffers that are used for handling and writing code related to data transmission.Streams is basically how the data is flowing from the server to client and buffer is the process of sending the data in chucks/packets using the stream.
//*We don't generally communicate using IP addresses; instead, we use domain names like youtube.com. However, at the end of the day, everything maps to an IP address. As humans, we donʼt easily understand or remember IPs, similar to how we save contacts with names instead of memorizing phone numbers. Similarly, when we request a URL like youtube.com, internally, it is translated into an IP address. This is where the Domain Name System DNS comes into play.
//*A DNS server manages the mapping between domain names and IP addresses. When you request a website, your browser calls a DNS server to resolve the domain name into an IP address. Once the IP is resolved, a call is made to the server.
//* As a user, you donʼt see what happens behind the scenes. When you request an IP, it goes to the server where an HTTP server processes the request and sends back the video data. This data is sent in chunks, known as streams, and the process involves buffers, which is why you sometimes see the video buffering.

//?  Can I create multiple servers?
//* see image - images\multiple ports on one server.png
//*Yes, you can create multiple HTTP servers. Now, suppose a user is sending a request. How do we know which server it should go to? When I mention creating an HTTP server, it means we are setting up two different Node.js applications. The distinction between these servers is defined by a port, which is a 4-digit number (e.g., port 3000). For example, suppose an HTTP server with IP address 102.209.1.3 is running on port 3000 . This combination of IP address and port number ( 102.209.1.3:3000 ) indicates which specific HTTP server the request should be routed to. Essentially, this means thereʼs a single computer (the server) that can run multiple applications, each with its internal servers. The port number determines which application or server the request is directed to.

//* Mapping Domain Names, IPs, Ports, and Paths to Applications
//* When you enter a domain name like youtube.com , it gets mapped to an IP address by a DNS (Domain Name System) server. The IP address identifies the specific server where the website is hosted. Now, when you combine the IP address with a port number, you can direct the request to a specific application running on that server. The port number acts as a gateway to different applications or services on the same server. For example:
//* 102.209.1.3:3000 could point to a React application.
//* 102.209.1.3:3001 could point to a Node.js application.
//*But there's more! If you add a path to the URL, you can create specific API routes.
//*For example:
//*If you enter youtube.com , the server might direct you to the React application running on port 3000 .
//*If you enter youtube.com/api/... , it might direct the request to a Node.js application running on port 3001
//*Let's consider a scenario with namastedev.com . Suppose you have two applications:
//* A React application running on port 3000 .

//*A Node.js application running on port 3001 .

//*You can set it up so:
//*Requests to namastedev.com go to the React application on port 3000 .
//*Requests to namastedev.com/node go to the Node.js application on port 3001 .
//*This way, you can manage multiple applications on the same server and direct users based on the path they enter in the URL.
//*In large companies, the architecture is often distributed across multiple servers rather than relying on a single server. This approach helps manage different aspects of the application efficiently and ensures scalability, reliability, and performance.
//*Distributed Server Architecture Explained
//****Separation of Concerns:
//*Frontend Server: This server handles the user interface UI of the application. It serves the HTML, CSS, and JavaScript files that the browser needs to render the website. For example, namastedev.com could be hosted on an AWS server that serves both the frontend and backend.
//* Backend Server: This server processes the logic, handles requests, and interacts with the database. Even though the backend might be on the same server as the frontend in some cases, itʼs often separated in larger systems for better performance and security.

//* Dedicated Database Server: The database is typically hosted on a separate, powerful server that is optimized for storing and managing data. When a client makes a request that involves data retrieval or storage, the backend server interacts with this database server to fulfill the request.

//* Media and File Servers: Large files like videos, images, and other media are often stored on specialized servers. These servers are optimized for handling large amounts of data and delivering it quickly. When you request a video from namastedev.com , the video might be fetched from a dedicated media server. Images might also be stored on a different server, often managed by a content delivery network "CDN "to ensure fast delivery to users worldwide.
//*Inter-Server Communication: When a client makes a request, the frontend or backend server might need to communicate with other servers to get the necessary data. For example, if you request a video on namastedev.com , the server might make an API call to another server that hosts the video content, retrieve it, and then send it to the client.
//*Example: namastedev.com Architecture
//*Frontend & Backend: Hosted on an AWS server.
//*Database: Stored on a separate, powerful database server.
//*Videos: Stored on another server, possibly optimized for streaming large media files.
//*Images: Stored on yet another server, potentially managed by a CDN for fast delivery.
//*In many companies, the frontend and backend may also be hosted on different servers. This separation allows each part of the system to be optimized for its  specific role, ensuring better performance and making the system more scalable and resilient. This distributed approach helps large companies manage massive amounts of data and traffic efficiently, ensuring that users have a smooth and responsive experience.
//* see image:- images\communication between different servers and client.png

//? Socket vs WebSockets
//* When a user makes a request to a website, a socket connection is established between the client and the server. This connection is typically used for a single request-response cycle: the client sends a request, the server processes it, sends back the response, and then the socket is closed. This process involves opening a new connection for each request.
//* On the other hand, WebSockets introduce a more efficient method by allowing the connection to remain open. This means that after the initial connection is established, it stays active, allowing for continuous communication between the client and server. Both the client and server can send and receive data at any time without the need to re-establish the connection. This persistent connection is ideal for real-time applications, where continuous interaction is required, such as in chat applications, online gaming, or live updates.

//* now we will learn how we can create our own server:-

//* we will use http module coming from node

const http = require("node:http");

//* to create a server we will use a function available on his http module name http.createServer([option],[requestListener])

const server = http.createServer((req, res) => {
  //* if we want to send some specific response according to the url path we can also do that
  if (req.url === "/getsecret") {
    res.end("there is no secret");
  }
  res.end("hello world"); //* using this end method we finally send back the response at the end after doing any modification if needed.So it we write hello world inside it then it will return hello world as response to the client
}); //* this createServer method returns a new instance of a server like we create instance of a class; now using this server we can listen to the incoming requests.To send back response to client inside the () we write a requestListener function which has two params request and response.
//* to listen to the requests  we have to call a listen() method on the server and mention the port number on which we want to listen for the incoming requests

server.listen(9999); //* we can use any port number

//* now first we have to run this file in the terminal to run the server, and we will see that the code execution is waiting , because it will waiting for the incoming requests from the clients .So let's use our browser as a client to make request to our running server.So our server and browser is running on the same computer, so in the browser we can write localHost:port in this case our port number is 9999 so we have write localhost:9999 to connect our server running here.
//* and we will see it is returning hello world, because from here , using the end()  method we sent the text response hello world.
//* similarly we can host it on aws, and people can hit that ip and get that data back.this is the http server we have created

//! ⁡⁢⁣⁡⁢⁣⁢⁡⁢⁣⁡⁢⁣⁡⁢⁣⁢Season 1 - Episode - 12 - Database sql nosql
//? what is a database ?
//* In computing, a database is an organized collection of data or a type of data store based on the use of a database management system (DBMS), the software that interacts with end users, applications, and the database itself to capture and analyze the data. The DBMS additionally encompasses the core facilities provided to administer the database. The sum total of the database, the DBMS and the associated applications can be referred to as a database system. Often the term "database" is also used loosely to refer to any of the DBMS, the database system or an application associated with the database.
//! learning all types of database is not that important but first two -relational db and nosql is important.
//* Types of databases
// ! Relational DB  MySQL, PostgreSQL
//* Relational databases like MySQL and PostgreSQL use structured tables with predefined schemas, making them ideal for handling complex queries and transactions. They ensure data integrity through ACID properties and are widely used for applications requiring robust, relational data models.

//! NoSQL DB  MongoDB
//*MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, allowing for dynamic schemas. It's highly scalable and ideal for handling large volumes of unstructured or semi-structured data, making it popular for modern web applications.

//* In-memory DB  Redis:
//*Redis is an in-memory database known for its high-speed data processing capabilities. It supports various data structures like strings, hashes, and lists,making it suitable for caching, real-time analytics, and message brokering.
//* Distributed SQL DB  CockroachDB
//*CockroachDB is a distributed SQL database designed to scale horizontally across multiple nodes while providing strong consistency and ACID transactions. It's ideal for applications requiring high availability and resilience across different geographic locations.
//*Time Series DB  InfluxDB
//*InfluxDB is a time series database optimized for handling high write and query //*loads, particularly for time-stamped data. It's commonly used for monitoring, real-time analytics, and IoT applications where time-based data is crucial.
//* OO DB - db4o:
//* db4o is an object-oriented database that stores data as objects, closely aligning with object-oriented programming languages. It simplifies development by allowing direct storage and retrieval of objects without the need for conversion to relational tables.
//* Graph DB  Neo4j:
//*Neo4j is a graph database that excels at handling complex relationships between data entities. It uses a graph structure with nodes, relationships, and properties, making it ideal for applications like social networks, recommendation engines, and fraud detection.
//*Hierarchical DB  IBM IMS
//*IBM IMS is a hierarchical database that organizes data in a tree-like structure with parent-child relationships. It's used primarily in legacy systems for high- performance transaction processing and is known for its reliability in handling large-scale, mission-critical applications.
//* Network DB  IDMS
//*IDMS Integrated Database Management System) is a network database that represents data using a graph of record types and set relationships. It allows more complex relationships than hierarchical databases and is often used in legacy systems requiring high performance.
//* Cloud DB ( Amazon RDS)
//*Amazon RDS Relational Database Service) is a managed cloud database service that supports multiple relational database engines, including MySQL, PostgreSQL, and Oracle. It automates tasks like backups, patching, and scaling, making it easy to deploy and manage databases in the cloud.

//* Most commonly used databases are :
//* Relational DB
//* NoSQL DB

//* WE CAN READ ABOUT THE STORIES OF ABOVE DATABASES IN AKSHAY'S VIDEO AND NOTES BUT NOT IMPORTANT TO REMEMBER

//*now we will learn about mongodb
//* NoSQL databases can be classified into four main types:
//* Document Databases
//* Key-Value Databases
//* Graph Databases
//* Wide-Column Databases
//* Multi-Model Databases(this one also exist but not one of main four types)
//*MongoDB, a popular NoSQL database, was created in 2009 around the same time as Node.js. Itʼs a coincidence that both have gained popularity together, as MongoDB works exceptionally well with JSON and JavaScript objects. MongoDB was developed by a company named 10gen, and the name "MongoDB" comes from the word "humongous," reflecting its ability to handle massive amounts of data. The company later renamed itself MongoDB Inc., which continues to manage MongoDB today. MongoDB is known for significantly increasing developer productivity.

//*RDBMS vs NoSQL (Document)
//* see image - images\understanding relation db and mongodb.png
//*RDBMS (Relational Database Management System)
//*Structure RDBMS uses a table-based structure, organizing data into rows and columns, similar to a spreadsheet or Excel sheet. Each table represents a different entity, and the columns represent attributes of the entity.
// *Relationships In RDBMS, relationships between tables are established using foreign keys. For example, if you want to store user hobbies, you would create separate tables for users and hobbies and then map them using a user ID. This design often requires the use of joins to retrieve related data.
// * Normalization Data normalization is a key concept in RDBMS. It involves organizing data to minimize redundancy and improve data integrity. This often requires multiple related tables and complex join operations to assemble a complete dataset.
//* NoSQL (Document Database)
//*Structure: NoSQL document databases, such as MongoDB, use a flexible, schema-less structure. Data is stored in documents, which are similar to JSON objects. Each document is a collection of key-value pairs and can have nested structures.
// * Collections: Instead of tables, MongoDB uses collections. A collection is a group of documents, analogous to a table in RDBMS. Each document in a collection can have a different structure, which allows for more flexible data modeling.
// *Data Storage: In MongoDB, you can store related data within a single document. For example, instead of creating separate tables for users and their hobbies, you can store a user's hobbies as an array within the user's document. This eliminates the need for joins and complex queries.
//*Ease of Use: MongoDB and other document databases are designed to work well with JavaScript. Since documents are similar to JSON objects, they integrate seamlessly with JavaScript code, making it easier to work with data in web applications.
// * Schema Flexibility: NoSQL databases offer schema flexibility, allowing you to add or modify fields without affecting existing documents. This makes it easy to adapt to changing requirements and store diverse types of data.

//* difference between RDBMS vs NoSQL (Document)
//* see image - images\difference between relation db abd nosql.png
//*Table Structure: RDBMS organizes data into tables with rows and columns. In contrast, NoSQL document databases use collections of documents, where each document can have a flexible and nested structure.
// *Data Organization: RDBMS has a structured format, while NoSQL offers a flexible schema, allowing documents to vary in structure.
// *Schema: RDBMS requires a fixed schema, meaning the structure must be predefined and is not easily changeable. NoSQL databases have a schema- less design, allowing for easy changes and adaptability
//*Query Language: RDBMS uses SQL for querying, which is a standardized language for relational databases. NoSQL databases have their own query mechanisms, which can vary depending on the database system.
// *Scaling: RDBMS generally faces challenges with horizontal scaling (scaling out across multiple servers). NoSQL databases are designed for easier horizontal scaling, making them more suitable for distributed environments.
// *Relationships: RDBMS uses foreign keys and joins to manage relationships between tables. NoSQL document databases handle relationships by embedding related data within documents or using references.
// *Use Case: RDBMS is often used in scenarios requiring complex transactions and strong consistency, such as banking systems. NoSQL databases are preferred for applications needing flexible data models and high-performance, such as content management systems and real-time data processing.
// *Examples: RDBMS examples include banking applications that need ACID compliance and complex transactions. NoSQL examples include systems like content management and real-time analytics platforms, where flexibility and scalability are key.

//! ⁡⁢⁣⁡⁢⁣⁢⁡⁢⁣⁡⁢⁣⁡⁢⁣⁢Season 1 - Episode - 11 - Creating a database mongodb
//* there are two ways of using mongodb
//*1. Like any other software we can download mongoDb software and run the software locally in our computer(self managed)
//*2. We don't need install it on our system ,on behalf you,mongodb takes the database  install on to a server(aws,azure,google cloud servers), and give access to you.

//* So the first one is community version(self managed and free),
//* second is the enterprize version and mongodb manages everything(it also has a free version for developers )and this can be also self managed if we want ,or we can let mongodb handle it.

//* So this enterprize version has also a self managed version which called enterprize advanced
//* and a enterprize version  managed by mongodb itself and it is call called mongodb atlas.

//* So we will use the free version of mongodb Atlas, and let mongodb handle every thing. first we have to register with our email. So click on get started button on the hero section and sign up
//* after sign up it will ask for a survey, about how we will use the database.
//* then the next page will come , where we have to create our cluster ,so to create our mongo atlas database , we have to create a cluster , so in this cluster step we have to choose our plan , so here we will choose the free plan,and name our cluster namaste node(we can use any name), and and other things can be set to default
//* we can choose any one provide from aws , azure or google cloud, and the region should  be near the users, so will choose mumbai.
//* we can tick the auto security setup  and preload sample dataset.
//* then click on create deployment
//* then it will ask for creating a user and so create username and password and remember to copy the password, so we can create multiple users later for multiple projects.
//* now after coping password click on create database user
//* then it will tell you to choose a connection method click on it. and choose the second option compass. we can abd copy the connection string , it is the necessary thing. if we click on cross* mark that's not a problem then in the dashboard inside the cluster there will be a connect button , click on the that and it will take us to the same page , then choose the compass and copy the connection string.
//* then we have to search on google "mongodb compass" and download the software , we will use it to see our database
//*

//* now open the mongodb compass and click on new connection an paste the connection string we copied and give a name choose a color and click save , then you will see the cluster you created there will show here now, and there are some sample data also because remember while creating the cluster we had chosen some options that's why this sample data is added
//* now we can ceate database from the compass also and from here our code also, but let's create the first database from the compass , so inside the cluster namaste node there will be a option "create database" click on it.it wil ask for name and the collection name, So let's name it hello world ans as we will save the user's data inside the database so we will name the collection "user".
//! don't tick the series option , series database are different ,we don't need it.
//* So inside the hello world database we have created a "user" collection. So inside user collection now we can add documents(like js objects).
//* So click on add data button inside this user collection. and choose insert document. you will see it will show us a id , we can keep it , but if we delete the id that's also fine because even we remove the id then add the felids(properties) like "firstName" ,"lastName", and while writing the field names write them inside "". then click on insert. then this document(object) will be created and automatically a object id will be added.So that it can uniquely identify the document.
//* we can also add a document using code.Let's do that.
//* So how will we connect our node application with the mongodb database which is hosted on aws(mumbai).
//*So first of all we have to install mongodb package using our terminal by running the command "npm i mongodb" .
//* after installation the package will we added inside node modules folder , package.json and package-lock-json will be added. now create a git.ignore file and add node_modules inside it t/o not add the node modules folder to github while committing the code.
