/*
 * Magic 8-ball
 * https://github.com/spoike/8ball
 *
 * Copyright (c) 2012 Mikael Piotrowski
 * Licensed under the MIT license.
 */

exports.answers = [];

// Affirmative answers
exports.answers.push([
	'It is certain',
	'It is decidedly so',
	'Without a doubt',
	'Yes - definitely',
	'You may rely on it',
	'As I see it, yes',
	'Most likely',
	'Outlook good',
	'Yes',
	'Signs point to yes'
]);

// Non-committal answers
exports.answers.push([
	'Reply hazy, try again',
	'Ask again later',
	'Better not tell you now',
	'Cannot predict now',
	'Concentrate and ask again'
]);

// Negative answers
exports.answers.push([
	"Don't count on it",
	'My reply is no',
	'My sources say no',
	'Outlook not so good',
	'Very doubtful'
]);

exports.affirmative = 0;
exports.noncommital = 1;
exports.negative = 2;

var getRandomInt = function(min, max) {
	return Math.floor(Math.random() * (max-min+1)) + min;
};

exports.ask = function(answerOption) {
	var d;
	if (answerOption !== undefined && answerOption >= 0 && answerOption <= 2)
	{
		d = exports.answers[answerOption];
	}
	else
	{
		d = exports.answers[getRandomInt(0, exports.answers.length - 1)];
		
	}
	return d[getRandomInt(0, d.length -1)];
};
