
import Icon from "../icon";

export default class Add extends Icon {

	constructor(any){

		return super({
			renderTo:'#toolbar-column',
			style:`background:rgba(25, 25, 25, 1);`,
			innerHTML:`<i class="menu" data-feather="play"></i><h3 style="margin-left:8.5rem;display:inline;line-height:3.25rem;	display:none;">p r e v i e w</h3>`,
			onclick:(evt)=>{
				if (evt)
				evt.stopPropagation();
				controller.goTo('engine')
				//toggleExpand(evt);

			}

		})

	}

}
