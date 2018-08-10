//@flow

/*
	Template Data
		TODO: build async method to load DATA
*/

//import data from "./include/data";

//import Async2018 from "../node_modules/async.2018/src/index";

//interface AsyncRenderer {};

//let renderer:AsyncRenderPipe = Async2018.core.template.AsyncRenderPipe;

import ServiceSession from "./service.session";

//import * as Test00 from "../../spicejs/spice.js/bld/vendor";
//import * as Test01 from "../../spicejs/spice.js/bld/0.spice";
//import SpiceJS from "../../spicejs/spice.js/bld/spice";
/* TODO: UPDATE SPICEJS depeendencies (toolkit)

require("../../spicejs/spice.js/bld/vendor")
require("../../spicejs/spice.js/bld/0.spice")
//let SpiceJS  =(await import("../../spicejs/spice.js/bld/spice")).default;
let SpiceJS  =(require("../../spicejs	/spice.js/bld/spice")).default;
//import SpiceJS from "../node_modules/ryanspice2016-spicejs/dist/";
*/







let debug = true;
let template:AsyncRenderer;
let pipe;

let loader:Element;
let message:Element;
let icons:any;

let state:number = 0;

let requireMSG;

/* WORK LOAD */

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    return JSON.parse(this.getItem(key));
}


/* RENDERER */

pipe = import('./require.js');

/*
	Pre-load
*/

const pre = async evt => {

	let _pipe = (await pipe).default;
	await Promise.all([
		await _pipe.requireCSS(evt),
		await _pipe.requireHTML(evt)
	]);
};

/*
	Post-load
*/

const post = async evt => {

	let _pipe = (await pipe).default;

	await _pipe.requireMSG('icons');
	await _pipe.requireIcons();

	await _pipe.requireMSG('session');

	let STORE:ServiceSession = await new ServiceSession();

	window.STORE = STORE; //TODO what to do?

	let STORE_start = await STORE.settings.start;
	let STORE_resolution = await STORE.settings.resolution;
	let STORE_options = await STORE.settings.options;

	//TODO: WIP SpiceJS import

	await _pipe.requireMSG('spice.js');

	await import("../../spicejs/spice.js/bld/vendor")
	await import("../../spicejs/spice.js/bld/0.spice")
	let SpiceJS  =(await import("../../spicejs/spice.js/bld/spice_cookiesdisabled")).default;

	let app = await eval(`(${STORE.root.launchScript})`)(await SpiceJS, await STORE);

	await _pipe.requireMSG('( :');

	setTimeout(async ()=>{

		await window.controller.goTo(STORE_start);
		await _pipe.requireMSG(') :');
		//console.log(STORE_start);
		(document.getElementById('loader')	).remove();


	},50);

}

//	tabs:ServiceTabs = new ServiceTabs();
//renderer.prototype.context.onreadystatechange = async function(evt:Event){
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
