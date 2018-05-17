//@flow

import View from "../view";

const Setting = (Setting, Text) => `<section><i data-feather="${Setting}" ></i><br/><p>${Text}</p></section>`;

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
					<spread>
						${Setting('sliders', 'Map')}
						${Setting('activity', 'History')}
						${Setting('archive', 'Saved')}
					</spread>
			`,
			onclick:this.click
		}

	}

	click(){


	}

}
