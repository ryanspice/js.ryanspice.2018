
import View from "../view";

export default class New extends View {

	static title='New';
	static type=' ';

	static get title(){

		return this._title||'';
	}

	static set title(val){

		//evt.value.children[1].children[0].innerText = this._title = val;
	}

	type = '';

	/*
	static update(e){

		//e.value.children[1].children[0].innerHtml = 'eh';
		//e.value.children[1].children[0].innerHTML = 'eh';
		e.value.children[1].children[0].innerText = 'eh';

		return true;

	}
*/
	update = (evt)=>{

		evt.value.children[0].children[0].innerText = this.title;


	}

	constructor(ref?:HTML5Element){

		super(ref);

		return {
			link:this,
			type:`view`,
			id:'new-view',
			className:'slide',
			activity:this.update,
			innerHTML:`
				<column class="col-md-12">
					<h2 >${this.title}</h2>
					<br/>
					<h3><input placeholder="project0"></input></h3>
					<p></p>

			        <div class="form-group hidden">
			            <p class="form-group-label">Core Properties</p>
			            <div class="checkbox">
			                <label>
			                    <input type="checkbox" checked disabled></input>
			                    <span>ES6</span>
			                </label>
			            </div>

			            <div class="checkbox">
			                <label>
			                    <input type="checkbox" checked disabled></input>
			                    <span>FlowType</span>
			                </label>
			            </div>

			            <div class="checkbox">
			                <label>
			                    <input type="checkbox" disabled="true"></input>
			                    <span>Disabled</span>
			                </label>
			            </div>

						<div class="btn-group" >
							<a class="btn btn-primary" disabled>Create</a>
							<a class="btn btn-default">Cancel</a>
						</div>
			        </div>
				</column>
			`,
			onclick:this.click
		}

	}

	click(evt){

		window.controller.goTo('settings');
				evt.stopPropagation();


	}

}
