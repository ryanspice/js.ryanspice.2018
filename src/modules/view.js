//@flow

import {
	ViewSchema,
	HTML5Element
} from "../../node_modules/async.2018/src/core/def/interfaces";

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
