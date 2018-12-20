//@flow

import {
	toggleExpand
} from "../../include/util";

import View from "../view";

import Hamburger from "./hamburger";

import Add from "./add";
import Scroll from "./scroll";

import * as buttons from "./buttons";

export default class ToolColumn extends View {

	static Controls:Array<any> = [
			new Hamburger(this),
			{
				type:`span`,
				renderTo:'#toolbar-column',
				style:`display:;background:rgba(25, 25, 25, 1);overflow:hidden;max-height:48px;`,
				innerHTML:`<i class="menu" data-feather="layers"></i>
					<h5 onclick="event.stopPropagation()" style="display:none;"><u>main.js</u></h5>
					<h5 style="displas y:none" onclick="event.stopPropagation()" ><u>ROOM</u></h5>
					<h5 style="displas y:none" onclick="event.stop
						Propagation()" >OBJECT</h5>
					<h5 style="displas y:none" onclick="event.stopPropagation()" >TILE</h5>
					<h5 style="displas y:none" onclick="event.stopPropagation()" >BACKGROUND</h5>
					`
			},
			new Scroll(),
			new Add({}),

			new buttons.default.play(),
			new buttons.default.settings()
	]

	constructor(ref?:HTML5Element){

		super(ref)

		return {
			type:`aside`,
			id:'toolbar-column',
			className:`noselect`,
			style:`font-size:2rem;z-index:1`,
			onclick:this.click,
			afterConstruct:this.afterConstruct
		}

	}

	click=(evt)=>{

		toggleExpand(evt);

	}

	afterConstruct=(evt)=>{


	}

}
