let steve = [];
let data = [];

let count = 0;

if (!window.room)
window.room={count:0};

try {

	count = (JSON.parse(sessionStorage.getItem('saved'))).length || 0;

}catch(e){

	count = 1;
}

try {

	data = (JSON.parse(sessionStorage.getItem('saved'))) || [];

}catch(e){

	data = [];
}

for(let i = count; i>=0; i--){

	let obj = {
		type:`span`,
		renderTo:'#scroll',
		className:'cl'+JSON.stringify(data[i]),
		style:`margin:10px;max-width:116px;height:96px;display:inline-block;`,
		innerHTML:`<i class="menu" data-feather="map" style="margin:0px;margin-top:10px;width:100%;text-align:center;"></i><br/><h6 style="width:100%;text-align:center;	">r o o m ${window.room.count++}</h6>	`,
		onclick:(evt)=>{

			console.log(evt.target.template);
			evt.stopPropagation();
			//controller.goTo('new')

		}
	};



	steve.push(obj);

}

export default steve;
