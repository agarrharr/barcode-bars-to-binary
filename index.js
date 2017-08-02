'use strict';
const repeat = require('repeatrepeat');

module.exports = bars =>
	bars.split('').reduce((a, c, i) =>
		a.concat(repeat(Number(c), (i + 1) % 2)),
		''
	);
