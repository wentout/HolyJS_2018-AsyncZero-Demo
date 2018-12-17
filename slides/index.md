
<!-- .slide: class="slide slide--introduction introduction" data-state="nocontrols" data-external="slides/1st.html" -->

---

---

programmer's lullaby

---

---<!-- .slide: class="slide slide--who-am-i"  -->
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
<!-- .slide: class="slide the-beginning" data-transition="none" -->

# In the beginning<br>was the Word <!-- .element: class="the-beginning__header header header--h1" -->

---

<!-- .slide: class="slide and-word-was" data-transition="zoom" -->

##### And word was <!-- .element: class="and-word-was__header"-->

<h1 class="and-word-was__subtitle">JavaScript</h1>

single threaded synchronous programming language <!-- .element: class="and-word-was__text" -->

---

<!-- .slide: class="slide they-invented" data-transition="none" -->

## But then they invented <!-- .element: class="they-invented__subheader" -->
# asynchrony <!-- .element: class="they-invented__header" -->
<br>
<pre><code class="lang-javascript hljs fragment they-invented__code">// and continued reproducing it everywhere
</code></pre>
<pre><code class="lang-javascript hljs fragment they-invented__code">// for everything they do
</code></pre>
<pre><code class="lang-javascript hljs fragment they-invented__code">// & for bugs
</code></pre>


---

<!-- .slide: class="slide all-complicated" data-transition="none" -->

## And this    <!-- .element: class="all-complicated__subheader" -->
## how all become  <!-- .element: class="all-complicated__subheader" -->
# too complicated<!-- .element: class="fragment all-complicated__header"-->
<pre ><code class="lang-javascript hljs fragment all-complicated__code">// and going only worse
</code></pre>

---
<!-- .slide: data-state="nocontrols" -->

--- <!-- .slide: class="slide relations-->

<h1 class="relations__header">relations </h1>

### & <!-- .element: class="relations__subheader" -->
# considerations <!-- .element: class="relations__subheader" -->

<h1 class="side-digit side-digit__1 relations__digit">0</h1>

---

--- <!-- .slide: class="slide significant" -->
<br>
<br>
most of all significant data  
<!-- .element: class="significant__text" -->
collected from issues or meetings of  <!-- .element: class="significant__text" -->

[<img class="image image--border significant__image" src="/img/diag_group.png" alt="node diagnostics group" title="node diagnostics group" width ="50%">](https://github.com/nodejs/diagnostics)


---
<!-- .slide: class="slide debug--in-progress" -->
## Debugging in Production  <!-- .element: class="debug--in-progress__header" -->

[<img class="image image--border debug--in-progress__image" src="/img/nickkooper.png" alt="Николай Матвиенко – Поиск и устранение неисправностей Node.js-приложений под капотом" title="Николай Матвиенко – Поиск и устранение неисправностей Node.js-приложений под капотом" width ="70%">](https://www.youtube.com/watch?v=_qzFJ2MPVWQ)

---
<!-- .slide: class="slide debug--in-production" -->

## Debugging in Production <!-- .element: class="debug--in-production__header" -->

[<img class="image image--border debug--in-production__image" src="/img/wa7son.png" alt="Debugging Node.js in Production — Thomas Watson" title="Debugging Node.js in Production — Thomas Watson" width ="70%">](https://www.youtube.com/watch?v=briH-bfleIM)

---
<!-- .slide: class="slide node-fatal" -->

## Node Fatal flow <!-- .element: class="node-fatal__header" -->

[<img class="image image--border node-fatal__image" src="/img/ai_boy.png" alt="fatal flow talk" title="fatal flow talk" width ="70%">](https://www.youtube.com/watch?v=Lrs6puJ4G2Q)


---

---

<!-- .slide: class="slide what-we-have" data-transition="zoom" -->

<br>
<br>

# what we have <!-- .element: class="what-we-have__header" -->

<br>
an approach to be meaningfull
<!-- .element: class="what-we-have__text" -->  
[w]~[o] statless condition to any key
<!-- .element: class="what-we-have__text" -->

<h1 class="side-digit side-digit__1 what-we-have__digit">1</h1>

---

--- <!-- .slide: class="slide metaphor" -->

<h1 class="metaphor__header">metaphor</h1>

### of async<!-- .element: class="fragment metaphor__subheader" -->

---
<!-- .slide: class="slide coding" data-transition="none" -->

<br>
### 4 coding <!-- .element: class="coding__header" -->

<img class="image image--border coding__image" src="/img/fun/coding.gif" alt="code" title="code" width ="40%">


---
<!-- .slide: class="slide push-button" data-transition="none" -->
<br>
### &mdash; and somehow ... somewhere &mdash;
<!-- .element: class="push-button__header" -->
<img class="image image--border push-button__image" src="/img/fun/button.gif" alt="button" title="button" width ="45%">

---
<!-- .slide: class="slide bug-assignment" data-transition="zoom" -->
<br>
### someone assigns me a bug  <!-- .element: class="bug-assignment__header" -->

<img src="/img/jirabug.png" alt="bug" title="bug" width ="55%"  class="bug-assignment__image bug-assignment__image--note image image--border">
<img src="/img/fun/aaaaa.jpg" alt="bug" title="bug" width ="35%" class="fragment bug-assignment__image bug-assignment__image--fun image image--border">

---
<!-- .slide: class="slide situa" -->
and it that situation  
<!-- .element: class="situa__header"-->

<img class="image image--border situa__image" src="/img/ucircus/500.jpeg" alt="500 sticker" title="ukit team" width="30%">

---

<img class="image image--border" src="/img/real_stack.png" alt="bug" title="bug" width ="85%">

---
<!-- .slide: class="slide stack stack--1" data-state="nocontrols" data-external="slides/stack.html" data-transition="none" -->

---
<!-- .slide: class="slide stack stack--2" data-state="nocontrols" data-external="slides/stack2.html" data-transition="none" -->

---
<!-- .slide: class="slide boss" -->
# boss  <!-- .element: class="boss__header" -->
<img class="image image--border boss__image" src="/img/ucircus/boss2.jpeg" alt="boss sticker" title="ukit team" width="30%">


---
<!-- .slide: class="slide collect-data" data-transition="none" style="min-height: 900px !important" -->
### you collect all available data <!-- .element: class="collect-data__header fragment" -->

<img src="/img/kibana.png" alt="kibana" title="kibana" class="fragment collect-data collect-data__image collect-data__image--note image image--border">

<img src="/img/ucircus/rootlogs.jpeg" alt="faster" title="ukit team" class="fragment collect-data collect-data__image collect-data__image--team collect-data__image--root image image--border">


---
<!-- .slide: class="available-data slide " data-transition="none" style="min-height: 900px !important"-->
### you collect all available data <!-- .element: class="available-data__header" -->

<img src="/img/ucircus/rootlogs.jpeg" alt="faster" title="ukit team"
	class="available-data__image available-data__image--root image image--border">

## prepeare test samples <!-- .element: class="available-data__subheader" -->


<img src="/img/aaaa.jpg" alt="aaaa" title="aaaa" class="fragment available-data__image available-data__image--aaa image image--border">

<img src="/img/ucircus/testenv.jpeg" alt="faster" title="ukit team" class="fragment available-data__image  available-data__image--test image image--border">
	
---
<!-- .slide: class="slide" data-transition="none" style="min-height: 900px !important" -->
### you collect all available data <!-- .element: class="available-data__header" -->

<img src="/img/ucircus/rootlogs.jpeg" alt="faster" title="ukit team" class="available-data__image available-data__image--root image image--border">

## prepeare test samples <!-- .element: class="available-data__header" -->

<img src="/img/ucircus/testenv.jpeg" alt="faster" title="ukit team" class="available-data__image  available-data__image--test image image--border">
	
# nothing helps  <!-- .element: class="available-data__subheader" -->

<img src="/img/ucircus/team.jpeg" alt="nothing_helps" title="nothing_helps" class="fragment available-data__image  available-data__image--team image image--border">


--- <!-- .slide: class="slide schrodinger"-->
<br>
### so what is it ?
<!-- .element: class="schrodinger__header" -->

# schrodinger's<br> code ?
<!-- .element: class="fragment schrodinger__subheader" -->
<img src="/img/fun/shr_cat.jpg" alt="schrodinger" title="schrodinger" class="fragment schrodinger__image schrodinger__image--cat image image--border">

# &nbsp; &nbsp; &nbsp; &nbsp; heisenbug ?
<!-- .element: class="fragment schrodinger__subheader schrodinger__subheader--heisenbug" -->
<img src="/img/fun/heisenbug.jpg" alt="heisenbug" title="heisenbug" class="fragment schrodinger__image schrodinger__image--heisenbug image image--border">

---
<!-- .slide: class="slide live-demo" -->
## LIVE DEMO 1
<!-- .element: class="live-demo__header"  -->

what the 500 looks like 
<!-- .element: class="live-demo__text" -->
### use youtube below
<!-- .element: class="live-demo__subheader" -->


<hr class="live-demo__separator">

<iframe width="560"
    height="315"
    src="https://www.youtube.com/embed/2g34LNLxpIY?start=21"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
	class="live-demo__video"></iframe>


--- <!-- .slide: class="slide trace" -->

### we have trace & code
<!-- .element: class="trace__subheader" -->
##### but not
<!-- .element: class="trace__subheader trace__subheader--small" -->
<h1 class="trace__header">the state 2 fix</h1>
#### meaning : when & how ? <!-- .element: class="fragment trace__subheader trace__subheader--small" -->
### let me describe ... <!-- .element: class="fragment trace__subheader" -->

---
<!-- .slide: class="polymorph" data-transition="zoom" -->
### our data layer is a sort of [polymorph](https://youtu.be/Zc3CDFUfHUA?t=1695)
<!-- .element: class="polymorph__header "-->
<div data-external="svg/poly.svg" class="polymorph__image" ></div>

---
<!-- .slide: class="slide sti" data-transition="fade" -->
### it has fractal struct: [STI & AOP](https://youtu.be/Zc3CDFUfHUA?t=1695)
<!-- .element: class="sti__header" -->
<div data-external="svg/poly_struct.svg" class="sti__image"></div>

---
<!-- .slide: class="slide proto-chain" data-transition="none" -->
#### behaviour driven by prototype chain <!-- .element: class="proto-chain__header proto-chain__header--4" -->
### depends on scope conditions <!-- .element: class="fragment proto-chain__header proto-chain__header--3" -->
## & aims combined bvr for : <!-- .element: class="fragment proto-chain proto-chain__header proto-chain__header--2" -->

# proto + state + (args) <!-- .element: class="fragment proto-chain__text proto-chain__text--state" -->

### &mdash; superposition multiplied context &mdash; <!-- .element: class="fragment proto-chain__text proto-chain__text--context" -->

---
<!-- .slide: class="slide live-demo" -->

## LIVE DEMO 2 
<!-- .element: class=" live-demo__header" -->

same stacktrace but  
<!-- .element: class="live-demo__text" -->
different modules  
<!-- .element: class="live-demo__text" -->
on same 500 stacktrace : fn.bind(state)  
<!-- .element: class="live-demo__text" -->

### use youtube below
<!-- .element: class="live-demo__subheader" -->


<hr class="separator live-demo__separator">

<iframe width="560"
    height="315"
    src="https://www.youtube.com/embed/2g34LNLxpIY?start=327"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
	class="live-demo__video"></iframe>


---
<!-- .slide: class="slide code-example" -->
**and you can have same code** <!-- .element: class="code-example__text" -->
### for example<!-- .element: class="fragment code-example__header" -->
<br>
<img src="/img/error_bar.png" alt="error_bar" title="error_bar" class="fragment code-example__image image image--border">


--- <!-- .slide: class="slide driven-errors" -->
<br>
### and have state driven errors <!-- .element: class="driven-errors__header" -->
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


--- <!-- .slide: class="slide oops" -->
**using ```console.log```** <!-- .element: class="oops__text fragment" -->
### we oops : changed bvr & state <!-- .element: class="fragment oops__header" -->
<pre class="oops__code-wrap"><code class="lang-javascript hljs oops__code">
							var count = 0;
							const s = () => {
									count++;
									return !!(count%2);
							};
			
</code></pre>
<pre class="oops__code-wrap oops__code-wrap--2">
<code class="lang-javascript hljs fragment oops__code oops__code--2">
			console.log(s());
			if (s()) {
				console.log('Oops!');
			}
</code></pre>

<img src="/img/fun/girl_burns.jpeg" alt="girl_burns" title="girl_burns" class="fragment oops__image image  image--border">

---

<!-- .slide: class="make-a-spike" -->
<br>
###  should make a spike <!-- .element: class="make-a-spike__header" -->
<br>
<img class="image  image--border make-a-spike__image" src="/img/ucircus/spike.jpeg" alt="faster" title="ukit team">


---

--- <!-- .slide: class="slide diving" -->


<h1 class="diving__header">diving</h1>

<br>
an approach <!-- .element: class="diving__text" --> 
<br>
hopless though...<!-- .element: class="diving__text" -->

<h1 class="side-digit side-digit__1 diving__digit">2</h1>

---

---
<!-- .slide: class="slide nodejs-robot" -->
<br>
# nodejs is a robot <!-- .element: class="nodejs-robot__header" -->

<img src="/img/terminator.jpg" alt="terminator" title="terminator" class="fragment image  image--border nodejs-robot__image">

--- <!-- .slide: class="statefull" -->

<h1 class="statefull__header">Statefull</h1>
# Context Machine <!-- .element: class="statefull__subheader" -->

---
<img class="image image--border" src="/img/fun/google.jpg" alt="google" title="google" width="80%">

---
<!-- .slide: class="formal-verificatin" -->
## Formal verification - [wiki](https://en.wikipedia.org/wiki/Formal_verification)
<!-- .element: class="formal-verification__header" -->

<img  class="image image--border formal-verification__image" src="/img/notes/formal_verification.jpg" alt="formal_verification" title="formal_verification" width="75%">

---
<!-- .slide: class="sertifying-algorithm" -->

## Certifying algorithm - [wiki](https://en.wikipedia.org/wiki/Certifying_algorithm)
<!-- .element: class="sertifying-algorithm__header" -->
<img  class="image image--border sertifying-algorithm__image" src="/img/notes/certifying_algorithm.jpg" alt="certifying_algorithm" title="certifying_algorithm" width="75%">

---
<!-- .slide: class="quantum-verification"  -->
[<img  class="image image--border" src="/img/notes/quantum_verification.jpg" alt="quantum_verification" title="quantum_verification" width="75%">](https://www.quantamagazine.org/graduate-student-solves-quantum-verification-problem-20181008/)
<!-- .element: class="quantum-verification__image" -->

---
<!-- .slide: class="slide banch-of-links" -->
<br>
... so... <!-- .element: class="banch-of-links__text" -->

### NP-completeness <!-- .element: class="banch-of-links__header" -->
https://en.wikipedia.org/wiki/NP-completeness <!-- .element: class="banch-of-links__link" -->

### Set theory <!-- .element: class="banch-of-links__header" -->
https://en.wikipedia.org/wiki/Set_theory <!-- .element: class="banch-of-links__link" -->

### Theory of constraints <!-- .element: class="banch-of-links__header" -->
https://en.wikipedia.org/wiki/Theory_of_constraints <!-- .element: class="banch-of-links__link" -->

---
<br>
### Self-clocking signal <!-- .element: class="banch-of-links__header" -->
https://en.wikipedia.org/wiki/Self-clocking_signal <!-- .element: class="banch-of-links__link" -->

### Self-synchronizing code <!-- .element: class="banch-of-links__header" -->
https://en.wikipedia.org/wiki/Self-synchronizing_code <!-- .element: class="banch-of-links__link" -->

## what it is about ? <!-- .element: class="banch-of-links__header banch-of-links__header--2" -->
	
Networking? Microcontrollers? <!-- .element: class="banch-of-links__text" -->

---
<!-- .slide: class="slide twenty-years-ago" data-transition="none" -->
<br>
### How Simple it was 20 years ago <!-- .element: class="twenty-years-ago__header" -->

<img src="/img/ie.png" alt="winter" title="winter" width="45%" class="fragment image--noborder twenty-years-ago__image">

<img src="/img/notes/syn_xhr.png" alt="syn_xhr" title="syn_xhr" width="41%" class="fragment image--noborder twenty-years-ago__image twenty-years-ago__image--xhr">

---
<!-- .slide: class="winter"  data-transition="none" -->
<br>
### wish i'd able freeze the state <!-- .element: class="winter__header" -->
<img src="/img/fun/winter.jpeg" alt="winter" title="winter" width="50%" class="fragment image  image--border winter__image">

--- <!-- .slide: class="dump" -->
<h1 class="dump__header">core dump ?</h1>

[<img src="/img/notes/core_dump.png" class="image image--border dump__image" alt="Николай Матвиенко – Поиск и устранение неисправностей Node.js-приложений под капотом" title="Николай Матвиенко – Поиск и устранение неисправностей Node.js-приложений под капотом" width ="70%">](https://www.youtube.com/watch?v=_qzFJ2MPVWQ)

<h3 class="fragment dump__descriptor"> **--abort-on-uncaught-exception** </h3>


--- <!-- .slide: class="slide dtrace" -->

<h1 class="dtrace__header">Profiling & DTrace ?</h1>

<img class="image image--border dtrace__image dtrace__image--dtrace" src="/img/notes/dtrace.png" alt="dtrace" title="dtrace" width="75%">

<img src="/img/notes/flamegraph.png" alt="flamegraph" title="flamegraph" width="75%" class="fragment image image--border dtrace__image dtrace__image--flamegraph">

<h3 class="fragment dtrace__text"> &#161; real </h3>


--- <!-- .slide: class="slide graphana" -->

### we have graphana & prometseus  <!-- .element: class="graphana__subheader" -->
# may be this is it ? <!-- .element: class="graphana__header" -->
<img class="image image--border graphana__image graphana__image--api" src="/img/notes/perf_prof.png" alt="perf_prof" title="perf_prof" width="75%">

<img src="/img/notes/graphana.png" alt="graphana" title="graphana" width="75%" class="fragment image image--border graphana__image graphana__image--trace">

<h3 class="fragment graphana__subtitle"> &#161; <span class="graphana__subtitle--colored">p</span>erf only ! </h3>


--- <!-- .slide: class="slide scope" -->
<br>
<h1 class="scope__header"> [[ Scope ]] </h1>
<br>
<img class="scope__image image image--border" src="/img/notes/scope.png" alt="scope" title="scope" width="50%">

--- <!-- .slide: class="slide cache"-->
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

### threads... <!-- .element: class="threads__header" -->

<img class="image image--border" src="/img/notes/worker_threads.png" alt="worker_threads" title="worker_threads" width="85%">

<h1 class="fragment threads__subtitle threads__subtitle--alarm">EXPERIMENTAL</h1>

<h3 class="fragment threads__subtitle threads__subtitle--state"> --experimental-worker </h3>


---

# ... <!-- .element: class="dots" -->

---
<!-- .slide: class="slide banch-of-links" -->
<br>
## Control flow <!-- .element: class="banch-of-links__header" -->
https://en.wikipedia.org/wiki/Control_flow
<!-- .element: class="banch-of-links__link" -->

## Green threads <!-- .element: class="banch-of-links__header" -->
https://en.wikipedia.org/wiki/Green_threads
<!-- .element: class="banch-of-links__link" -->

### Ruby, Go, Closure, Lisp ... <!-- .element: class="banch-of-links__header" -->

### Smalltalk <!-- .element: class="banch-of-links__header" -->
https://en.wikipedia.org/wiki/Smalltalk
<!-- .element: class="banch-of-links__link" -->


---

--- <!-- .slide: class="slide tracking" -->

<br>
<h1 class="tracking__header tracking__header--0">Trackig</h1>

### Events!<!-- .element: class="fragment tracking__header--3" -->
## Events!<!-- .element: class="fragment tracking__header--2" -->
# Events!<!-- .element: class="fragment tracking__header--1" -->


<h1 class="side-digit side-digit__1 tracking__digit">3</h1>

---

--- <!-- .slide: class="slide entrypoint" -->
## an entrypoint is any op <!-- .element: class="entrypoint__header" -->
### for example request <!-- .element: class="fragment entrypoint__subheader entrypoint__subheader--1" -->
<pre class="entrypoint__code-wrap entrypoint__code-wrap--1"><code class="lang-javascript hljs fragment entrypoint__code">

						const express = require('express');
						const app = express();

						app.use('/entrypoint', (req, res) => {
							// do something
						});
		
</code></pre>

### or file read <!-- .element: class="fragment entrypoint__subheader entrypoint__subheader--2" -->

<pre class="entrypoint__code-wrap entrypoint__code-wrap--2"><code class="lang-javascript hljs fragment entrypoint__code">
						
						require('fs').readFile(name, (err, data) => {
							// THIS is ENTRYPOINT TOO
						})
	
</code></pre>

--- <!-- .slide: class="slide no-async" -->

## no async 4 ECMAScript® 2015 <!-- .element: class="no-async__header" -->
<h3 class="no-async__header" ><a href="http://www.ecma-international.org/ecma-262/6.0/index.html#sec-jobs-and-job-queues"> 8.4 Jobs & Job Queues </a></h3>
<img class="image image--border no-async__image" src="/img/es2015jobs.png" alt="ES 2015 jobs definition" title="ES 2015 jobs definition" width="75%">

is very first note about async tasks  <!-- .element: class="no-async__text" -->
<br />
mostly made 4 promises <!-- .element: class="no-async__text" -->

---
<!-- .slide: class="slide banch-of-links" -->
<br>

#### all asynchronous JS  <!-- .element: class="banch-of-links__header" -->
### is a part of environment <!-- .element: class="banch-of-links__header" -->
<br>

* [MDN  : window.setTimeout](https://developer.mozilla.org/ro/docs/Web/API/window.setTimeout) <!-- .element: class="banch-of-links__link" -->
* [node : global.setTimeout](https://nodejs.org/api/globals.html#globals_settimeout_callback_delay_args) <!-- .element: class="banch-of-links__link" -->
* [node : process.nextTick ](https://nodejs.org/api/process.html#process_process_nexttick_callback_args) <!-- .element: class="banch-of-links__link" -->

---
<!-- .slide: class="slide window-node" data-transition="fade" -->
<br>
## window <!-- .element: class="window-node__header" -->

<pre class="window-node__code-wrap"><code class="lang-javascript hljs window-node__code">
window.onerror = 

</code></pre>

## node.js <!-- .element: class="window-node__header" -->

<pre class="window-node__code-wrap"><code class="lang-javascript hljs window-node__code">

process.on('uncaughtException' ...);

process.on('unhandledRejection' ...);

</code></pre>

---
<!-- .slide: class="slide event-loop" data-transition="fade" -->
## Event Loop <!-- .element: class="event-loop__header" -->

<img class="image image--border event-loop__image" src="/img/ivan.png" alt="Иван Тулуп: асинхронщина в JS под капотом / Михаил Башуров" title="Иван Тулуп: асинхронщина в JS под капотом / Михаил Башуров" width ="57%">
<br>
[Habr](https://habr.com/company/oleg-bunin/blog/417461/)/ [YouTube](https://www.youtube.com/watch?v=bUx8wk4LdoY) 

---
<!-- .slide: class="slide loop-anyway" data-transition="fade" -->
## Event Loop <!-- .element: class="loop-anyway__header" -->

[<img class="image image--border loop-anyway__image" src="/img/philip_roberts.png" alt="Philip Roberts: What the heck is the event loop anyway? | JSConf EU" title="Philip Roberts: What the heck is the event loop anyway? | JSConf EU" width ="57%">](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

---
<!-- .slide: class="slide event-loop-node" data-transition="zoom" -->
## Event Loop : Node <!-- .element: class="event-loop__header" -->

<a class="event-loop-node__link event-loop-node__link--1" href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/"><img class="image image--border event-loop-node__image event-loop-node__image--1" src="/img/notes/event_loop1.png" alt="event loop node" title="event loop node" width ="57%">

<a class="fragment event-loop__link event-loop__link--1 event-loop-node__link--2" href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/">
<img class="image image--border event-loop-node__image event-loop-node__image--2" src="/img/notes/event_loop2.png" alt="event loop node" title="event loop node">
</a>

<a class="fragment event-loop__link event-loop__link--2 event-loop-node__link--3" href="https://medium.com/devschacht/event-loop-timers-and-nexttick-18579cd122e0">
<img class="image image--border event-loop-node__image event-loop-node__image--3" src="/img/notes/event_loop3.png" alt="event loop node" title="event loop node">
</a>


---
<!-- .slide: class="slide live-demo live-demo--3" -->
## LIVE DEMO 3.1 ! <!-- .element: class="live-demo__header" -->

<br>
setTimeout + fs.readFile: test.js <!-- .element: class="live-demo__text" -->

unpredictable behaviour of EventLoop  <!-- .element: class="live-demo__text" -->

https://github.com/wentout/HolyJS_2018-AsyncZero-Demo/blob/master/demos/test.js  

<!-- .element: class="live-demo__text live-demo--3__link" -->

---

---
<!-- .slide: class="slide see-js" -->

how we see js <span class="fragment">&nbsp;&mdash;&nbsp; and everything asynchronous</span>

<!-- .element: class="see-js__text" -->

<img class="image image--border see-js__image" src="/img/tips.gif" alt="js tips" title="js tips" width ="80%">

[(c) original img article link](https://hackernoon.com/12-amazing-javascript-shorthand-techniques-fef16cdbc7fe)
<!-- .element: class="see-js__link" -->
--- 
<!-- .slide: class="slide indeed" -->
# but indeed <!-- .element: class="indeed__header indeed__header--top" -->

<h1 class="indeed__header indeed__header--principal" class="fragment">there is no <br>async at all</h1>

## just sequental flow<!-- .element: class="fragment indeed__text indeed__text--1" -->
### very fast one, though<!-- .element: class="fragment indeed__text indeed__text--2" -->

---
<!-- .slide: class="slide neumann-arch" data-state="nocontrols" -->
<br>
<img class="image image--border neumann-arch__image neumann-arch__image--1 " src="/img/notes/von_newmann.png" alt="von_newmann" title="von_newmann" width="75%">

<img class="fragment image image--border neumann-arch__image neumann-arch__image--2 " src="/img/notes/intel.jpg" alt="intel" title="intel">

<img class="fragment image image--border neumann-arch__image neumann-arch__image--3 " src="/img/notes/amd.jpg" alt="amd" title="amd">


---
<br> <!-- .slide: class="slide async-operation" -->
## every async operation <!-- .element: class="async-operation__subheader" -->

<h1 class="fragment async-operation__header">just triggers</h1>

### interruption callback<!-- .element: class="fragment async-operation__text async-operation__text--danger"-->
## registered somewhere<!-- .element: class="fragment async-operation__text async-operation__text--neutral"-->
# as a continuation code<!-- .element: class="fragment async-operation__text async-operation__text--alarm"-->

---
<!-- .slide: class="slide logical-context" data-transition="fade" -->
### logical context explanation <!-- .element: class="logical-context__header" -->

<div class="logical-context__image" data-external="svg/LogicFlow.svg"></div>

---
<!-- .slide: class="slide logical-context" data-transition="zoom" -->
### logical context failure <!-- .element: class="logical-context__header" -->

<div class="logical-context__image" data-external="svg/LogicFlowFailure.svg"></div>

---
<!--slide: class="slide continuation"-->
<br> 
## and we usually use <!-- .element: class="continuation__header" -->

something like this 2 contextify the continuation <!-- .element: class="continuation__text" -->

<pre class="continuation__code-wrap">
<code class="lang-javascript hljs fragment continuation__code">

fn = async (req, ...args) => { /* ... */ };

 /* ... ¯\_(ツ)_/¯ ... */

fn.bind(context, ...args) => { /* ... */ };

</code></pre>


---
<!-- .slide: class="slide uncaughtException" -->
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
<!-- .slide: class="slide CODE"-->

<h1 class="CODE__header">C.0.D.E.</h1>

<h1 class="side-digit side-digit__1 CODE__digit">4</h1>

[<img class="image image--border CODE__image" src="/img/code.jpg" alt="c.o.d.e." title="Code: The Hidden Language of Computer Hardware and Software - Wikipedia">](https://en.wikipedia.org/wiki/Code:_The_Hidden_Language_of_Computer_Hardware_and_Software)<!-- .element: class="CODE__link" -->


---

---
<!-- .slide: class="slide no-limits" data-transition="zoom" -->
<h1 class="no-limits__header">Imagine</h1>
### code with no limits <!-- .element: class="no-limits__text" -->


---
<!-- .slide: class="slide async-hooks" data-transition="zoom" data-background="white" -->
<br>
<img src="/img/notes/async_hooks.png" alt="async_hooks" title="async_hooks" width="75%" class="image image--noborder async_hooks__image">

<h3 class="fragment async-hooks__text"> no more flag : lets try em </h3>


---
<!-- .slide: class=" slide hooks-list" data-transition="zoom" data-background="white" -->

<h1 class="hooks-list__hook">.init ( asyncId, type, <br>
<span class="hooks-list__descriptor">triggerId, resource</span> )</h1>

<h1 class="fragment hooks-list__hook">.before ( asyncId )</h1>
<h1 class="fragment hooks-list__hook">.after ( asyncId )</h1>
<h1 class="fragment hooks-list__hook">.delete ( asyncId )</h1>
<h1 class="fragment hooks-list__hook hooks-list__hook--resolve">.promiseResolve ( asyncId )</h1>

---
<!-- .slide: class=" slide hooks-list" data-transition="zoom" data-background="white" -->

<h1 class="hooks-list__hook" >asyncId</h1>
<h1 class="fragment hooks-list__hook">triggerId</h1>
<h1 class="fragment hooks-list__hook">async_hooks.executionAsyncId()</h1>
<h1 class="fragment hooks-list__hook">async_hooks.triggerAsyncId()</h1>
<h1 class="fragment hooks-list__hook">type & resource</h1>

---
<!-- .slide: class="slide doc-example" data-transition="none" -->
### documentation exapmle <!-- .element: class="doc-example__header" -->
<pre class="doc-example__code-wrap" ><code class="lang-javascript hljs doc-example__code">
					const async_hooks = require('async_hooks');
					
</code></pre>
<pre class="doc-example__code-wrap doc-example__code-wrap--1" ><code class="lang-javascript hljs fragment doc-example__code">
					const hooks = async_hooks.createHook({
						init(asyncId, type, triggerAsyncId, resource) {
							 /* some code */
						}

						before(asyncId) { /* some code */ }
						
						after(asyncId) { /* some code */ }

						destroy(asyncId) { /* some code */ }
					});
					
</code></pre>

<pre class="doc-example__code-wrap doc-example__code-wrap--2" ><code class="lang-javascript hljs fragment doc-example__code">
					hooks.enable();
					
</code></pre>


---
<!-- .slide: class="slide doc-example"  data-transition="none" -->
### documentation exapmle <!-- .element: class="doc-example__header" -->


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
<!-- .slide: class="slide example-work" data-transition="zoom" -->
<br>
## so this example should work <!-- .element: class="example-work__header" -->
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
<!-- .element: class="example-work__code-wrap" -->

---
<!-- .slide: class="slide articles" data-transition="none" -->
<br>
# ... seems very nice ...  <!-- .element: class="articles__header articles__header--1" -->
## let read some articles <!-- .element: class="articles__header articles__header--2" -->
<br>
### srsly, who and where cares of boring docs<!-- .element: class="fragment articles__text" -->

<h1 class="fragment articles__header--important">my error # 1</h1>


---
<!-- .slide: class="slide" data-transition="zoom" data-background="white"  -->
[<img class="articles__image image image--noborder" src="/img/notes/irina.png" alt="irina async_hooks" title="irina async_hooks" width="85%">](https://medium.com/the-node-js-collection/async-hooks-in-node-js-illustrated-b7ce1344111f)

---
<!-- .slide: class="slide" data-transition="none" data-background="white"  -->
[<img class="articles__image  image image--noborder" src="/img/thorsten.png" alt="Grokking Asynchronous Work in Node.js - Thorsten Lorenz" title="Grokking Asynchronous Work in Node.js - Thorsten Lorenz" width="85%">](https://medium.com/the-node-js-collection/async-hooks-in-node-js-illustrated-b7ce1344111f)


<a href="http://thlorenz.com/talks/async-hooks/book/" class="articles__link articles__link--lorenz fragment"><img class="articles__image articles__image--lorenz image image--border" src="/img/thorsten2.png" alt="Thorsten Lorenz : Introduction | Async Hooks" title="Thorsten Lorenz : Introduction | Async Hooks"></a>


---

---
<!-- .slide: class="slide problems-jim" -->
<br>
# problems... <!-- .element: class="problems-jim__header " -->

<img src="/img/fun/jim.gif" alt="jim codes" title="jim codes" width ="45%" class="fragment problems-jim__image image image--border">

---
<!-- .slide: class="slide talk-title" -->

<br>
## why this talk title ? <!-- .element: class="talk-title__header" -->

<img class="talk-title__image image image--border" src="/img/zero_one.png" alt="async zero" title="NDB example async 2 sync" width ="75%">


---
<!-- .slide: class="slide cls" data-transition="zoom" data-background="black"-->

<br>
## search again ... <!-- .element: class="cls__subheader" -->

### &nbsp;&mdash;&nbsp; Execution Context is : CLS &nbsp;&mdash;&nbsp;  <!-- .element: class="cls__header "--> 

Continuation or Thread Local Storage (CLS)   <!-- .element: class="cls__text" -->
<br> 
[ [ C || T ]LS - wikipedia quote](https://en.wikipedia.org/wiki/Thread-local_storage) summary for JS :
<!-- .element: class="cls__text" -->
> method that binds some data<br>to a logical execution thread
<!-- .element: class="cls__blockquote" -->


---
<!-- .slide: class="slide cls" -->
# What CLS gives <!-- .element: class="cls__subheader" -->
<br>
* meaningfull uncaughtException notes <!-- .element: class="fragment cls__text" -->
* long stack traces <!-- .element: class="fragment cls__text" --> <span class="fragment">[longjohn](https://www.npmjs.com/package/longjohn)</span> <!-- .element: class="fragment cls__text" -->
* async events marks <!-- .element: class="fragment cls__text" -->
* tracing pub~sub <!-- .element: class="fragment cls__text" -->
* simultaneous <br> &nbsp; &nbsp; shared memory <br> &nbsp; &nbsp; &nbsp; calculations <!-- .element: class="fragment cls__text" -->


---
<!-- .slide: class="slide cls-from-npm" -->
<br>
### &nbsp;&mdash;&nbsp; CLS : from npm &nbsp;&mdash;&nbsp; <!-- .element: class="cls-from-npm__header" -->

<br>
Let search for this idea at npm : I'm not the only one ! <!-- .element: class="cls-from-npm__text" -->
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
<!-- .element: class="cls-from-npm__code-wrap"-->
---
<!-- .slide: class="slide zonejs" -->

### Browser Tools : zone.js <!-- .element: class="zonejs__header" -->

##### removed from Angular<!-- .element: class="fragment zonejs__subheader" -->

<a href="https://www.npmjs.com/package/zone" class="link zonejs__link zonejs__link--sl"><img src="/img/zone_sl.png" alt="zone_sl" title="zone_sl" class="image image--border zonejs__image--sl"></a>

<a href="https://github.com/angular/zone.js" class="link zonejs__link zonejs__link--angular"><img src="/img/zone_angular.png" alt="zone_angular" title="zone_angular" class="image image--border zonejs__image zonejs__image--angular"></a>


--- <!-- .slide: class="slide google-cloud"-->

### google cloud tracing CLS <!-- .element: class="google-cloud__header" -->

<a class="link google-cloud__link " href="https://github.com/googleapis/cloud-trace-nodejs"><img class="image image--border google-cloud__image" src="img/cloud-trace-overview-page.png" alt="cloud-trace-overview" title="cloud-trace-overview" width="70%" ></a>

--- <!-- .slide: class="slide andreas-madsen"-->
### Andreas Madsen [dprof](https://github.com/AndreasMadsen/dprof/blob/master/dprof.js)
<!-- .element: class="andreas-madsen__header" -->

<a class="link andreas-madsen__link" href="https://github.com/AndreasMadsen/dprof/blob/master/dprof.js">
<img class="image image--border andreas-madsen__image" src="img/visualizer.png" alt="dprof" title="dprof" width="45%"></a>

--- <!-- .slide: class="slide bubleprof "-->
## [Clinc + Bubbleprof](https://clinicjs.org/blog/introducing-bubbleprof/)
<!-- .element: class="bubleprof__header" -->
<a class="link bubleprof__link" href="https://clinicjs.org/blog/introducing-bubbleprof/">
<img class="image image--border bubleprof__image" src="img/clinic-plus-bubbleprof.gif" alt="Clinc + Bubbleprof" title="Clinc + Bubbleprof" width="61%"></a>


---
<!-- .slide: class="slide git-dive" data-transition="zoom" data-background="white"  -->
<img class="image image--noborder git-dive__image" src="/img/notes/i_did.png" alt="context-dive" title="context-dive" width="85%">

<h3 class="git-dive__text git-dive__text--1"> released </h3>
<h3 class="fragment git-dive__text git-dive__text--2" data-fragment-index="1"> but something<br> still wrong </h3>
<h3 class="fragment git-dive__text git-dive__text--3" data-fragment-index="2"> not everything </h3>
<h3 class="fragment git-dive__text git-dive__text--4" data-fragment-index="3"> &mdash; seems just a nuance &mdash; </h3>


---

---
<!-- .slide: class="slide limitations" -->

<h1 class="limitations__header">Limitations</h1>
<h1 class="side-digit side-digit__1 limitations__digit">5</h1>

---

---
<!-- .slide: class="slide async-listener" -->
### how it started : [async-listener](https://github.com/othiym23/)
<!-- .element: class="async-listener__header" -->

[<img class="image image--border async-listener__image" src="/img/trev1.png" alt="The Birth and Evolution of AsyncHooks - Trevor Norris" title="The Birth and Evolution of AsyncHooks - Trevor Norris" width ="70%">](https://www.youtube.com/watch?v=wlEopv4p6d4)

<img class="image image--border async-listener__image async-listener__image--norris" src="/img/trev2.png" alt="Trevor Norris" title="Trevor Norris" width ="15%" >


---
<!-- .slide: class="slide further-dev" -->
### Further Development  <!-- .element: class="further-dev__header" -->

<img class="image image--border further-dev__image" src="/img/andreas.png" alt="Andreas Madsen github" title="Andreas Madsen github" width ="70%">


---
<!-- .slide: class="slide how-it-is-made"-->
## How It's Made <!-- .element: class="how-it-is-made__header" -->

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
<!-- .slide: class="slide what-we-can" -->
### What we can & what not <!-- .element: class="what-we-can__header" -->


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
<!-- .slide: class="slide func-explanation" data-transition="none" -->
### one function explanation  <!-- .element: class="func-explanation__header" -->
##### same number of async op 4 parallel sync code <!-- .element: class="func-explanation__subheader"-->

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
<!-- .slide: class="slide banch-of-links"-->
### one function explanation  <!-- .element: class="banch-of-links__header" -->
<br>
## Escape analysis <!-- .element: class="banch-of-links__header" -->
https://en.wikipedia.org/wiki/Escape_analysis <!-- .element: class="banch-of-links__link"-->

### Shape analysis (program analysis) <!-- .element: class="banch-of-links__header" -->
https://en.wikipedia.org/wiki/Shape_analysis_(program_analysis)

<!-- .element: class="banch-of-links__link"-->

### Alias analysis <!-- .element: class="banch-of-links__header" -->
https://en.wikipedia.org/wiki/Alias_analysis <!-- .element: class="banch-of-links__link"-->

---
<!-- .slide: class="slide issue-248" -->
##### Promises : [Issue # 248](https://github.com/nodejs/diagnostics/issues/248)
<!-- .slide: class="issue-248__subheader" -->
### perfomance is not so good <!-- .element: class="fragment issue-248__header" -->  
### but they are fixing <!-- .element: class="fragment issue-248__header" -->  

[<img src="/img/me_on_tv.png" alt="Issue 248" title="Issue 248" width ="40%" class="fragment image image--border issue-248__image">](https://www.youtube.com/watch?v=2SCNsozMkF8)

---
<!-- .slide: class="slide problem"-->
## the problem <!-- .element:  class="problem__header" -->

<pre class="problem__code-wrap problem__code-wrap--1"><code class="lang-javascript hljs problem__code">
							const queueArray = [];

							setInterval(() => {
								queueArray.forEach(task => {
									task();
								});
							}, 1000);
</code></pre>

<pre class="problem__code-wrap problem__code-wrap--2"><code class="lang-javascript hljs fragment problem__code">
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
<!-- .slide: class="problem__link"-->


---
<!-- .slide: class="slide issue-249"-->

<br>
### my Issue 249 Story <!-- .element: class="issue-249__header" -->

[<img class="image image--border issue-249__image" src="/img/249.png" alt="Issue 249" title="Issue 249" width ="70%">](https://github.com/nodejs/diagnostics/issues/249)

---
<!-- .slide: class="slide kantor" -->

## Issue 59 : ilya kantor <!-- .element : class="kantor__header" -->

<a class="link kantor__link kantor__link--1" href="https://github.com/othiym23/node-continuation-local-storage/issues/59"><img class="image image--border kantor__image kantor__image--1" src="/img/iliakan.png" alt="iliakan" title="iliakan" height="300px"></a>

<a class="link kantor__link kantor__link--2" href="https://github.com/othiym23/node-continuation-local-storage/issues/59#issuecomment-210144103"><img class="image image--border kantor__image kantor__image--2" src="/img/59.png" alt="59" title="59" height="400px"></a>

---
<!-- .slide: class="slide continuation" -->
### async continuation : 2015 <!-- .element: class="continuation__header" -->

[<img class="continuation__image image image--border" src="/img/async_eco.png" alt="async_eco" title="async_eco" width ="70%">](https://docs.google.com/document/d/1tlQ0R6wQFGqCS5KeIw0ddoLbaSYx6aU7vyXOkv-wvlM/edit)


---
<!-- .slide: class="slide continuation" -->
### async continuation : 2017 <!-- .element: class="continuation__header" -->

[<img class="continuation__image image image--border" src="/img/asyn_js_semantic.png" alt="asyn_js_semantic" title="asyn_js_semantic" width ="70%">](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/08/NodeAsyncContext.pdf)


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