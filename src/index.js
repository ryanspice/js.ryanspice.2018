//@flow

/*
	Template Data
		TODO: build async method to load DATA
*/

import data from "./include/data";

import Async2018 from "../node_modules/async.2018/src/index";

interface AsyncRenderer {};

let renderer:AsyncRenderPipe = Async2018.core.template.AsyncRenderPipe;
let template:AsyncRenderer;
let loader:Element;
let icons:any;

let state:number = 0;

renderer.prototype.context.onreadystatechange = async function(evt:Event){

	switch(state){

		case 0:

			await require(`./assets/css/global.scss`);

			renderer.prototype.template = data;
			template = await new renderer(evt);

			icons = await require('feather-icons');

		break;

		case 1:

			await icons.replace();

			await window.controller.goTo('engine');

			(document.getElementById('loader')).remove();

		break;
	}

	state++;
};
