'use strict';

module.exports = (function() {
	function call (func, ...params) {
		if(typeof func._ === 'function' && func.T.validator(params)) {
			return func._.apply(this, params);
		} else throw new TypeError(`${func}, (${params}) is wrong arguments to call function`);
	}

	return {
		'call' : call
	};
})();