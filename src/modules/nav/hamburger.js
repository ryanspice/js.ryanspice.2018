//@flow

import View from "../view";
import Icon from "./icon";

export default class Hamburger extends View {

	constructor(){

		return super({
			type:`span`,
			id:`hamburger`,
			renderTo:'#toolbar-column',
			className:`steve`,
			style:`text-align:center;line-height:64px;color:white;`,
			value:`32`,
			innerHTML:`
				<span><i class="" data-feather="menu"></i></span>
				<span style="opacity:0.25" onclicks="controller.goTo('save',true)"><i class="" data-feather="save"></i></span>
				<span onclick="controller.goTo('load',true, (e)=>{console.log(e.value);window.controller.views[9].link.updateList()})"><i class="" data-feather="upload"></i></span>
				<span style="float:right;" onclick="sessionStorage.clear();window.location = window.location;"><i class="" data-feather="cloud-off"></i></span>
				<span style="opacity:0.25" onclicks="controller.goTo('tertiary',false)"><i class="" data-feather="help-circle"></i></span>
				`,
			beforeMount:()=>{
				
			},
			onclick:(evt)=>{

				//console.log(evt.currentTarget);

			}
		});

	}

	click(evt){

		window.controller.goTo('settings');
		evt.stopPropagation();

	}

}
