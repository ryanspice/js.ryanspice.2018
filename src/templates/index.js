
let context = require.context(".", true, /\.js$/);

let obj = {};

context.keys().forEach(function (key) {

	obj[key.replace("./", "").replace(".js", "").replace(".t", "")] = context(key).default;

});

export default obj;
