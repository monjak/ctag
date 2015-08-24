(function(){
	'use strict';
	/* global window */

	var regex = (function(){
		// Whitespace
		var s = '[ \\t\\v]*';

		var prefix = s + '(SB:)?';
		var amount = s + '((\\d{1,3})(' + s + 'x)?)?';
		var edition = s + '(\\[' + s + '([A-Z]{2,4})' + s + '\\])?';
		var name = s + '([ÆA-Z][æa-zÆA-Z\', -]{2,33}[a-z])';

		return new RegExp('^' + prefix + amount + edition + name, 'mg');
	})();

	var convert = function(input){
		var output = input.replace(regex, function(_0, prefix, _1, amount, _2, _3, edition, name){
			return [
				prefix,
				amount ? amount + 'x' : '',
				edition
					? '[card=e:' + edition.toLowerCase() + ' ' + name + ']' +
						'[' + edition + '] ' + name + '[/card]'
					: '[c]' + name + '[/c]'
			].filter(function(x){ return x; }).join(' ');
		});
		return output;
	};

	if (typeof module !== 'undefined' && module.exports)
		module.exports = convert;
	else if (typeof window !== 'undefined')
		window.convert = convert;
	else
		throw new Error();
})();
