//@flow

export default class View {

	constructor(ref?:HTML5Element):ViewSchema {

		let reference = ref||null;
		return Object.assign({
			type:'span',
			id:'',
			ref:reference,
			className:'',
			innerHTML:''
		},ref);

		/*
		return {
			type:'span',
			id:'',
			ref:reference,
			className:'',
			innerHTML:''
		}
		*/

	}

	click(){

	}

}
