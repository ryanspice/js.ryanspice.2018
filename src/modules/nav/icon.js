//@flow

import View from "../view";

export default class Icon extends View {

	constructor(any:any){
		super(any);
		return Object.assign({
			type:`span`,
			innerHTML:`<i class="menu" data-feather="${any.id || 'question'}"></i>`
		},any)

	}

}
