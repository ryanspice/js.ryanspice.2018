var context = require.context(".", true, /\.js$/);
 var obj = {};
 context.keys().forEach(function (key) {
		 obj[key] = context(key).default;
 });


export default obj;
