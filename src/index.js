//@flow

declare var SpiceJS:SpiceJS;
import pipe from "./require";

import log from "./log";

import engine from "./engine";

let store;

const context:Document = document;

context.state = 0;
context.log = log;
context.pre = async function(evt:Event){

	context.log.debug('context.pre');
	context.log.trace();

	await Promise.all([
		await pipe.requireCSS(evt),
		await pipe.requireHTML(evt),
		await pipe.requireListeners(evt)
	]);

	context.store = window.session;
	context.log.debug('context.pre complete');
	context.log.trace();

};

/*
 * Post-load - called onreadystatechange = 2
 */

context.post = async function(evt:Event):Promise<void> {

	const text = require('./service.message.bundle').default;

	context.log.debug('post');
	context.log.trace();


	//GET ICONS

	await pipe.requireMSG(text.inital.icons);
	await pipe.requireIcons();

	// STORAGE SESSION
	await pipe.requireMSG(text.inital.session);

	await sessionUpdateData(false);
	//GET SPICEJS GAME FRAMEWORK
	await pipe.requireMSG(text.inital.fmrk);
	await engine(pipe, context.store);
	await window.controller.goTo(await context.store.settings.start);

	await pipe.requireMSG(text.inital.fail); // displays fail if something went wrong
	(context.getElementById('loader')).remove(); // TODO: Hide?

	context.log.debug('post complete');
	context.log.trace('');

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
