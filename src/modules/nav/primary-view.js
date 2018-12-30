
import AsyncView from "../../entry";

export default class PrimaryView extends AsyncView {


	constructor(ref?:HTML5Element){

		super(ref)

		return {
			link:this,
			type:`view`,
			id:'primary-view',
			className:'slide',

			style:``,
			onclick:()=>{

				controller.clearColumn();

				let data = Array.from(document.querySelectorAll('.highlight'));
				loop([data],elm=>{
						elm.value.className = "";
				});

				let data2 = Array.from(document.querySelectorAll('view'));
				loop([data2],elm=>{
						if (elm.value.className!=="slide" && elm.value.id!=='primary-view')
							elm.value.className = "slide";
				});
				//controller.each(e=>e.value.classList.add('hidden'));
			},
			value:``
		}

	}

	click(evt){

		this.controller.goTo('settings');
				evt.stopPropagation();


	}

}
