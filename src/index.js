//@flow

require('./include/storage.stringify');

import ServiceSession from "./service.session";

let pipe = import('./require.js');

import {
	sleep
} from "./include/util";

let STORE:ServiceSession;

/* Pre-load - called onreadystatechange = 1 */

const pre:Function = async function(evt){

	let _pipe = (await pipe).default;

	await Promise.all([
		await _pipe.requireCSS(evt),
		await _pipe.requireHTML(evt),
		await _pipe.requireListeners(evt)
	]);

};

/* Post-load - called onreadystatechange = 2 */

const post:Function = async function(evt){

	// PIPING METHODS
	let pipes = (await pipe).default;

	// HOISTING VARIABLES;
	await pipes.requireMSG('session');

	if (!sessionStorage.getItem('saved')){

		STORE = await new ServiceSession(true);

	}	else {

		STORE = await new ServiceSession(false);

	}

	// GET ICONS
	await pipes.requireMSG('icons');
	await pipes.requireIcons();

	// GET SPICEJS GAME FRAMEWORK

	await pipes.requireMSG('spice.js');
	//await import("../../spicejs/spice.js/bld/vendor");
	//await import("../../spicejs/spice.js/bld/0.spice");


	await import("./sjs/vendor");
	await import("./sjs/0.spice");
	//TODO: WIP SpiceJS import
	//let SpiceJS = require('../../spicejs/spice.js/bld/spice_cookiesdisabled');

	//let SpiceJS = (await import("../../spicejs/spice.js/bld/spice_cookiesdisabled"));
	//let SpiceJS = (await import("./sjs/spice")).default;

	await import('./sjs/spice_cookiesdisabled')
console.log(SpiceJS)
	// LAUNCH EVALULATE SPICEJS GAME FRAMEWORK

	try{

		await eval(`(${STORE.root.launchScript})`)(await SpiceJS, await STORE);
		//app = await eval(`(${STORE.root.launchScript})`)(await SpiceJS, await STORE);

	} catch(e) {

		await pipes.requireMSG('() :');

		// TODO: CATCH ERRORS

	}

	// ARTIFICAL DELAY, APP NAVIGATE


	await pipes.requireMSG(') :');

	//TODO MOVE?

	await window.get(false); // TODO: Config :: IF STORE HAS FRESTSTART enabled

	await window.controller.goTo(await STORE.settings.start);

	(document.getElementById('loader')).remove(); // TODO: Hide?

}

/* onreadystatechange */

let state:number = 0;

document.onreadystatechange = async (evt:Event)=>{

	let message = document.getElementsByClassName('load-text')[0];

	switch(state){

		case 0:

			await pre(evt);

		break;

		case 1:

			await post(evt);

		break;
	}

	state++;
};
