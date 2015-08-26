/* global convert */
(function(){
	'use strict';

	var input = document.getElementById('input');
	var output = document.getElementById('output');

	var generateOutput = function() {
		output.value = convert(input.value);
	};

	input.addEventListener('change', generateOutput);
	input.addEventListener('keyup', generateOutput);

	var selectOutput = function(){ output.select(); };
	output.addEventListener('focus', function(){
		setTimeout(selectOutput, 0);
	});
	output.addEventListener('click', selectOutput);
})();
