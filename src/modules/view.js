//@flow

import {
	ViewSchema,
	HTML5Element
} from "../render/interfaces";

export default class View {

	constructor(ref?:HTML5Element):ViewSchema {

		let reference = ref||null;

		return {
			type:'span',
			id:'',
			ref:reference,
			className:'',
			innerHTML:''
		}

	}

	click(){


	}

}
