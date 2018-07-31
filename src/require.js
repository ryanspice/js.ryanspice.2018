//@flow

//import Async2018 from "../node_modules/async.2018/src/index";


let Async2018;
interface AsyncRenderer {};

let renderer;//:AsyncRenderPipe;
let template:AsyncRenderer;

let icons;
let message:Element;

const requireMSG = async msg => {

	!message?message = document.getElementsByClassName('load-text')[0]:null;
	message.innerText = await msg;
};

const requireCSS = async evt => {
	return [
		await requireMSG('css'),
		await import(`./assets/css/global.scss`),
		await import(`./assets/css/dark.scss`),
		await requireMSG('icons'),
		icons = await import('feather-icons'),
	];
}


const requireHTML = async (evt,data) => {

	//renderer.prototype.template = data;
	return await [

		//TODO:
		await requireMSG('template'),
		renderer = (await import("../node_modules/async.2018/src/index")).default.core.template.AsyncRenderPipe,
		await (renderer.prototype.template = (await import("./include/data")).default),

		await requireMSG('rendering'),
		template = await new renderer(evt)
	];
}

const requireIcons = async res => {

	await icons.replace();

	return await icons;
}


export default {
	requireMSG,
	requireCSS,
	requireHTML,
	requireIcons
};
