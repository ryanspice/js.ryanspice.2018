//@flow

import Async2018 from "async.2018/dist/async-template";

/*
try{

	Async2018 = window['async-template-library']===undefined?require('../../async-2018/dist/async-template.js'):window['async-template-library'];

}catch(e){

	Async2018 = window['async-template-legacy-library']===undefined?require('../../async-2018/dist/async-template.legacy.js'):window['async-template-legacy-library'];
	log.warn("legacy bundle envoked");

}

if (Async2018.default){

	Async2018 = Async2018.default;

}
*/

const AsyncTemplate = Async2018.pipe;
const AsyncView = Async2018.view;
const AsyncController = Async2018.mvc;

/**
 * exports
 */
export default AsyncTemplate;
export {
	AsyncTemplate,
	AsyncView,
	AsyncController
};
