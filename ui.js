/* global convert */
(function(){
	'use strict';

	var generateOutput = function(text) {
		document.getElementById('output').value = convert(text);
	};

	var input = document.getElementById('input');
	input.addEventListener('change', function(){ generateOutput(input.value); });
	input.addEventListener('keyup', function(){ generateOutput(input.value); });
})();
