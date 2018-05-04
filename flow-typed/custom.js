//@flow

interface HTMLDocument extends Document {
	onreadystatechange?:Function;
}

interface DocumentEvent extends Event {
	document:HTMLDocument;
}


interface TemplateElement {

  type: string;
  value: string;
  renderTo?: string;
  class?: string;
  style?: string;

}

interface TemplateItem {

	id:string;
	value:TemplateElement;

}

interface TemplateScheme {

	id:string;
	value:TemplateItem;

}

interface HTML5Element extends HTMLElement {


	  class?: string;
	  style: CSSStyleDeclaration;
		value?:string;
		renderTo?:any;
}


type Element = HTML5Element|null;
