//@flow

import View from "../view";

export default class Icon extends View {

	constructor(any:any){

		super(any);

		return Object.assign({
			type:`span`,
			innerHTML:`<i class="menu" data-feather="${any.id || 'question'}"></i>`,

			append:async (path) => {

				if (!this.test){

					let m = (await import(path)).default;
					this.test = new m(this);
					template.defer = await [];
					template.template[0] = await [this.test];
					await template.a();
					await template.iterateTemplate();

					return true;

				} else {

					return false;
				}

			}
		},any)

	}

}
