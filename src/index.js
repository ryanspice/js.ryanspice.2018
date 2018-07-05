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
let icons:any;

let loader:Element;
let message:Element;
let state:number = 0;


renderer.prototype.context.onreadystatechange = async function(evt:Event){

	message = document.getElementsByClassName('load-text')[0];

	switch(state){

		case 0:


			await require(`./assets/css/global.scss`);
			message.innerText = await "css";


			renderer.prototype.template = await data;
			template = await new renderer(evt);
			message.innerText = await "async.2018";


			icons = await require('feather-icons');
			message.innerText = await "feather-icons";

		break;

		case 1:


			await icons.replace();
			message.innerText = await "please wait";

			await window.controller.goTo('engine');

			(document.getElementById('loader')).remove();


		break;
	}

	state++;
};
