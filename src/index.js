//@flow

//import * as bootstrap from 'bootstrap.native/dist/bootstrap-native-v4';

import * as Template from "./render/template";

require(`./assets/css/global.scss`);

const FeatherIcons = require('feather-icons');
const context:HTMLDocument = document;

let template;
let state = 0;
context.onreadystatechange = async function(evt){

	if (state==0)
	template = await new Template.AsyncRenderPipe(evt);

	console.log(template)
	if (state==1)
		return;

	document.body.onresize = async ()=>{
		document.getElementById('scroll').style.height = (window.innerHeight - (48*6)) + "px";
		await FeatherIcons.replace();
	};
	await document.body.onresize();
	window.controller.goTo('primary');

	state++;
};
