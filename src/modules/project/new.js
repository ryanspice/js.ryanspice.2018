
if (!window.room)
window.room={count:0};

import View from "../view";

import ServiceSession from "../../service.session";

let create = false;

window.con = null;

let canCreate = (evt)=>{

	console.log(evt);

	if (!create)
		return false;

	return true;
}

let newCount = {

};

export default class New extends View {

	static title='New';
	static type=' ';

	title='new';
	description='';

	update = (evt)=>{

		console.log('update')
		/*
		evt.value.children[0].children[0].innerText = this.title;
		evt.value.children[0].children[3].innerText = this.type;
		evt.value.children[0].children[4].innerText = this.description;
		*/
		console.log(evt.value.children[0].getElementsByClassName('form-group'))
		//		document.getElementById('scroll').innerHTML = `<span style="" id="plus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus menu"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>	</span>`;
	}

	constructor(ref?:HTML5Element){-
		super(ref);

		con = this.controller;
		return {
			link:this,
			ref:ref,
			type:`view`,
			id:'new-view',
			style:`background:#191919;max-width:421px;`,
			className:'slide button-e',
			activity:this.update,
			innerHTML:`
				<style>
					#new-view{z-index: 201; position: absolute; background: black; margin: 0px; padding: 48px; width: 100%; height: 100%; max-width: 450px;
						border-right: 1px solid rgba(255,255,255,0.25); opacity: 1 !important;}
					#new-view h2 {background:rgba(25,25,25,0.25);}
				</style>
				<column class="col-md-24">
					<h3 >${this.title}</h3>
					<p >${this.description}</p>
					<a style="text-indent:0.25rem;color:lightblue;font-size:1.2rem;cursor:pointer;" class="button-e" onclick="
									con.goTo('tertiary',false)">object types</a>
	        <form class="form-group ">
	            <div class="checkbox button-e "  >
	                <label >
	                    <input onclick="document.getElementById('atest1').style.opacity=1;" name="new_type" type="radio" ></input>
	                    <span style="color:white;">object</span>
	                </label>
	            </div>

	            <div class="checkbox button-e">
	                <label>
	                    <input onclick="document.getElementById('atest1').style.opacity=1;" name="new_type" type="radio" ></input>
	                    <span style="color:white;">sprite</span>
	                </label>
	            </div>

	            <div class="checkbox button-e">
	                <label>
	                    <input onclick="document.getElementById('atest1').style.opacity=1;" name="new_type" type="radio"></input>
	                    <span style="color:white;">script</span>
	                </label>
	            </div>

	            <div class="checkbox button-e" disabled>
	                <label>
	                    <input name="new_type" type="radio" disabled></input>
	                    <span style="color:grey;"><s>background</s></span>
	                </label>
	            </div>

	            <div class="checkbox button-e" disabled>
	                <label>
	                    <input name="new_type" type="checkbox" disabled></input>
	                    <span style="color:grey;"><s>room</s></span>
	                </label>
	            </div>

						<div class="btn-group" >
							<input hidden type="reset" id="atest2">
							<a class="btn btn-primary button-e" id="atest1" onclick="(${this.onclick});" style="height:36px;opacity:0.5;">Create</a>
							<br/>
							<a class="btn btn-default button-e" onclick="(${this.onclick});" style="height:36px;color:white; background:#920c00;">Cancel</a>
						</div>
					</form>
				</column>
			`,
			onclick:this.click
		}

	}

	click=(evt)=>{

		switch(evt.target.innerText){

			case 'Create':

				const form = document.getElementById('new-view').querySelectorAll('form')[0];

				if (!form)
					return false;

				let ref = form.querySelector('input[type="radio"]:checked');

				if (!ref)
					return false;

				ref = ref.nextElementSibling;

				if (!ref)
					return false;


				if (!newCount[ref.innerHTML])
					newCount[ref.innerHTML] = 0;

				const _data_ = {"action":"","type":ref.innerHTML,"title":ref.innerHTML+" "+newCount[ref.innerHTML]++};

				this.session.updateSessionData(true,_data_);
				this.controller.goTo(this.session.get('view_previous')||'engine');
				document.getElementById('atest2').click();
			break;
			case 'Cancel':

				this.controller.goTo(this.session.get('view_previous')||'engine');
			break;

		}

		evt.stopPropagation();

	}

}
