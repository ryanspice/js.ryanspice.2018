//@flow

declare var controller;

import Icon from "../icon";

export default class Settings extends Icon {

	constructor(any:TemplateScheme){

		return super({
						type:`span`,
						id:`settings`,
						renderTo:'#toolbar-column',
						style:`background:rgba(25, 25, 25, 1);`,
						className:``,
						innerHTML:`<i class="menu" data-feather="settings"></i><h3 style="margin-left:8rem;display:inline;line-height:3.25rem;display:none;	">s e t t i n g s</h3>`,
						onclick:(evt)=>{
							if (evt)
							evt.stopPropagation();
							controller.goTo('settings')
						}
			});

	}

}
