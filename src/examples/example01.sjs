//@flow

interface SJSApp {

	root:{},
	settings:{},
	state:{},
	open:{},

}


let state = {init:()=>{}, draw:()=>{}, update:()=>{}};

let example01:SJSApp = {

	root:{

		launchScript:(self)=>{

			self.main = state;

			self.options.flags.seamless = true;
			self.options.override.SelectStart = true;
			self.options.override.ContextMenu = true;

			self.Start(320, 180);

			window.Application = this;

		},

		state:0,

		sprites:[],
		objects:[],
		backgrounds:[],
		
		rooms:[],

		scripts:[],
		libs:[]

	},

	settings:{},
	state:{},
	open:{}
}
