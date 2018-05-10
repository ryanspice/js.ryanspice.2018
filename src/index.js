//@flow

//import * as bootstrap from 'bootstrap.native/dist/bootstrap-native-v4';

import * as Template from "./render/template";

require(`./assets/css/global.scss`);

const context:HTMLDocument = document;

let template;
let state = 0;
context.onreadystatechange = async function(evt){

	if (state==0)
	template = await new Template.AsyncRenderPipe(evt);

	console.log(template)
	if (state==1)
		return;
	const FeatherIcons = await require('feather-icons');
	await FeatherIcons.replace();

	document.body.onresize = async ()=>{
		document.getElementById('scroll').style.height = (window.innerHeight - (62.5*5)) + "px";
	};
	await document.body.onresize();

	state++;
};
