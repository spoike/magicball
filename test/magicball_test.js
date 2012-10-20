var eb = require('../lib/magicball');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

function contains(a, obj) {
	var i = a.length;
	while (i--) {
		if (a[i] === obj) {
			return true;
		}
	}
	return false;
}

function isIn(index, answer) {
	return contains(eb.answers[index], answer);
}

exports['magicball ask'] = {
  setUp: function(done) {
    done();
  },
  'any answer': function(test) {
    test.expect(1);

    var answer = eb.ask();
    var doesContain = contains(eb.answers[0], answer) ||
      contains(eb.answers[1], answer) ||
      contains(eb.answers[2], answer);
	test.ok(doesContain);

    //test.equal(_8ball.awesome(), 'awesome', 'should be awesome.');
    test.done();
  },
  'affirmative answer': function(test) {
    test.expect(3);
    var answer = eb.ask(eb.affirmative);
    test.ok(isIn(eb.affirmative, answer), "should be affirmative but was not");
    test.ok(!isIn(eb.noncommital, answer), "should be affirmative but was noncommital");
    test.ok(!isIn(eb.negative, answer), "should be affirmative but was negative");
    test.done();
  },
  'noncommital answer': function(test) {
    test.expect(3);
    var answer = eb.ask(eb.noncommital);
    test.ok(isIn(eb.noncommital, answer), "should be commital but was not");
    test.ok(!isIn(eb.affirmative, answer), "should be noncommital but was affirmative");
    test.ok(!isIn(eb.negative, answer), "should be noncommital but was negative");
    test.done();
  },
  'negative answer': function(test) {
    test.expect(3);
    var answer = eb.ask(eb.negative);
    test.ok(isIn(eb.negative, answer), "should be negative but was not");
    test.ok(!isIn(eb.affirmative, answer), "should be negative but was affirmative");
    test.ok(!isIn(eb.noncommital, answer), "should be negative but was noncommital");
    test.done();
  }
};
