
<!-- .slide: class="slide slide--introduction introduction" data-state="nocontrols" data-external="slides/1st.html" -->

---

---

programmer's lullaby

---

---<!-- .slide: class="slide slide--who-am-i who-am-i"  -->
### who am I <!-- .element: class="who-am-i__header" -->

<div class="who-am-i">
<p class="fragment text who-am-i__text who-am-i__text--indent "> all my entire life ... 
 <span class="fragment"> I do something with JavaScript </span></p>

<br>
<h3 class="fragment header header__h3 header--no-transform who-am-i__text who-am-i__text--nowdays"> nowdays for <a href="ukit.group" class="link">ukit.group</a></h3>
<br>
<p class="text who-am-i__text"> <span class="fragment">1st commercial site with JS at 2001.</span><br>
<span class="fragment">Then MS driven JS: IIS Active Server Pages,<br> Windows Scripting Host for Active Directory &<br> HTML Applications for Intranet.</span><br> <span class="fragment">Then Rhino & Nashorn for Alfresco & Asterisk.</span><br> <span class="fragment">Then XUL Runner. Cordova. ExtJS. </span></p>

<h3 class="fragment header header__h3 who-am-i__text--finally"> And finally NodeJS.</h3>

<p class="fragment text who-am-i__text who-am-i__text--meanwhile">
meanwile former researcher of IT Economy <br> ... and still very interested</p>
</div>

---
<!-- .slide: class="slide slide--team-mascots-me team-mascots-me" data-transition="none" -->

## team mascots me <!-- .element: class="team-mascots-me__header" -->

<br>
<img class="image image--border team-mascots-me__image"  src="/img/js-everywhere.jpg" alt="js everywhere" title="js everywhere" width ="50%">

---

<!-- .slide: class="slide slide--dream dream" data-transition="zoom" data-background="#101010"-->
# &nbsp;&mdash;&nbsp; I have a dream &nbsp;&mdash;&nbsp; <!-- .element: class="dream__header" -->


<br>
is really hard  to think of an idea for 15 years  
<br>
<!-- .element: class="dream__text " -->
> dreams are the sort of things you
<br>
can't stop think about & get rid of  
<!-- .element: class="dream__blockquote" -->
---
<!-- .slide: class="slide slide__this-talk this-talk" -->
## so this talk was made <!-- .element: class="this-talk__header" -->

<br>

- seems important ... <!-- .element: class="this-talk__text" --><span class="fragment" data-fragment-index="0">[ for me ]</span>
- reveal current technology state <!-- .element: class="this-talk__text" -->
- tell about problems & solutions <!-- .element: class="this-talk__text" -->


---


---
<!-- .slide: class="slide slide--intro intro"-->
<h1 class="intro__header">... intro ...</h1>

<h1 class="side-digit side-digit__1">-1</h1>


---

---
<!-- .slide: class="the-beginning" data-transition="none" -->

# In the beginning<br>was the Word

---

<!-- .slide: class="and-word-was" data-transition="zoom" -->

##### And word was

<h1 class="and-word-was__subtitle">JavaScript</h1>

single threaded synchronous programming language

---

<!-- .slide: class="they-invented" data-transition="none" -->

## But then they invented 
# asynchrony
<br>
<pre><code class="lang-javascript hljs fragment they-invented__code">// and continued reproducing it everywhere
</code></pre>
<pre><code class="lang-javascript hljs fragment they-invented__code">// for everything they do
</code></pre>
<pre><code class="lang-javascript hljs fragment they-invented__code">// & for bugs
</code></pre>


---

<!-- .slide: class="all-complicated" data-transition="none" -->

## And this  
## how all become
# too complicated<!-- .element: class="fragment all-complicated__header"-->
<pre ><code class="lang-javascript hljs fragment all-complicated__code">// and going only worse
</code></pre>

---
<!-- .slide: data-state="nocontrols" -->

--- <!-- .slide: class="relations-->

<h1 class="relations__header">relations </h1>

### &
# considerations

<h1 class="side-digit side-digit__1">0</h1>

---

---
<br>
<br>
most of all significant data  
collected from issues or meetings of  

[<img class="image image--border" src="/img/diag_group.png" alt="node diagnostics group" title="node diagnostics group" width ="50%">](https://github.com/nodejs/diagnostics)


---

## Debugging in Production

[<img class="image image--border" src="/img/nickkooper.png" alt="Николай Матвиенко – Поиск и устранение неисправностей Node.js-приложений под капотом" title="Николай Матвиенко – Поиск и устранение неисправностей Node.js-приложений под капотом" width ="70%">](https://www.youtube.com/watch?v=_qzFJ2MPVWQ)

---

## Debugging in Production

[<img class="image image--border" src="/img/wa7son.png" alt="Debugging Node.js in Production — Thomas Watson" title="Debugging Node.js in Production — Thomas Watson" width ="70%">](https://www.youtube.com/watch?v=briH-bfleIM)

---

## Node Fatal flow

[<img class="image image--border" src="/img/ai_boy.png" alt="fatal flow talk" title="fatal flow talk" width ="70%">](https://www.youtube.com/watch?v=Lrs6puJ4G2Q)


---

---

<!-- .slide: data-transition="zoom" -->

<br>
<br>

# what we have

<br>
an approach to be meaningfull  
[w]~[o] statless condition to any key

<h1 class="side-digit side-digit__1">1</h1>

---

--- <!-- .slide: class="metophor" -->

<h1 class="metophor__header">metaphor</h1>

### of async<!-- .element: class="fragment" -->

---
<!-- .slide: data-transition="none" -->

<br>
### 4 coding

<img class="image image--border" src="/img/fun/coding.gif" alt="code" title="code" width ="40%">


---
<!-- .slide: data-transition="none" -->
<br>
### &mdash; and somehow ... somewhere &mdash;
<img class="image image--border" src="/img/fun/button.gif" alt="button" title="button" width ="45%">

---
<!-- .slide: class="bug-assignment" data-transition="zoom" -->
<br>
### someone assigns me a bug

<img src="/img/jirabug.png" alt="bug" title="bug" width ="55%"  class="bug-assignment__image bug-assignment__image--note image image--border">
<img src="/img/fun/aaaaa.jpg" alt="bug" title="bug" width ="35%" class="fragment bug-assignment__image bug-assignment__image--fun image image--border">

---
and it that situation  

<img class="image image--border" src="/img/ucircus/500.jpeg" alt="500 sticker" title="ukit team" width="30%">

---

<img class="image image--border" src="/img/real_stack.png" alt="bug" title="bug" width ="85%">

---
<!-- .slide: class="stack stack--1" data-state="nocontrols" data-external="slides/stack.html" data-transition="none" -->

---
<!-- .slide: class="stack stack--2" data-state="nocontrols" data-external="slides/stack2.html" data-transition="none" -->

---
# boss  
<img class="image image--border" src="/img/ucircus/boss2.jpeg" alt="boss sticker" title="ukit team" width="30%">


---
<!-- .slide: class="collect-data" data-transition="none" style="min-height: 900px !important" -->
### you collect all available data <!-- .element: class="fragment" -->

<img src="/img/kibana.png" alt="kibana" title="kibana" class="fragment collect-data collect-data__image collect-data__image--note image image--border">

<img src="/img/ucircus/rootlogs.jpeg" alt="faster" title="ukit team" class="fragment collect-data collect-data__image collect-data__image--team image image--border">


---
<!-- .slide: class="available-data " data-transition="none" style="min-height: 900px !important"-->
### you collect all available data

<img src="/img/ucircus/rootlogs.jpeg" alt="faster" title="ukit team"
	class="available-data__image available-data__image-root image image--border">

## prepeare test samples


<img src="/img/aaaa.jpg" alt="aaaa" title="aaaa" class="fragment available-data__image available-data--1__image-aaa image image--border">

<img src="/img/ucircus/testenv.jpeg" alt="faster" title="ukit team" class="fragment available-data__image  available-data__image-test image image--border">
	
---
<!-- .slide: data-transition="none" style="min-height: 900px !important" -->
### you collect all available data

<img src="/img/ucircus/rootlogs.jpeg" alt="faster" title="ukit team" class="available-data__image available-data__image-root image image--border">

## prepeare test samples

<img src="/img/ucircus/testenv.jpeg" alt="faster" title="ukit team" class="available-data__image  available-data__image-test image image--border">
	
# nothing helps 

<img src="/img/ucircus/team.jpeg" alt="nothing_helps" title="nothing_helps" class="fragment available-data__image  available-data__image-team image image--border">


--- <!-- .slide: class="shrodinger"-->
<br>
### so what is it ?

# schrodinger's<br> code ? <!-- .element: class="fragment" -->
<img src="/img/fun/shr_cat.jpg" alt="schrodinger" title="schrodinger" class="fragment schrodinger__image schrodinger__image--1 image image--border">

# &nbsp; &nbsp; &nbsp; &nbsp; heisenbug ? <!-- .element: class="fragment" -->
<img src="/img/fun/heisenbug.jpg" alt="heisenbug" title="heisenbug" class="fragment schrodinger__image schrodinger__image--2 image image--border">

---

## LIVE DEMO 1

what the 500 looks like  
### use youtube below

<hr width="50%">

<iframe width="560"
    height="315"
    src="https://www.youtube.com/embed/2g34LNLxpIY?start=21"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>


--- <!-- .slide: class="trace" -->

### we have trace & code
##### but not
<h1 class="trace__header">the state 2 fix</h1>
#### meaning : when & how ? <!-- .element: class="fragment" -->
### let me describe ... <!-- .element: class="fragment" -->

---
<!-- .slide: class="polymorph" data-transition="zoom" -->
### our data layer is a sort of [polymorph](https://youtu.be/Zc3CDFUfHUA?t=1695)
<div data-external="svg/poly.svg" class="polymorph__image" ></div>

---
<!-- .slide: class="sti" data-transition="fade" -->
### it has fractal struct: [STI & AOP](https://youtu.be/Zc3CDFUfHUA?t=1695)
<div data-external="svg/poly_struct.svg" class="sti__image"></div>

---
<!-- .slide: class="proto-chain" data-transition="none" -->
<br>
#### behaviour driven by prototype chain
### depends on scope conditions <!-- .element: class="fragment" -->
## & aims combined bvr for : <!-- .element: class="fragment" -->

# proto + state + (args) <!-- .element: class="fragment proto-chain__text proto-chain__text--state" -->

### &mdash; superposition multiplied context &mdash; <!-- .element: class="fragment proto-chain__text proto-chain__text--context" -->

---

## LIVE DEMO 2

same stacktrace but  
different modules  
on same 500 stacktrace : fn.bind(state)  

### use youtube below

<hr class="separator">

<iframe width="560"
    height="315"
    src="https://www.youtube.com/embed/2g34LNLxpIY?start=327"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>


---
**and you can have same code**
### for example<!-- .element: class="fragment" -->
<br>
<img src="/img/error_bar.png" alt="error_bar" title="error_bar" class="fragment image image--border">


--- <!-- .slide: class="driven-errors" -->
<br>
### and have state driven errors
<br>
<pre class="driven-errors__code-wrap">
<code class="lang-javascript hljs fragment driven-errors__code">		var count = 0;
		const s = () => {
				count++;
				return !!(count%2);
		};
		// console.log(s());
</code>
</pre>


--- <!-- .slide: class="oops" -->
**using ```console.log```** <!-- .element: class="fragment" -->
### we oops : changed bvr & state <!-- .element: class="fragment" -->
<pre class="oops__code-wrap"><code class="lang-javascript hljs oops__code">
							var count = 0;
							const s = () => {
									count++;
									return !!(count%2);
							};
			
</code></pre>
<pre class="oops__code-wrap oops__code-wrap--2">
<code class="lang-javascript hljs fragment oops__code--2">
			console.log(s());
			if (s()) {
				console.log('Oops!');
			}
</code></pre>

<img src="/img/fun/girl_burns.jpeg" alt="girl_burns" title="girl_burns" class="fragment oops__image image  image--border">

---
<br>
###  should make a spike
<br>
<img class="image  image--border" src="/img/ucircus/spike.jpeg" alt="faster" title="ukit team">


---

--- <!-- .slide: class="diving" -->


<h1 class="diving__header">diving</h1>

<br>
an approach  
hopless though...

<h1 class="side-digit side-digit__1">2</h1>

---

---
<br>
# nodejs is a robot

<img src="/img/terminator.jpg" alt="terminator" title="terminator" class="fragment image  image--border">

--- <!-- .slide: class="statefull" -->

<h1 class="statefull__header">Statefull</h1>
# Context Machine

---
<img class="image image--border" src="/img/fun/google.jpg" alt="google" title="google" width="80%">

---
## Formal verification - [wiki](https://en.wikipedia.org/wiki/Formal_verification)

<img  class="image image--border" src="/img/notes/formal_verification.jpg" alt="formal_verification" title="formal_verification" width="75%">

---

## Certifying algorithm - [wiki](https://en.wikipedia.org/wiki/Certifying_algorithm)
<img  class="image image--border" src="/img/notes/certifying_algorithm.jpg" alt="certifying_algorithm" title="certifying_algorithm" width="75%">

---

[<img  class="image image--border" src="/img/notes/quantum_verification.jpg" alt="quantum_verification" title="quantum_verification" width="75%">](https://www.quantamagazine.org/graduate-student-solves-quantum-verification-problem-20181008/)


---
<br>
... so...

### NP-completeness
https://en.wikipedia.org/wiki/NP-completeness

### Set theory
https://en.wikipedia.org/wiki/Set_theory

### Theory of constraints
https://en.wikipedia.org/wiki/Theory_of_constraints

---
<br>
### Self-clocking signal
https://en.wikipedia.org/wiki/Self-clocking_signal

### Self-synchronizing code
https://en.wikipedia.org/wiki/Self-synchronizing_code

## what it is about ?
	
Networking? Microcontrollers?

---
<!-- .slide: data-transition="none" -->
<br>
### How Simple it was 20 years ago

<img src="/img/ie.png" alt="winter" title="winter" width="45%" class="fragment image--noborder">

<img src="/img/notes/syn_xhr.png" alt="syn_xhr" title="syn_xhr" width="41%" class="fragment image--noborder">

---
<!-- .slide: data-transition="none" -->
<br>
### wish i'd able freeze the state
<img src="/img/fun/winter.jpeg" alt="winter" title="winter" width="50%" class="fragment image image--border">

--- <!-- .slide: class="dump" -->
<h1 class="dump__header">core dump ?</h1>

[<img src="/img/notes/core_dump.png" class="image image--border" alt="Николай Матвиенко – Поиск и устранение неисправностей Node.js-приложений под капотом" title="Николай Матвиенко – Поиск и устранение неисправностей Node.js-приложений под капотом" width ="70%">](https://www.youtube.com/watch?v=_qzFJ2MPVWQ)

<h3 class="fragment dump__descriptor"> **--abort-on-uncaught-exception** </h3>


--- <!-- .slide: class="dtrace" -->

<h1 class="dtrace__header">Profiling & DTrace ?</h1>

<img class="image image--border dtrace__image dtrace__image--dtrace" src="/img/notes/dtrace.png" alt="dtrace" title="dtrace" width="75%">

<img src="/img/notes/flamegraph.png" alt="flamegraph" title="flamegraph" width="75%" class="fragment image image--border dtrace__image dtrace__image--flamegraph">

<h3 class="fragment dtrace__text"> &#161; real </h3>


--- <!-- .slide: class="graphana" -->

### we have graphana & prometseus 
# may be this is it ? <!-- .element: class="graphana__header" -->
<img class="image image--border graphana__image graphana__image--api" src="/img/notes/perf_prof.png" alt="perf_prof" title="perf_prof" width="75%">

<img src="/img/notes/graphana.png" alt="graphana" title="graphana" width="75%" class="fragment image image--border graphana__image graphana__image--trace">

<h3 class="fragment graphana__subtitle"> &#161; <span class="graphana__subtitle--colored">p</span>erf only ! </h3>


--- <!-- .slide: class="scope" -->
<br>
<h1 class="scope__header"> [[ Scope ]] </h1>
<br>
<img class="scope__image image image--border" src="/img/notes/scope.png" alt="scope" title="scope" width="50%">

--- <!-- .slide: class="cache"-->
<br>
## delete require.cache <!-- .element: class="cache__header" -->

<pre class="cache__code-wrap">
<code class="lang-javascript hljs fragment cache__code">
		global.reloadModule(filename) {
			delete require.cache[filename];
			return require(filename);
		};
</code></pre>

--- <!-- .slide: class="node-fibers" -->
<h1 class="node-fibers__header">Node Fibers ...</h1>
<img class="image image--border node-fibers__image" src="/img/notes/fibers.png" alt="node fibers" title="node fibers" width="85%">
<img class="fragment image image--border node-fibers__image node-fibers__image--downloads" src="/img/notes/fibers_dld.png" alt="fibers downloads" title="fibers downloads">

<h3 class="fragment node-fibers__subtitle" > ! prod & expensive </h3>

--- <!-- .slide: class="threads" -->

### threads...

<img class="image image--border" src="/img/notes/worker_threads.png" alt="worker_threads" title="worker_threads" width="85%">

<h1 class="fragment threads__subtitle threads__subtitle--alarm">EXPERIMENTAL</h1>

<h3 class="fragment threads__subtitle threads__subtitle--state"> --experimental-worker </h3>


---

# ... <!-- .element: class="dots" -->

---
<br>
## Control flow
https://en.wikipedia.org/wiki/Control_flow

## Green threads
https://en.wikipedia.org/wiki/Green_threads

### Ruby, Go, Closure, Lisp ...

### Smalltalk
https://en.wikipedia.org/wiki/Smalltalk


---

--- <!-- .slide: class="tracking" -->

<br>
<h1 class="tracking__header">Trackig</h1>

### Events!<!-- .element: class="fragment" -->
## Events!<!-- .element: class="fragment" -->
# Events!<!-- .element: class="fragment" -->


<h1 class="side-digit side-digit__1">3</h1>

---

--- <!-- .slide: class="entrypoint" -->
## an entrypoint is any op <!-- .element: class="entrypoint__header" -->
### for example request <!-- .element: class="fragment" -->
<pre class="entrypoint__code-wrap"><code class="lang-javascript hljs fragment entrypoint__code">

						const express = require('express');
						const app = express();

						app.use('/entrypoint', (req, res) => {
							// do something
						});
		
</code></pre>

### or file read <!-- .element: class="fragment" -->

<pre class="entrypoint__code-wrap"><code class="lang-javascript hljs fragment entrypoint__code">
						
						require('fs').readFile(name, (err, data) => {
							// THIS is ENTRYPOINT TOO
						})
	
</code></pre>

--- <!-- .slide: class="no-async" -->

## no async 4 ECMAScript® 2015 <!-- .element: class="no-async__header" -->
<h3><a href="http://www.ecma-international.org/ecma-262/6.0/index.html#sec-jobs-and-job-queues"> 8.4 Jobs & Job Queues </a></h3>
<img class="image image--border" src="/img/es2015jobs.png" alt="ES 2015 jobs definition" title="ES 2015 jobs definition" width="75%">

is very first note about async tasks  
mostly made 4 promises

---
<br>

#### all asynchronous JS 
### is a part of environment
<br>

* [MDN  : window.setTimeout](https://developer.mozilla.org/ro/docs/Web/API/window.setTimeout)
* [node : global.setTimeout](https://nodejs.org/api/globals.html#globals_settimeout_callback_delay_args)
* [node : process.nextTick ](https://nodejs.org/api/process.html#process_process_nexttick_callback_args)

---
<!-- .slide: class="window-node" data-transition="fade" -->
<br>
## window

<pre><code class="lang-javascript hljs window-node__code">
window.onerror = 

</code></pre>

## node.js

<pre><code class="lang-javascript hljs window-node__code">

process.on('uncaughtException' ...);

process.on('unhandledRejection' ...);

</code></pre>

---
<!-- .slide: class="event-loop" data-transition="fade" -->
## Event Loop <!-- .element: class="event-loop__header" -->

<img class="image image--border" src="/img/ivan.png" alt="Иван Тулуп: асинхронщина в JS под капотом / Михаил Башуров" title="Иван Тулуп: асинхронщина в JS под капотом / Михаил Башуров" width ="57%">
<br>
[Habr](https://habr.com/company/oleg-bunin/blog/417461/)/ [YouTube](https://www.youtube.com/watch?v=bUx8wk4LdoY)

---
<!-- .slide: data-transition="fade" -->
## Event Loop <!-- .element: class="event-loop__header" -->

[<img class="image image--border" src="/img/philip_roberts.png" alt="Philip Roberts: What the heck is the event loop anyway? | JSConf EU" title="Philip Roberts: What the heck is the event loop anyway? | JSConf EU" width ="57%">](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

---
<!-- .slide: data-transition="zoom" -->
## Event Loop : Node <!-- .element: class="event-loop__header" -->

<a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/"><img class="image image--border" src="/img/notes/event_loop1.png" alt="event loop node" title="event loop node" width ="57%">

<a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/" class="fragment event-loop__link event-loop__link--1">
<img class="image image--border" src="/img/notes/event_loop2.png" alt="event loop node" title="event loop node">
</a>

<a href="https://medium.com/devschacht/event-loop-timers-and-nexttick-18579cd122e0" class="fragment event-loop__link event-loop__link--2">
<img class="image image--border" src="/img/notes/event_loop3.png" alt="event loop node" title="event loop node">
</a>


---

## LIVE DEMO 3.1 !

<br>
setTimeout + fs.readFile: test.js

unpredictable behaviour of EventLoop 

https://github.com/wentout/HolyJS_2018-AsyncZero-Demo/blob/master/demos/test.js

---

---
how we see js <span class="fragment">&nbsp;&mdash;&nbsp; and everything asynchronous</span>

<img class="image image--border" src="/img/tips.gif" alt="js tips" title="js tips" width ="80%">

[(c) original img article link](https://hackernoon.com/12-amazing-javascript-shorthand-techniques-fef16cdbc7fe)

--- <!-- .slide: class="indeed" -->
# but indeed <!-- .element: class="indeed__header indeed__header--top" -->

<h1 class="indeed__header indeed__header--principal" class="fragment">there is no <br>async at all</h1>

## just sequental flow<!-- .element: class="fragment" -->
### very fast one, though<!-- .element: class="fragment" -->

---
<!-- .slide: class="neumann-arch" data-state="nocontrols" -->
<br>
<img class="image image--border neumann-arch__image neumann-arch__image--1 " src="/img/notes/von_newmann.png" alt="von_newmann" title="von_newmann" width="75%">

<img class="fragment image image--border neumann-arch__image neumann-arch__image--2 " src="/img/notes/intel.jpg" alt="intel" title="intel">

<img class="fragment image image--border neumann-arch__image neumann-arch__image--3 " src="/img/notes/amd.jpg" alt="amd" title="amd">


---
<br> <!-- .slide: class="async-operation" -->
## every async operation

<h1 class="fragment async-operation__header">just triggers</h1>

### interruption callback<!-- .element: class="fragment async-operation__text async-operation__text--danger"-->
## registered somewhere<!-- .element: class="fragment async-operation__text async-operation__text--neutral"-->
# as a continuation code<!-- .element: class="fragment async-operation__text async-operation__text--alarm"-->

---
<!-- .slide: class="logical-context" data-transition="fade" -->
### logical context explanation

<div class="logical-context__image" data-external="svg/LogicFlow.svg"></div>

---
<!-- .slide: class="logical-context" data-transition="zoom" -->
### logical context failure

<div class="logical-context__image" data-external="svg/LogicFlowFailure.svg"></div>

---
<!--slide: class="continuation"-->
<br> 
## and we usually use

something like this 2 contextify the continuation

<pre class="continuation__code-wrap">
<code class="lang-javascript hljs fragment continuation__code">

fn = async (req, ...args) => { /* ... */ };

 /* ... ¯\_(ツ)_/¯ ... */

fn.bind(context, ...args) => { /* ... */ };

</code></pre>


---
<!-- .slide: class="uncaughtException" -->
<br>
##### & no way 4 .uncaughtException<br><br> <!-- .element: class="uncaughtException__header" -->

<pre class="uncaughtException__code-wrap">
<code class="lang-javascript hljs fragment uncaughtException__code" >
		process.on('uncaughtException', (err) => {
			log.error(err);

			// ??? req.res.status(503);

			process.exit(1);
		});

</code></pre>

---

---
<!-- .slide: class="CODE"-->

<h1 class="CODE__header">C.0.D.E.</h1>

<h1 class="side-digit side-digit__1">4</h1>

[<img class="image image--border" src="/img/code.jpg" alt="c.o.d.e." title="Code: The Hidden Language of Computer Hardware and Software - Wikipedia">](https://en.wikipedia.org/wiki/Code:_The_Hidden_Language_of_Computer_Hardware_and_Software)

---

---
<!-- .slide: class="no-limits" data-transition="zoom" -->
<h1 class="no-limits__header">Imagine</h1>
### code with no limits


---
<!-- .slide: class="async-hooks" data-transition="zoom" data-background="white" -->
<br>
<img src="/img/notes/async_hooks.png" alt="async_hooks" title="async_hooks" width="75%" class="image image--noborder">

<h3 class="fragment async-hooks__text"> no more flag : lets try em </h3>


---
<!-- .slide: class="hooks-list" data-transition="zoom" data-background="white" -->

<h1 class="hooks-list__hook">.init ( asyncId, type, <br>
<span class="hooks-list__descriptor">triggerId, resource</span> )</h1>

<h1 class="fragment hooks-list__hook">.before ( asyncId )</h1>
<h1 class="fragment hooks-list__hook">.after ( asyncId )</h1>
<h1 class="fragment hooks-list__hook">.delete ( asyncId )</h1>
<h1 class="fragment hooks-list__hook hooks-list__hook--resolve">.promiseResolve ( asyncId )</h1>

---
<!-- .slide: class="hooks-list" data-transition="zoom" data-background="white" -->

<h1 class="hooks-list__hook" >asyncId</h1>
<h1 class="fragment hooks-list__hook">triggerId</h1>
<h1 class="fragment hooks-list__hook">async_hooks.executionAsyncId()</h1>
<h1 class="fragment hooks-list__hook">async_hooks.triggerAsyncId()</h1>
<h1 class="fragment hooks-list__hook">type & resource</h1>

---
<!-- .slide: class="doc-example" data-transition="none" -->
### documentation exapmle
<pre class="doc-example__code-wrap" ><code class="lang-javascript hljs doc-example__code">
					const async_hooks = require('async_hooks');
					
</code></pre>
<pre class="doc-example__code-wrap" ><code class="lang-javascript hljs fragment doc-example__code">
					const hooks = async_hooks.createHook({
						init(asyncId, type, triggerAsyncId, resource) {
							 /* some code */
						}

						before(asyncId) { /* some code */ }
						
						after(asyncId) { /* some code */ }

						destroy(asyncId) { /* some code */ }
					});
					
</code></pre>

<pre class="doc-example__code-wrap" ><code class="lang-javascript hljs fragment doc-example__code">
					hooks.enable();
					
</code></pre>


---
<!-- .slide:  data-transition="none" -->
### documentation exapmle


```text
				FSEVENTWRAP, FSREQCALLBACK, GETADDRINFOREQWRAP, GETNAMEINFOREQWRAP, HTTPPARSER,
				JSSTREAM, PIPECONNECTWRAP, PIPEWRAP, PROCESSWRAP, QUERYWRAP, SHUTDOWNWRAP,
				SIGNALWRAP, STATWATCHER, TCPCONNECTWRAP, TCPSERVERWRAP, TCPWRAP, TTYWRAP,
				UDPSENDWRAP, UDPWRAP, WRITEWRAP, ZLIB, SSLCONNECTION, PBKDF2REQUEST,
				RANDOMBYTESREQUEST, TLSWRAP, Microtask, Timeout, Immediate, TickObject
```
<!-- .element: class="doc-example__code-wrap" -->
<br>
<pre class="doc-example__code-wrap" ><code class="lang-text hljs fragment doc-example__code">
							TCPSERVERWRAP(5): trigger: 1 execution: 1
							TickObject(6): trigger: 5 execution: 1
							before:  6
							  Timeout(7): trigger: 6 execution: 6
							after:   6
							destroy: 6
							before:  7
							>>> 7
							  TickObject(8): trigger: 7 execution: 7
							after:   7
							before:  8
							after:   8
							
</code>
</pre>
---
<!-- .slide: data-transition="zoom" -->
<br>
## so this example should work
<br>

```js
					const fn = (cb) => {
					    setTimeout(() => {
							nextTick(() => {
								Promise
									.then(() => {
										// tracked !!!
										cb();
									})
									
							})
						});
					};
					 
					const cb = () => { /* some code */ };
```
<!-- .element: class="doc-example__code-wrap" -->

---
<!-- .slide: class="articles" data-transition="none" -->
<br>
# ... seems very nice ...
## let read some articles
<br>
### srsly, who and where cares of boring docs<!-- .element: class="fragment" -->

<h1 class="fragment articles__text">my error # 1</h1>


---
<!-- .slide: data-transition="zoom" data-background="white"  -->
[<img class="articles__image image image--noborder" src="/img/notes/irina.png" alt="irina async_hooks" title="irina async_hooks" width="85%">](https://medium.com/the-node-js-collection/async-hooks-in-node-js-illustrated-b7ce1344111f)

---
<!-- .slide: data-transition="none" data-background="white"  -->
[<img class="articles__image image image--noborder" src="/img/thorsten.png" alt="Grokking Asynchronous Work in Node.js - Thorsten Lorenz" title="Grokking Asynchronous Work in Node.js - Thorsten Lorenz" width="85%">](https://medium.com/the-node-js-collection/async-hooks-in-node-js-illustrated-b7ce1344111f)


<a href="http://thlorenz.com/talks/async-hooks/book/" class="articles__link fragment" class="fragment"><img class="articles__image articles__image--lorenz image image--border" src="/img/thorsten2.png" alt="Thorsten Lorenz : Introduction | Async Hooks" title="Thorsten Lorenz : Introduction | Async Hooks"></a>


---

---
<br>
# problems...

<img src="/img/fun/jim.gif" alt="jim codes" title="jim codes" width ="45%" class="fragment image image--border">

---

<br>
## why this talk title ?

<img class="image image--border" src="/img/zero_one.png" alt="async zero" title="NDB example async 2 sync" width ="75%">


---
<!-- .slide: class="cls" data-transition="zoom" data-background="black"-->

<br>
## search again ...

### &nbsp;&mdash;&nbsp; Execution Context is : CLS &nbsp;&mdash;&nbsp;  

Continuation or Thread Local Storage (CLS)  
<br> 
[ [ C || T ]LS - wikipedia quote](https://en.wikipedia.org/wiki/Thread-local_storage) summary for JS :

> method that binds some data<br>to a logical execution thread


---
# What CLS gives
<br>
* meaningfull uncaughtException notes <!-- .element: class="fragment" -->
* long stack traces <!-- .element: class="fragment" --> <span class="fragment">[longjohn](https://www.npmjs.com/package/longjohn)</span> <!-- .element: class="fragment" -->
* async events marks <!-- .element: class="fragment" -->
* tracing pub~sub <!-- .element: class="fragment" -->
* simultaneous <br> &nbsp; &nbsp; shared memory <br> &nbsp; &nbsp; &nbsp; calculations <!-- .element: class="fragment" -->


---
<br>
### &nbsp;&mdash;&nbsp; CLS : from npm &nbsp;&mdash;&nbsp;

<br>
Let search for this idea at npm : I'm not the only one !
<br>
<br>
```bash
							$ npm search cls | wc -l 
							21
							
							$ npm search scope  | wc -l 
							31
							
							$ npm search context  | wc -l 
							26
							
							$ npm search continuation  | wc -l 
							25
```
<!-- .element: class="cls__code-wrap"-->
---
<!-- .slide: class="zonejs" -->

### Browser Tools : zone.js

##### removed from Angular<!-- .element: class="fragment" -->

<a href="https://www.npmjs.com/package/zone" class="link zonejs__link zonejs__link--sl"><img src="/img/zone_sl.png" alt="zone_sl" title="zone_sl" class="image image--border"></a>

<a href="https://github.com/angular/zone.js" class="link zonejs__link zonejs__link--angular"><img src="/img/zone_angular.png" alt="zone_angular" title="zone_angular" class="image image--border"></a>


---

### google cloud tracing CLS

<a class="link" href="https://github.com/googleapis/cloud-trace-nodejs"><img class="image image--border" src="img/cloud-trace-overview-page.png" alt="cloud-trace-overview" title="cloud-trace-overview" width="70%" ></a>

---
### Andreas Madsen [dprof](https://github.com/AndreasMadsen/dprof/blob/master/dprof.js)

<a class="link" href="https://github.com/AndreasMadsen/dprof/blob/master/dprof.js">
<img class="image image--border" src="img/visualizer.png" alt="dprof" title="dprof" width="45%"></a>

---
## [Clinc + Bubbleprof](https://clinicjs.org/blog/introducing-bubbleprof/)

<a class="link" href="https://clinicjs.org/blog/introducing-bubbleprof/">
<img class="image image--border" src="img/clinic-plus-bubbleprof.gif" alt="Clinc + Bubbleprof" title="Clinc + Bubbleprof" width="61%"></a>


---
<!-- .slide: class="git-dive" data-transition="zoom" data-background="white"  -->
<img class="image image--noborder git-dive__image" src="/img/notes/i_did.png" alt="context-dive" title="context-dive" width="85%">

<h3 class="git-dive__text git-dive__text--1"> released </h3>
<h3 class="fragment git-dive__text git-dive__text--2" data-fragment-index="1"> but something<br> still wrong </h3>
<h3 class="fragment git-dive__text git-dive__text--3" data-fragment-index="2"> not everything </h3>
<h3 class="fragment git-dive__text git-dive__text--4" data-fragment-index="3"> &mdash; seems just a nuance &mdash; </h3>


---

---
<!-- .slide: class="limitations" -->

<h1 class="limitations__header">Limitations</h1>
<h1 class="side-digit side-digit__1">5</h1>

---

---
<!-- .slide: class="async-listener" -->
### how it started : [async-listener](https://github.com/othiym23/)

[<img class="image image--border" src="/img/trev1.png" alt="The Birth and Evolution of AsyncHooks - Trevor Norris" title="The Birth and Evolution of AsyncHooks - Trevor Norris" width ="70%">](https://www.youtube.com/watch?v=wlEopv4p6d4)

<img class="image image--border async-listener__image async-listener__image--norris" src="/img/trev2.png" alt="Trevor Norris" title="Trevor Norris" width ="15%" >


---
<!-- .slide: class="further-dev" -->
### Further Development

<img class="image image--border further-dev__image" src="/img/andreas.png" alt="Andreas Madsen github" title="Andreas Madsen github" width ="70%">


---
<!-- .slide: class="how-it-is-made"-->
## How It's Made

<pre class="how-it-is-made__code-wrap">
<code  class="lang-javascript hljs fragment how-it-is-made__code">
		var counter = 0;
		var currentId = 0;
</code></pre>
<pre class="how-it-is-made__code-wrap" >
<code class="lang-javascript hljs fragment how-it-is-made__code">			var hookSetTimeoout = function (cb, time, ...params) {
			counter++;
			
			hooks.init.forEach(function (hook) {
				hook(counter, currentId, cb);
			});
</code></pre>
<pre class="how-it-is-made__code-wrap">
<code class="lang-javascript hljs fragment how-it-is-made__code">			var hooksWrapper = function (currentId, hook) {
				hooks.before.forEach( /*... */ );
				
				cb.call(null, ...params); // !!!
				
				hooks.after.forEach( /*... */ );
			}.bind(null, counter);
			
			setTimeout(hooksWrapper, time);
		};
</code></pre>

---
<!-- .slide: class="what-we-can" -->
### What we can & what not


<pre class="what-we-can__code-wrap"><code class="lang-javascript hljs fragment what-we-can__code">
			process.binding('async_wrap') // LIVE DEMO 4 !
			// just make it by yourself using $ node
</code></pre>

<pre class="what-we-can__code-wrap"><code class="lang-javascript hljs fragment what-we-can__code">
			console.log(msg); // NO ! ASYNC !
</code></pre>

<pre class="what-we-can__code-wrap"><code class="lang-javascript hljs fragment what-we-can__code">
			fs.writeSync(process.stdout.fd, msg); // doc: SYNC !
</code></pre>

<pre class="what-we-can__code-wrap"><code class="lang-javascript hljs fragment what-we-can__code">
			process._rawDebug(msg); // in replace ! SYNC !
</code></pre>

<pre class="what-we-can__code-wrap"><code class="lang-javascript hljs fragment what-we-can__code">
			// Track from Pointer function 
			// have to make own wraper
			// to Start Tracking
			
			fn = () => { };
			
</code></pre>


---
<!-- .slide: class="func-explanation" data-transition="none" -->
### one function explanation 
##### same number of async op 4 parallel sync code

<pre class="func-explanation__code-wrap"><code class="lang-javascript hljs fragment func-explanation__code">
			fn = () => {				// context mess :
				other_fn = () => {} 	// 	 same asyncId
				other_fn = () => {} 	// 	 same asyncId
				other_fn = () => {} 	// 	 same asyncId
			};
</code></pre>

<pre class="func-explanation__code-wrap"><code class="lang-text hljs fragment func-explanation__code">
				TCPSERVERWRAP(5): trigger: 1 execution: 1
				TickObject(6): trigger: 5 execution: 1
				before:  6
				  Timeout(7): trigger: 6 execution: 6
				after:   6
				destroy: 6
				before:  7
				>>> 7
				  TickObject(8): trigger: 7 execution: 7
				after:   7
				before:  8
				after:   8
							
</code></pre>

---
### one function explanation 
<br>
## Escape analysis
https://en.wikipedia.org/wiki/Escape_analysis

### Shape analysis (program analysis)
https://en.wikipedia.org/wiki/Shape_analysis_(program_analysis)

### Alias analysis
https://en.wikipedia.org/wiki/Alias_analysis

---

##### Promises : [Issue # 248](https://github.com/nodejs/diagnostics/issues/248)
### perfomance is not so good <!-- .element: class="fragment" -->  
### but they are fixing <!-- .element: class="fragment" -->  

[<img src="/img/me_on_tv.png" alt="Issue 248" title="Issue 248" width ="40%" class="fragment image image--border">](https://www.youtube.com/watch?v=2SCNsozMkF8)

---
<!-- .slide: class="problem"-->
## the problem <!-- .element:  class="problem__header" -->

<pre class="problem__code-wrap"><code class="lang-javascript hljs problem__code">
							const queueArray = [];

							setInterval(() => {
								queueArray.forEach(task => {
									task();
								});
							}, 1000);
</code></pre>

<pre class="problem__code-wrap"><code class="lang-javascript hljs fragment problem__code">
							const FunctionWhereTrackingStarts = () => {
								// Here we are still in the same context
								queueArray.push(() => {
									// **HERE** we have no ability
									// to reach the same logical context
									// because it executes in the other scope
								});
							};
</code></pre>

[https://jsfiddle.net/evq7ht05/7/](https://jsfiddle.net/evq7ht05/7/)


---
<br>
### my Issue 249 Story

[<img class="image image--border" src="/img/249.png" alt="Issue 249" title="Issue 249" width ="70%">](https://github.com/nodejs/diagnostics/issues/249)

---
<!-- .slide: class="kantor" -->

## Issue 59 : ilya kantor

<a class="link kantor__link kantor__link--1" href="https://github.com/othiym23/node-continuation-local-storage/issues/59"><img class="image image--border" src="/img/iliakan.png" alt="iliakan" title="iliakan" height="300px"></a>

<a class="link kantor__link kantor__link--2" href="https://github.com/othiym23/node-continuation-local-storage/issues/59#issuecomment-210144103"><img class="image image--border" src="/img/59.png" alt="59" title="59" height="400px"></a>

---
### async continuation : 2015

[<img class="image image--border" src="/img/async_eco.png" alt="async_eco" title="async_eco" width ="70%">](https://docs.google.com/document/d/1tlQ0R6wQFGqCS5KeIw0ddoLbaSYx6aU7vyXOkv-wvlM/edit)


---

### async continuation : 2017

[<img class="image image--border" src="/img/asyn_js_semantic.png" alt="asyn_js_semantic" title="asyn_js_semantic" width ="70%">](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/08/NodeAsyncContext.pdf)


---

---
<!-- .slide: class="fixing" -->

<h1 class="fixing__header">Fixing</h1>
<h1 class="side-digit side-digit__1">6</h1>

---


---
<!-- .slide: class="chrome-debug" -->

### chrome debug protocol : [examples](https://github.com/ak239/inspector-examples/blob/master/functions.js)

[<img class="image image--border" src="/img/debug_protocol.png" alt="Debug Protocol" title="Debug Protocol" width ="70%">](https://chromedevtools.github.io/devtools-protocol/v8/Runtime)

<a class="link chrome-debug__link" href="https://holyjs-moscow.ru/en/talks/30t5nkghc0q0syeyqyowcg/"><img class="image image--border" src="/img/ak239.jpeg" alt="Alexey Kozyatinsky" title="Alexey Kozyatinsky"></a>

---
<!-- .slide: class="trace-from-dtrace" -->
# TRACE <!-- .element: class="trace-from-dtrace__header" -->  

### from : dtrace & flamegraph <!-- .element: class="fragment trace-from-dtrace__subtitle" -->

### no way [event tracing](https://nodejs.org/api/tracing.html) <!-- .element: class="fragment" --> interception <!-- .element: class="fragment" -->

## LIVE DEMOS 3.2!
<br>
[node &nbsp; --trace &nbsp; demos/test.js](https://github.com/wentout/HolyJS_2018-AsyncZero-Demo/blob/master/demos/test.js)  
[node &nbsp; --allow-natives-syntax &nbsp; demos/testDT.js](https://github.com/wentout/HolyJS_2018-AsyncZero-Demo/blob/master/demos/testDT.js)


<br>

-- trace flag : test.js <!-- .element: class="fragment" -->  

%DebugTrace(); : testDT.js <!-- .element: class="fragment" -->  

---
<!-- .slide: class="asking-help" -->

## asking any help

**Anna Henningsen**  <!-- .element: class="fragment" data-fragment-index="1" -->  
**Andreas Madsen**  <!-- .element: class="fragment" data-fragment-index="3" -->  
**Tomas Watson**  <!-- .element: class="fragment" data-fragment-index="5" -->  

<img src="/img/addaleax.png" alt="addaleax" title="addaleax" data-fragment-index="2" class="fragment image image--border asking-help__image asking-help__image--1" >

<img src="/img/andreas_mail.png" alt="andreas_mail" title="andreas_mail" data-fragment-index="4" class="fragment image image--border asking-help__image asking-help__image--2">

<img src="/img/tomas.png" alt="tomas" title="tomas" data-fragment-index="6" class="fragment image image--border asking-help__image asking-help__image--3">

<br>
<a href="https://nodejs.org/api/async_hooks.html#async_hooks_class_asyncresource" class="fragment link asking-help__link" data-fragment-index="7">
<img class=" image image--border asking-help__image asking-help__image--4" src="/img/async_resource.png" alt="Async Resource" title="Async Resource" width ="50%"> </a>


---

---
<!-- .slide: class="solution" -->
<h1 class="solution__header" >Solution</h1>
<h1 class="side-digit side-digit__1">7</h1>
---

---
<!-- .slide: class="working-concept" -->
### working concept impl  <!-- .element: class="working-concept__header" -->  

<pre class="working-concept__code-wrap"><code class="lang-javascript hljs working-concept__code">
				function (fn2wrap) {
					if (context) {
						fn2wrap = dive(fn2wrap, context);
						return fn2wrap;
					}
				}
</code></pre>

<pre class="working-concept__code-wrap"><code class="lang-javascript hljs working-concept__code">
				if (context) {
					args = args.map(arg => {
						if (typeof arg === 'function') {
							arg = dive(arg, context);
						}
						return arg;
					});
				}
</code></pre>

---
<!-- .slide: class="cloud-trace" data-transition="fade" -->
### Cloud Trace <!-- .element: class="cloud-trace__header" -->  
<img class="image image--border cloud-trace__image" src="/img/cloud_trace_q.png" alt="Issue 249" title="Issue 249" width ="70%">

---
<!-- .slide: data-transition="zoom" -->
### Cloud Trace <!-- .element: class="cloud-trace__header" -->  
[https://github.com/googleapis/cloud-trace-nodejs/<br>blob/master/src/plugins/plugin-mongodb-core.ts](https://github.com/googleapis/cloud-trace-nodejs/blob/master/src/plugins/plugin-mongodb-core.ts)

<img class="image image--border cloud-trace__image" src="/img/cloud_trace2.png" alt="Issue 249" title="Issue 249" width ="70%">


---

### LIVE DEMO : final one : 1 !

<br>
## mongoose polling jump 

##### use youtube below

<hr width="50%">

<iframe width="560"
    height="315"
    src="https://www.youtube.com/embed/2g34LNLxpIY?start=541"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>

---
### LIVE DEMO : final one : 2 !

<br>
## async code branch jump ! 

##### use youtube below

<hr width="50%">

<iframe width="560"
    height="315"
    src="https://www.youtube.com/embed/2g34LNLxpIY?start=932"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>

---

---
<!-- .slide: class="resume" data-state="nocontrols" -->
<br>
<h1 class="resume__header">Resume</h1>
<h1 class="side-digit side-digit__2" >±</h1>

---

---

<br>
### pros
* LTS works <!-- .element: class="fragment" -->
* tracking <!-- .element: class="fragment" -->
* async () <!-- .element: class="fragment" -->


---

<br>
### cons
* ! prod ready yet <!-- .element: class="fragment" -->
* perfomance -/-  <!-- .element: class="fragment" -->
* cls stops gc  <!-- .element: class="fragment" -->

---

### cls npm
<p class="fragment">
<br>[cls-hooked](https://www.npmjs.com/package/cls-hooked) <br>[continuation-local-storage](https://www.npmjs.com/package/continuation-local-storage)</p>

and &mdash; many &mdash; many &mdash; other packages <!-- .element: class="fragment" -->

---

---
<br>
<!-- .slide: class="discussions"-->
### context discussions

[<img class="image image--border discussions__image" src="/img/solovyov.png" alt="Александр Соловьев Functional Reactive Programming & ClojureScript" title="Александр Соловьев Functional Reactive Programming & ClojureScript" height="300px">](https://www.youtube.com/watch?v=R4sTvHXkToQ) [<img class="image image--border discussions__image" src="/img/rich_hickey.png" alt="The Value of Values with Rich Hickey" title="The Value of Values with Rich Hickey" height="300px">](https://www.youtube.com/watch?v=-6BsiVyC1kM)


[<img class="image image--border discussions__image" src="/img/martin.png" alt="Robert C Martin :<br> Functional Programming; What? Why? When?" title="Robert C Martin :<br> Functional Programming; What? Why? When?" height="300px">](https://www.youtube.com/watch?v=7Zlp9rKHGD4)

<img class="image image--border discussions__image discussions__image--martin" src="/img/Robert_Cecil_Martin.png" alt="Robert_Cecil_Martin" title="Robert_Cecil_Martin" height="200px">
	
---
<!-- .slide: class="main-idea" -->
### and main Idea

## !== being shy to ask

# and communicate<!-- .element: class="fragment main-idea__text" -->


---

---
<!-- .slide: class="i-know-how"-->
<br>
<h1 class="i-know-how__header">The End</h1>
<br>
I know how to make it faster  
... but it would be slower ...

<h1 class="side-digit side-digit__2" >...</h1>

---

### node crew thank you !

for giving and who works with  
[async_hooks](https://nodejs.org/api/async_hooks.html)

---
<br>
### and special thanks to

* [Aleksey Kozyatinskiy](https://twitter.com/ak_239) for giving a way
* [Thomas Watson](https://twitter.com/wa7son) for patient explanations
* [Andreas Madsen](https://twitter.com/andreas_madsen) for willing to help
* [Anna Henningsen](https://twitter.com/addaleax) for answering at all
* [Trevor Norris](https://twitter.com/trevnorris) for the begining
* [Thorsten Lorenz](https://twitter.com/thlorenz) for docs & exampes
* [Ilya Kantor](https://twitter.com/iliakan) for issue [#59](https://github.com/othiym23/node-continuation-local-storage/issues/59)

---

## team thank you !
<img class="image image--border" src="/img/team.jpg" alt="ukit team" title="ukit team" width="59%">

---
<!-- .slide: class="uCircus" -->
<br>
<br>
<div class="uCircus">
	<h3 class="uCircus__header">Stickers Pack : uCircus</h3>
	<img class="image image--border" src="/img/ucircus/ban.jpeg" alt="ban sticker" title="ukit team" width="14%">
	<img class="image image--border" src="/img/ucircus/500.jpeg" alt="500 sticker" title="ukit team" width="14%">
	<img class="image image--border" src="/img/ucircus/raisins.jpeg" alt="ban sticker" title="ukit team" width="15%">
	<img class="image image--border" src="/img/ucircus/permissions.jpeg" alt="permissions sticker" title="ukit team" width="14%">
	<img class="image image--border" src="/img/ucircus/bug.jpeg" alt="bug sticker" title="ukit team" width="14%">
<div>

---

## all in good times

---
<!-- .slide: class="conclusion" -->

<br>
<br>
<br>
<br>

### [my git](https://github.com/wentout) &nbsp; ~ &nbsp; [@wentout](https://twitter.com/wentout)

<br>
**<a class="link reveal__link" target="_blank" href="https://github.com/wentout/HolyJS_2018-AsyncZero-Demo">[ Demo Github ]</a>**
<br>
**<a class="link reveal__link" href="http://context-dive.com/holy">http://context-dive.com/holy</a>**
<br>
<br>
<br>

<span class="conclusion__reveal">made using [reveal.js](https://revealjs.com/#/) & plugins, thanks!</span>