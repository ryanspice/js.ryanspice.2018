//@flow

import ServiceSession from "./service.session";
require('./include/storage.stringify');
let pipe = import('./require.js');

/*
	Pre-load - called onreadystatechange = 1
*/

const pre = async evt => {

	let _pipe = (await pipe).default;

	await Promise.all([
		await _pipe.requireCSS(evt),
		await _pipe.requireHTML(evt)
	]);

};

/*
	Post-load - called onreadystatechange = 2
*/

const post = async evt => {

	// PIPING METHODS
	let pipes = (await pipe).default;

	// HOISTING VARIABLES;
	await pipes.requireMSG('session');
	let STORE:ServiceSession = await new ServiceSession(true);
	let STORE_start = await STORE.settings.start;
	let STORE_resolution = await STORE.settings.resolution;
	let STORE_options = await STORE.settings.options;

	// GET ICONS
	await pipes.requireMSG('icons');
	await pipes.requireIcons();

	// GET SPICEJS GAME FRAMEWORK

	await pipes.requireMSG('spice.js');
	await import("../../spicejs/spice.js/bld/vendor");
	await import("../../spicejs/spice.js/bld/0.spice");
	//TODO: WIP SpiceJS import
	let SpiceJS = (await import("../../spicejs/spice.js/bld/spice_cookiesdisabled")).default;

	// LAUNCH EVALULATE SPICEJS GAME FRAMEWORK

	let app;

	try{

		app = await eval(`(${STORE.root.launchScript})`)(await SpiceJS, await STORE);

	} catch(e) {

		await pipes.requireMSG('() :');

		// TODO: CATCH ERRORS

	}

	await pipes.requireMSG('listeners');

	document.onkeydown = function(evt) {

    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape) {
       window.controller.goTo('engine');
			 document.getElementsByClassName('expand')[0].classList.remove('expand');
    }

	};

	// ARTIFICAL DELAY, APP NAVIGATE

	setTimeout(async ()=>{
		await pipes.requireMSG(') :');
		await window.controller.goTo(STORE_start);
		(document.getElementById('loader')).remove(); // TODO: Hide?

	},50);

}

/*

 	IN

*/

let state:number = 0;
let message:Element;

document.onreadystatechange = async function(evt:Event){

	message = document.getElementsByClassName('load-text')[0];

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
