//@flow

import View from "../view";

export default class Hamburger extends View {

	constructor(ref?:HTML5Element){

		super(ref)

		return {
			type:`span`,
			id:`hamburger`,
			renderTo:'#secondary-column',
			className:`steve`,
			style:`text-align:center;line-height:64px;color:white;`,
			value:`32`,
			innerHTML:`
				<span><i class="" data-feather="menu"></i></span>
				<span style="opacity:0.25" onclicks="controller.goTo('save',true)"><i class="" data-feather="save"></i></span>
				<span onclick="controller.goTo('load',true)"><i class="" data-feather="upload"></i></span>
				<span onclick="controller.goTo('tertiary',false)"><i class="" data-feather="help-circle"></i></span>
				`,
			onclick:(evt)=>{

				//console.log(evt.currentTarget);

			}
		}

	}

	click(evt){

		window.controller.goTo('settings');
		evt.stopPropagation();

	}

}
