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
						onclick:async (evt)=>{

								evt.stopPropagation();
								evt.preventDefault();

								if (!this.test){

									let Settings = (await import("../../settings/settings")).default;

									this.test = new Settings(this);
									template.defer = await [];
									template.template[0] = await [this.test];
									await template.a();
									await template.iterateTemplate();

									await this.controller.goTo('settings');

							} else {

								await this.controller.goTo('settings');

							}

						return false;

					 }
			});

	}

}
