//@flow
declare var SpiceJS:SpiceJS;
declare var document:Document;

import pipe from "./require.js";

import ServiceSession from "./service.session";

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

	// STORAGE SESSION
	await pipe.requireMSG('session');
	const store:ServiceSession = await new ServiceSession(sessionStorage.getItem('saved')?false:true);

	//GET ICONS
	await pipe.requireMSG('icons');
	await pipe.requireIcons();

	//GET SPICEJS GAME FRAMEWORK
	await pipe.requireMSG('spice.js');

	//LAUNCH EVALULATE SPICEJS GAME FRAMEWORK
	try{

		//TODO: WIP SpiceJS import
		await import("./sjs/vendor");
		await import("./sjs/0.spice");
		await import('./sjs/spice_cookiesdisabled')
		await eval(`(${store.root.launchScript})`)(await SpiceJS, await store);
		//app = await eval(`(${STORE.root.launchScript})`)(await SpiceJS, await STORE);

	} catch(e) {

		await pipe.requireMSG('() :');

		throw(e);
	}

	// ARTIFICAL DELAY, APP NAVIGATE
	await pipe.requireMSG(') :');

	//TODO MOVE? WINDOW??????? needs AsyncPipes
	await window.get(false); // TODO: Config :: IF STORE HAS FRESTSTART enabled
	await window.controller.goTo(await store.settings.start);

	(document.getElementById('loader')).remove(); // TODO: Hide?

}

/* Ground ZERO */

document.state = 0;
document.onreadystatechange = async function(evt:Event){

	switch(document.state){

		case 0:

			await pre(evt);

			document.state++;

		break;

		case 1:

			await post(evt);

			document.state++;

		break;
	}

};
