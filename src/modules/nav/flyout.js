//@flow

import View from "../view";

class FlyoutController {

	static active:Array<Flyout> = [];
	static inactive:Array<Flyout> = [];

	static emit(data:Flyout){

		FlyoutController.active.unshift(data);

		return FlyoutController.active[0];
	}

	static destroy(){

		const flyout:Flyout = FlyoutController.active[0];

		document.getElementsByTagName('flyout')[0].children[0].className = 'puff-in-center-reverse';
		setTimeout(()=>{
			document.getElementsByTagName('flyout')[0].remove();
			},225)

		FlyoutController.inactive.unshift(FlyoutController.active[0]);

		FlyoutController.active.shift();

		return true;
	}

}

window.FlyoutController = FlyoutController;

export default class Flyout extends View {

	title:string;
	type:string;
	description:string;

	previous:Array<string> = null;

	buttons:any = {
		ok:'ok',
		cancel:'cancel'
	}

	constructor(ref?:HTML5Element){

		super(ref);

		return FlyoutController.emit({
			renderTo:`body`,
			type:`flyout`,
			className:'',
			id:'23123',
			style:`z-index:5;width:100%;height:100%;position:absolute;top:0px;left:0px;background:rgba(25,25,25,0.45);`,
			innerHTML:`
				<aside class="puff-in-center" style="margin:0px auto;margin-top:25vh;width:74vw;max-width:480px;height:auto;border:1px black;background:#333333;padding-top:1vh;padding-bottom:1vh;padding-left:1vw;padding-right:1vw;">
					<h6 style="padding-top:0px;margin-top:0px;">${ref.title}, ${ref.description}</h6>
					<div class="btn-group" style="margin-top:0px;margin-bottom:0px;" >
					<a id="accept" class="btn btn-primary" onclick="${this.embed(this.action)}">${ref.buttons.ok}</a>
						<a id="cancel" class="btn btn-default" onclick="FlyoutController.destroy();" style="color:white; background:#920c00;">${ref.buttons.cancel}</a>
					</div>
				</aside>
			`,

			//onclick:this.click
		})

	}

	embed = (entire)=>{
		entire = entire.toString();
		entire = entire.slice(entire.indexOf("{") + 1, entire.lastIndexOf("}"));

		return entire=`setTimeout(function(){${entire}},250);
				document.getElementsByTagName('flyout')[0].children[0].className = 'puff-in-center-reverse';
		`
	}

	click = (evt)=>{
		this.action();
		FlyoutController.destroy();

		evt.stopPropagation();

	}

}
