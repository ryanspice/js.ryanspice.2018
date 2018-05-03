//@flow

import * as bootstrap from 'bootstrap.native/dist/bootstrap-native-v4';

require(`./assets/css/global.scss`);

//import * as winstrap from '../node_modules/winstrap/src/scss/winstrap.scss';

import render from "./render";

import {
	iterateTemplate
} from "./render/template";

import menu from "./data/menu";

const context:HTMLDocument = document;

let s:number;

context.onreadystatechange = async function(evt){

	s = '';

	switch(context.readyState){

		case 'interactive':

		break;

		case 'complete':

			await iterateTemplate(render.template[0]);

		break;
	}

};
