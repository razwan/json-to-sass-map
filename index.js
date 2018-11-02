//--------------------------------------------------------
//-- JSON to SCSS
//--------------------------------------------------------
'use strict';

const forEach = require('lodash.foreach');
const mapKeys = require('lodash.mapkeys');


let indentStyle;

const getSCSS = (chunk, level = 0) => {
	const indent  = indentStyle.repeat(level);
	let scss = '';

	if (typeof chunk === 'object' && !Array.isArray(chunk)) {
		mapKeys(chunk, (value, key) => {
			if (level === 0) {
				scss += `$${key}: `;
			} else {
				scss += `${indent}'${key}': `;
			}

			if (typeof value === 'object') {
				if (Array.isArray(value)) {
					const indent2 = indentStyle.repeat(level + 1);
					scss += '(\n';

					forEach(value, (val1) => {
						if (Array.isArray(val1)) {
							scss += `${indent2}`;
							forEach(val1, (val2) => {
								scss += `${val2} `;
							});
							scss = `${scss.slice(0, -1)},\n`;
						} else {
							scss += `${indent2}${val1},\n`;
						}
					});

					scss = scss.slice(0, -2);
					scss += `\n${indent})`;

				} else {
					scss += `(\n${getSCSS(value, level + 1)}\n${indent})`;
				}
			} else {
				scss += getSCSS(value, level + 1);
			}

			scss += `${level === 0 ? ';\n' : ','}\n`;
		});

		scss = scss.slice(0, -2);
	} else {
		scss += chunk;
	}


	return scss;
};






class JsonToScss {

	convert(data, indent = `\t`) {
		indentStyle = indent;

		return data ? getSCSS(JSON.parse(data)) : false;
	}

}


module.exports = new JsonToScss();
