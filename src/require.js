//@flow

let Async2018;

let renderer;
let template;

let icons;
let message:Element;

const controller = new (require("./include/controller").default)();

window.template = null;

/**/

const requireMSG = async function(msg:string){
	!message?message = document.getElementsByClassName('load-text')[0]:null;
	message.innerText = await msg;
};

/**/

const requireCSS = async function(evt:Event){
	return [
		await requireMSG('css'),
		await import(`./assets/css/global.scss`),
		await import(`./assets/css/dark.scss`),
		await requireMSG('icons'),
		window.icons = icons = await import('feather-icons'),
	];
}

/**/

const requireListeners = async function(evt:Event){
	return await [
		document.onkeydown = function(evt:KeyboardEvent) {

	    evt = evt || window.event;
	    var isEscape = false;
	    if ("key" in evt) {
	        isEscape = (evt.key == "Escape" || evt.key == "Esc");
	    } else {
	        isEscape = (evt.keyCode == 27);
	    }
	    if (isEscape) {
	       controller.goTo('engine');
				 if (document.getElementsByClassName('expand')[0])
				 if (document.getElementsByClassName('expand')[0].classList)
				 document.getElementsByClassName('expand')[0].classList.remove('expand');
	    }

		}
	]
}

/**/

const requireHTML = async (evt:Event,data:any) => {
	return await [
		renderer = (await import('./entry')).AsyncTemplate,
		renderer.pre = ()=>{},
		renderer.post = ()=>{

		},
		window.template = renderer = await new renderer(),
		(window.layout = new (await import("./layout")).default),
		renderer.template = await [window.layout.views],
		await renderer.iterateTemplate()
	];
}

/**/

const requireIcons = async (res) => {

	await icons.replace();

	return await icons;
}

/**/

export {controller};
export default {
	requireMSG,
	requireCSS,
	requireHTML,
	requireIcons,
	requireListeners
};
