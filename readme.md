Feature Queries
===============

You may have started using Modernizr, and you're thinking "Wow, this is awesome, I can make fallbacks for features and all that crap!". That's great, I agree.
Then, after fiddling around for a while, you're looking at your new code and thinking to yourself "Goddamn, I'm serving these crappy browsers loads of data they don't do anything with.
Following that line of thought, your next idea might be "Gee, I wish I could somehow put these things in separate stylesheets, and load only the ones I need, if only the media queries could do that..."
Well, it's your lucky day, and your prayers have been answered! So behold, the

Featurizr
=========

This is a library that uses your trusty little Modernizr to give you the possibility of specifying required features for a certain stylesheet.
Using it is a simple matter, illustrated in the following excerpt:

```html

<head>
	<script src="modernizr.js"></script>
	<link rel="stylesheet" href="i-get-loaded-anyway.css" />
	<link rel="stylesheet" href="i-load-only-with-javascript-on.css" media="(feature: js)" />
	<link rel="stylesheet" href="i-need-audio-elements.css" media="(feature: audio)" />
	<link rel="stylesheet" href="i-want-canvas-and-audio-and-video.css" media="(feature: audio, video) and (feature: canvas)" />
	<link rel="stylesheet" href="i-need-a-wide-screen-and-javascript" media="(feature: js) and (min-width: 1000px)" />
	<script src="featurizr.js"></script>
</head>

```

So, just remember to include Modernizr, and add Featurizr right AFTER your stylesheets, and you're good to go!
And you know what the best part is? It doesn't give a damn if media queries even work in your browser! It also means that it works with all those fancy media query shims. Heck, you can even combine feature and media queries if you like. And it gets even better: all this in 0.5kb!!!

Licensed under MIT license.

F.A.Q
-----

Q: My query works in browser a and not in browser b! Where do I file the bug?

A: A few things before you file anything:

* Make sure the features are actually supported in the browser.
* Make sure you're producing valid syntax for the media query parser, e.g. since the Featurizr converts succeeded queries into the 'all' keyword, make sure the order is right (put your feature query first is a good rule of thumb).
* If you still feel like filing one, see https://github.com/jussi-kalliokoski/Featurizr/issues

Q: I don't like Modernizr, can I use Featurizr without it?

A: Yeah, you can, if you just need to detect whether JavaScript is on or not, but why would you do such a thing?

Browser Support
---------------

Just about every browser that's made after IE 5.5 and supports JavaScript. IE 5.5 might work as well, but hasn't been tested. If it doesn't work in a certain browser, you can file a bug if you like, and we'll have a look at it.
