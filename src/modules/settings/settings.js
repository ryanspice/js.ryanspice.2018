//@flow

import View from "../view";

const Setting = (Setting, Text, Action) => `<section onclick="(${Action})()"><i data-feather="${Setting}" ></i><span><h3>${Text}</h3></span></section>`;

export default class Settings extends View {

	constructor(ref?:HTML5Element){

		super(ref)

		return {
			link:this,
			type:`view`,
			id:'settings-view',
			className:'slide',
			style:`background:transparent;margin-top:10%;margin-left:10%;margin:0px auto;`,
			innerHTML:`
				<center>
					<h2>Settings</h2>
					<input style="opacity:0;"></input>
				</center>
				<br/>
				<spread>
					${Setting('sliders', 'Defaults',function(){

					})}
					${Setting('info', 'About',function(){

						window.controller.goTo('info-settings');
					})}
				</spread>
			`,
			onclick:this.click
		}

	}

	click(evt){

		evt.stopPropagation();


	}

}

export class Info extends View {


	constructor(ref?:HTML5Element){

		super(ref)

		return {
			link:this,
			type:`view`,
			id:'info-settings-view',
			className:'slide',
			style:`background:transparent;margin-top:10%;margin-left:10%;margin:0px auto;width:75%;`,
			innerHTML:`
				<h2>About</h2>
				<h4>Webpack 4.0.3</h4>
				<p></p>
			`,
			onclick:this.click
		}

	}

	click(evt){

		window.controller.goTo('settings');
				evt.stopPropagation();


	}

}
