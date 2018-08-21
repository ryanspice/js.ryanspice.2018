let steve = [];

for(let i = 1; i>0; i--){

	let obj = 	{
		type:`span`,
		renderTo:'#scroll',
		style:`margin:10px;max-width:116px;height:96px;display:inline-block;`,
		innerHTML:`<i class="menu" data-feather="map" style="margin:0px;margin-top:10px;width:100%;text-align:center;"></i><br/><h6 style="width:100%;text-align:center;	">r o o m 0</h6>	`,
		onclick:(evt)=>{

			evt.stopPropagation();
			//controller.goTo('new')

		}
	};

	steve.push(obj);

}

export default steve;
