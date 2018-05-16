//@flow

import View from "../view";

export default class Settings extends View {

	constructor(ref?:HTML5Element){

		super(ref)

		return {
			link:this,
			type:`view`,
			id:'settings-view',
			className:'slide',
			style:`background:transparent;margin-top:10%;margin-left:10%;margin:0px auto;`,
			innerHTML:`<><div style="width:100%;max-width:1028px;border:1px solid grey;text-align:center;">

			<div class = "menu spread" style="transform:scale(5);transform-origin:center;">
				<i data-feather="sliders" ></i>
			</div>

			<div class = "menu spread" style="transform:scale(5);transform-origin:center;">
				<i data-feather="activity" ></i>
			</div>

			<div class = "menu spread" style="transform:scale(5);transform-origin:center;">
				<i data-feather="archive" ></i>
			</div>

			<div class = "menu spread" style="transform:scale(5);transform-origin:center;">
				<i data-feather="bookmark" ></i>
			</div>

			</div>
						</>`,
			onclick:this.click
		}

	}

	click(){


	}

}
