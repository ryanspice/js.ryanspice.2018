//@flow

/*
	Template Data
		TODO: build async method to load DATA
*/

import data from "./include/data";

import Async2018 from "../node_modules/async.2018/src/index";

require(`./assets/css/global.scss`);

const FeatherIcons = require('feather-icons');
const context:HTMLDocument = document;

const renderer:AsyncRenderPipe = Async2018.core.template.AsyncRenderPipe;

let state:number = 0;
let loader;
context.onreadystatechange = async function(evt:Event){

	switch(state){

		case 0:

			renderer.prototype.template = data;

			let template = await new renderer(evt);

			loader = document.getElementById('loader');

		break;

		case 1:

			await FeatherIcons.replace();

			await window.controller.goTo('primary');

			loader.style.display = "none";

		break;
	}

	state++;
};
