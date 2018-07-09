
import View from "../view";
import {default as loop} from '../../../node_modules/async.2018/src/core/def/loop';

import {

	toggleExpand

} from "../../include/util";

export default class SecondaryColumn extends View {

	_key;

	set key(val) {

		this._key = val;
		console.log(val,this);

	}

	get key() {

		return this._key;
	}

	/**/

	constructor(ref?:HTML5Element){

		super(ref)

		this.key = "";

		document.onkeydown = (evt) => {

				let popout = Array.from(document.getElementsByClassName('escape'));
		    evt = evt || window.event;

		    let isEscape = false;
		    if ("key" in evt) {
		        isEscape = (evt.key == "Escape" || evt.key == "Esc");
		    } else {
		        isEscape = (evt.keyCode == 27);
		    }
		    if (isEscape) {
		        //alert("Escape");

		    }

				loop([Array.from(popout)],elm=>elm.value.className="slide short");

				this.key = (evt.key||evt.keyCode);
				//console.log(this.key)
		};




		return {
			type:`aside`,
			id:'secondary-column',
			className:`noselect`,
			style:`font-size:2rem;z-index:200;`,
			onclick:(evt)=>{ this.click(evt); toggleExpand(evt); }
		}

	}

	/**/

	click = (evt)=>{

		let popout = (document.getElementsByClassName('slide short'));
		console.log()
		loop([Array.from(popout)],elm=>elm.value.className="slide short escape");

	}

}
12312312
