
import AsyncView from "../../entry";

export default class Add extends AsyncView {

	constructor(any){
		super(any);
		return {
			type:`span`,
			renderTo:'#scroll',
			id:'plus',
			style:``,
			innerHTML:`<i class="menu" data-feather="plus"></i>	`,
			onclick:(evt)=>{

				evt.stopPropagation();
				controller.goTo('new',true,e=>e.value.activity(e));
			}
		}

	}

}
