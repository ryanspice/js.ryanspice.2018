/* @flow */

import View from "../view";

export default class Documentation extends View {

	constructor(ref){

		super(ref)

		return {
			link:this,
			type:`view`,
			id:'tertiary-view',
			className:'slide',
			style:``,
			innerHTML:`
				<column class="col-md-12">
					<h2>documentation</h2>
				</column>`
		}

	}

}
