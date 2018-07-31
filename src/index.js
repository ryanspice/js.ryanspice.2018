//@flow

/*
	Template Data
		TODO: build async method to load DATA
*/

//import data from "./include/data";

//import Async2018 from "../node_modules/async.2018/src/index";

//interface AsyncRenderer {};

//let renderer:AsyncRenderPipe = Async2018.core.template.AsyncRenderPipe;
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

pipe = require('./require.js').default;

/*
	Pre-load
*/

const pre = async evt => {
	await Promise.all([
		await pipe.requireCSS(evt),
		await pipe.requireHTML(evt)
	]);
};

/*
	Post-load
*/

const post = async evt => {

	await pipe.requireMSG('icons');
	await pipe.requireIcons();

	await pipe.requireMSG('please wait');
	setTimeout(async ()=>{

		await window.controller.goTo('engine');
		(document.getElementById('loader')	).remove();

	},50);

}


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
