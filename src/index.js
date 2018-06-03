//@flow

//import * as bootstrap from 'bootstrap.native/dist/bootstrap-native-v4';

import * as Template from "./render/template";

// import * as Tim from "async.2018";


import * as Async2018 from "../node_modules/async.2018/dist/index"

console.log(Async2018.default);

require(`./assets/css/global.scss`);

const FeatherIcons = require('feather-icons');
const context:HTMLDocument = document;

let template;

let state:number = 0;

context.onreadystatechange = async function(evt){

	switch(state){

		case 0:

			template = await new Template.AsyncRenderPipe(evt);

			document.body.onresize = async ()=>{
				document.getElementById('scroll').style.height = (window.innerHeight - (48*6)) + "px";
				await FeatherIcons.replace();
			};
			await document.body.onresize();
			window.controller.goTo('primary');

		break;
		case 1:

			return;

		break;
	}


	state++;
};
