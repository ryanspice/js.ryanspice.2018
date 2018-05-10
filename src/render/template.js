//@flow

import {default as loop} from './loop';
import {default as data} from '../include/data';

type Element = HTML5Element|null;

const templatePicks = [
	'id',
	'value',
	'class',
	'className',
	'onclick',
	'click',
	'onresize',
	`innerHTML`
];


let elms = [];
let elements = [];
let elm:Element;
let templateDefer = [


];
/*
export async function asyncRenderPipe(evt:DocumentEvent){

	let context:Document = (evt.currentTarget:any);

	switch(context.readyState){

		case 'interactive':

		break;

		case 'complete':


		//	await iterateTemplate(context.render.template[0]);
			await iterateTemplate(render.template[0]);

		break;
	}

}
*/

/*
	AsyncRenderPipe
		create on onreadystatechange, or whenever you want to render.
		will render to evt.currentTarget
*/

export class AsyncRenderPipe {

	context:HTMLDocument = document;
	template:any = data;

	constructor(evt:DocumentEvent){

		this.init(evt);

	}

	async init(evt:any){

		this.context = await evt.currentTarget;

		await this.iterateTemplate(this.template[0])

	}

	check = async (evt:any)=>{

		if (elms[evt.id])
		if (elms[evt.id].renderTo){

			//if (typeof elms[evt.id].renderTo === "string"){


//			if (!typeof elms[evt.id].renderTo === "string")
	//			return;

			console.log(elms[evt.id].renderTo.appendChild,typeof elms[evt.id].renderTo)

			if (typeof elms[evt.id].renderTo === "string"){

				console.log('fuck',elms[evt.id], document.querySelectorAll(elms[evt.id].renderTo))
				//let el = document.querySelectorAll(elms[evt.id].renderTo);
				//el.appendChild(elms[evt.id]);
				elms[evt.id] = await this.createElementOfType(elms[evt.id]);


			}


			elms[evt.id].renderTo.appendChild(elms[evt.id]);
			elms[evt.id] = null;
		//}
			//templateDefer[evt.id] = null;

		}


	}
	/* generate a reference to the target element, or body if none */

	async createRenderTarget(template:TemplateElement){

		//Verify if rendering target exists
		if (template.renderTo!=undefined)
			if (this.context.querySelectorAll(template.renderTo)[0] == undefined){

			return '2430';
		}

		//Return querySelected element, fallback on body
		//		if (template.renderTo!=undefined)
		return this.context.querySelectorAll(template.renderTo)[0] || this.context.body;
	}

	/**/

	createTemplateItem = async (item:any) => {

		let template = item.value;
		let element = await this.createElementOfType(template);
		console.log(element);
		if (element!=false){

			elms[item.id] = (elements[item.id]) = element;

		} else {

			// if debugger warning true :: console.log('false')

		}

	}

	/* Create a DOM element in memory */

	async createElementOfType(template:TemplateElement){

		let elm:HTML5Element;

		const type:string = template.type;
		const renderTo = await this.createRenderTarget(template);

					elm = (await document.createElement(template.type):HTML5Element);
		switch(type){

			case "style":

				elm.innerHTML = template.value;
				elm.renderTo = await document.head;

			break;

			default:

				//if (template.onclick)
				elm.onclick = (evt)=>{evt.stopPropagation(); console.log(template);  template.onclick(); return false;};
				elm.style = template.style;
				elm.value = template.value;
				elm.renderTo = renderTo; //await createRenderTarget(template);

		}

		if (renderTo=='2430'){

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

	/* iterate template data and generate html */

	async iterateTemplate(tpl:any){

		if (trace){

			console.warn(`renderer::`+trace);

			return;
		}

		trace++;


		let layers = tpl;
		let length = layers.length;

		//let elements = tpl;
		let type, style, value;
		let elm;

		await loop(data,this.createTemplateItem);
		await loop(data,this.check);


		elms = templateDefer;

		console.log(elms);
		console.log(templateDefer);
		//console.log(elms = elms.filter(e=>e===null?false:true).length);

		//TODO: recursive
		await loop([templateDefer],this.createTemplateItem);
		await loop(data,this.check);



		elms = templateDefer;

		console.log(elms);
	//	console.log(elms.filter(e=>e===null?false:true).length);




		//		console.log(elms.filter(e=>e===null?false:true).length);
		/*

		await loop(data,(evt)=>{

			if (elms2[evt.id])
				if (elms2[evt.id].renderTo)
					elms2[evt.id].renderTo.appendChild(elms2[evt.id]);
		});
		*/

	}

}


//export {asyncRenderPipe};

/*const createTemplateItem = async(item)=>{

	let elm;
	let template = item.value;

	elm = document.createElement(template.type);
	elm.style = template.style;
	elm.value = template.value;

	elements[item.id] = elm;

}*/

let trace = 0;

export default data;
