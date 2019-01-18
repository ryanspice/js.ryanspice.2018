//@flow

import {
	toggleExpand
} from "../../include/util";

import View from "../view";

import Hamburger from "./hamburger";
import Layers from "./layers";
import Scroll from "./scroll";

import * as buttons from "./buttons";

export default class ToolColumn extends View {

	static Controls:Array<any> = [

			new Hamburger(this),
			new Layers(),
			new Scroll(),

			new buttons.default.add(),
			new buttons.default.play(),
			new buttons.default.settings(),

			new buttons.default.save(),
			new buttons.default.load(),
			new buttons.default.help(),
			new buttons.default.clear_session()
	]

	constructor(ref?:HTML5Element){

		return super({
			type:`aside`,
			id:'toolbar-column',
			className:`noselect`,
			style:`font-size:2rem;z-index:1`,
			onclick:(evt)=>{this.click(evt)}
		})

	}

	mounted=(evt)=>{
		console.log(evt)
	}

	click=(evt)=>{

		toggleExpand(evt);

	}

}
