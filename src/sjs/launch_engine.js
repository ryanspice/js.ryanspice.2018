//@flow

declare var SpiceJS:SpiceJS;

const engine:Function = async function(pipe:AsyncPipes|null, store:ServiceSession){

	//LAUNCH EVALULATE SPICEJS GAME FRAMEWORK
	try{

		//TODO: WIP SpiceJS import
		await import("./sjs/vendor");
		await import("./sjs/0.spice");
		await import('./sjs/spice_cookiesdisabled')
		await eval(`(${store.root.launchScript})`)(await SpiceJS, await store);
		//app = await eval(`(${STORE.root.launchScript})`)(await SpiceJS, await STORE);

	} catch(e) {

		if (pipe)
			await pipe.requireMSG('() :');

		throw(e);
	}

}
export default engine;
