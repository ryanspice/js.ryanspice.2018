
let context = require.context(".", true, /\.js$/);

let obj = {};

context.keys().forEach(function (key) {

	let ctx = context(key).default;
	for(let key in ctx){

		if (typeof ctx[key] == 'function')
			ctx[key] = ctx[key].toString();
	}

	obj[key.replace("./", "").replace(".js", "").replace(".t", "")] = ctx;

});

export default obj;
