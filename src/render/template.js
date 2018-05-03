//@flow

//var para = document.createElement("p");
//var nod.  pendChild(node);

//var element = document.getElementById("div1");
//element.appendChild(para);

import {default as loop} from './loop';
//import {default as data} from '../api/data';
import {default as data} from '../include/data';

interface TemplateElement {

  type: string;
  value: string;

  renderTo?: string;
  class?: string;
  style?: string;

}

interface TemplateItem {

	id:string;
	value:TemplateElement;

}

interface TemplateScheme {

	id:string;
	value:TemplateItem;

}

interface HTML5Element extends HTMLElement {


	  class?: string;
	  style: CSSStyleDeclaration;
		value?:string;
		renderTo?:any;
}


type Element = HTML5Element|null;


let elements = [];
let elm:Element;

/*const createTemplateItem = async(item)=>{

	let elm;
	let template = item.value;

	elm = document.createElement(template.type);
	elm.style = template.style;
	elm.value = template.value;

	elements[item.id] = elm;

}*/

let trace = 0;

let templateDefer = [


];

export const iterateTemplate = async (tpl:Array<Object>) => {

	console.log(tpl,typeof tpl);

	if (trace){

		console.warn(`renderer::`+trace);

		return;
	}

	trace++;


	let layers = tpl;
	let length = layers.length;

	//let elements = tpl;
	let type, style, value;
	let pick = 0;
	let template = null;

	let templatePicks = [
		'id',
		'value',
		'class',
		'className',
		`innerHTML`
	];


	let elm;
	let elms = [];

	/* Establish target based on renderPath */

	const createRenderTarget = async(template:TemplateElement)=>{

		//Verify if rendering target exists
		if (template.renderTo!=undefined)
			if (document.querySelectorAll(template.renderTo)[0] == undefined){

			return '2430';
		}

		//Return querySelected element, fallback on body
		return document.querySelectorAll(template.renderTo)[0] || document.body;
	}

	/* Create a DOM element in memory */

	const createElementOfType = async(template:TemplateElement)=>{

		let elm:any;

		const type:string = template.type;
		const renderTo = await createRenderTarget(template);

		elm = (await document.createElement(template.type):HTML5Element);

		switch(type){

			case "style":

				elm.innerHTML = template.value;
				elm.renderTo = await document.head;

			break;

			default:

				elm.style = template.style;
				elm.value = template.value;
				elm.renderTo = renderTo; //await createRenderTarget(template);

		}

		if (elm.renderTo=='2430'){

			templateDefer.push(template);

			return false;
		}

		if (templatePicks)
		for(let prop in templatePicks){

			if (template[templatePicks[prop]])
				elm[templatePicks[prop]] = template[templatePicks[prop]];

		}

		return elm;
	}

	/**/

	const createTemplateItem = async(item)=>{

		let template = item.value;
		let element = await createElementOfType(template);

		if (element!=false){

			elms[item.id] = (elements[item.id]) = element;

		} else {

			// if debugger warning true :: console.log('false')

		}

	}

	let check = (evt) =>{

		if (elms[evt.id])
		if (elms[evt.id].renderTo)
			elms[evt.id].renderTo.appendChild(elms[evt.id]);

	}

	//await console.log('elms',elms,data);

	await loop(data,createTemplateItem);

	/*
	await loop(data,(evt)=>{

		if (elms[evt.id])
		if (elms[evt.id].renderTo)
			elms[evt.id].renderTo.appendChild(elms[evt.id]);

	});
	*/

	await loop(data,check);

	//TODO: recursive
	elms = templateDefer;
	await loop([templateDefer],createTemplateItem);

	await loop(data,check);
		/*

	await loop(data,(evt)=>{

		if (elms2[evt.id])
			if (elms2[evt.id].renderTo)
				elms2[evt.id].renderTo.appendChild(elms2[evt.id]);
	});
	*/

}

export default data;
