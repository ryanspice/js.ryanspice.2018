
import View from "../view";

export default class Icon extends View {

	constructor(any){
		super(any);
		return Object.assign({
			type:`span`,
			innerHTML:`<i class="menu" data-feather="${any.id || 'question'}"></i>`,
			onclick:(evt)=>{

				evt.stopPropagation();
				controller.goTo('new',true,e=>e.value.activity(e));
			}
		},any)

	}

}
