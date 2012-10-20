# magicball

Worlds most popular advice giving and fortune-telling toy, now implemented in Node!

## Getting Started

Install the module with: `npm install magicball`

## Usage

There is one method, `ask`, to get an answer from the magic ball.

```javascript
var magicball = require('magicball');

var answer = magicball.ask();
```

The ask method by default chooses randombly between three types of answers:

* Affirmative
* Non-commital
* Negative

If you only wish to have one of either you can pass a parameter to the `ask` method.

```javascript
var magicball = require('magicball');

var answer = magicball.ask(magicball.affirmative);
answer = magicball.ask(magicball.noncommital);
answer = magicball.ask(magicball.negative);
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## Release History

* 0.1.0 - 12-10-21 - Initial release

## License

Copyright (c) 2012 Mikael Piotrowski  
Licensed under the MIT license.
