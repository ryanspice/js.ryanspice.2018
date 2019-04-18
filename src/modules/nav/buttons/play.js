//@flow

import Icon from "../icon";

export default class Add extends Icon {

	constructor(any:TemplateScheme){

		return super({
			renderTo:'#toolbar-column',
			style:`background:rgba(25, 25, 25, 1);`,
			innerHTML:`
				<i class="menu" data-feather="play"></i>
				<i style="float:right;opacity:0.25" class="menu" data-feather="play-circle"></i>
				<i style="opacity:0.25" class="menu" data-feather="skip-back"></i>
				<i style="opacity:0.25" class="menu" data-feather="rewind"></i>
				<i style="opacity:0.25" class="menu" data-feather="pause"></i>
				<!---
				<i style="opacity:0.25" class="menu" data-feather="fast-forward"></i>
				<i style="opacity:0.25" class="menu" data-feather="skip-forward"></i>-->
				<h3 style="margin-left:8.5rem;display:inline;line-height:3.25rem;	display:none;">p r e v i e w</h3>`,
			onclick:(evt)=>{

				if (evt){
					evt.stopPropagation();
					this.log.debug(`Add.onclick(${evt})`);
				} else {
					this.log.debug(`Add.onclick()`);
			}

				this.controller.goTo('engine')

			}

		})

	}

}
