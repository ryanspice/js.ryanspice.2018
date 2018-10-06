//@flow

declare var SpiceJS:SpiceJS;

import pipe from "./require";
import engine from "./engine";

import ServiceSession from "./service.session";
import ServiceMessageBundle from "./service.message.bundle";

const context:Document = document;

/* Pre-load - called onreadystatechange = 1 */

const pre:Function = async function(evt:Event){

	await Promise.all([
		await pipe.requireCSS(evt),
		await pipe.requireHTML(evt),
		await pipe.requireListeners(evt)
	]);

};

/* Post-load - called onreadystatechange = 2 */

const post:Function = async function(evt:Event){

	//GET ICONS
	await pipe.requireMSG(ServiceMessageBundle.inital.icons);
	await pipe.requireIcons();

	// STORAGE SESSION
	await pipe.requireMSG(ServiceMessageBundle.inital.session);
	const store:ServiceSession = await new ServiceSession(sessionStorage.getItem('saved')?false:true);

	//TODO MOVE? WINDOW??????? needs AsyncPipes
	await window.get(false); // TODO: Config :: IF STORE HAS FRESTSTART enabled

	//GET SPICEJS GAME FRAMEWORK
	await pipe.requireMSG(ServiceMessageBundle.inital.fmrk);
	await engine(pipe, store);
	await window.controller.goTo(await store.settings.start);

	await pipe.requireMSG(ServiceMessageBundle.inital.fail); // displays fail if something went wrong
	(context.getElementById('loader')).remove(); // TODO: Hide?

}

/* Ground ZERO */

context.state = 0;
context.onreadystatechange = async function(evt:Event){

	switch(context.state){

		case 0:

			await pre(evt);

			context.state++;

		break;

		case 1:

			await post(evt);

			context.state++;

		break;
	}

};
