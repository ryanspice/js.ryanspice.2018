//@flow

declare var SpiceJS:SpiceJS;
import pipe from "./require";

import log from "./include/log";

//import engine from "./engine";
//engine(null, store);

const context:Document = document;

context.state = 0;
context.log = log;

/*
 * Pre-load - called onreadystatechange = 1
 */

context.pre = async function(evt:Event){

	await context.log.debug('context.pre');
	await context.log.trace();

	await Promise.all([
		await pipe.requireCSS(evt),
		await pipe.requireHTML(evt),
		await pipe.requireListeners(evt)
	]);

	context.store = await window.session;
	await context.log.debug('context.pre complete');
	await context.log.trace();

};

/*
 * Post-load - called onreadystatechange = 2
 */

context.post = async function(evt:Event):Promise<void> {

	await context.log.debug('post');
	await context.log.trace();

	const text = await require('./service.message.bundle').default;

	//GET ICONS
	await pipe.requireMSG(text.inital.icons);
	await pipe.requireIcons();

	// STORAGE SESSION
	await pipe.requireMSG(text.inital.session);


	//GET SPICEJS GAME FRAMEWORK
	await pipe.requireMSG(text.inital.fmrk);

	await window.controller.goTo(await context.store.settings.start);

	//REMOVE LOADING
	await pipe.requireMSG(text.inital.fail); // displays fail if something went wrong
	await (context.getElementById('loader')).remove(); // TODO: Hide?

	await context.log.debug('post complete');
	await context.log.trace('');

};

/* Ground ZERO */

context.onreadystatechange = async function(evt:Event):Promise<void> {

	switch(context.state){

		case 0:

			context.log.debug('context.onreadystatechange');

			await context.pre(evt);

			context.state++;

		break;

		case 1:

			context.log.debug('context.onreadystatechange');

			await context.post(evt);

			context.state++;

		break;
	}

};
