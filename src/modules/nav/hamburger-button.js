
export default class HamburgerButton {

	constructor(){

		return	{
			type:`span`,
			id:`hamburger`,
			renderTo:'#secondary-column',
			className:`nav-file`,
			style:`text-align:center;line-height:64px;color:white;`,
			value:`32`,
			innerHTML:`
				<span><i class="" data-feather="menu"></i></span>
				<span onclick="controller.goTo('save',true)"><i class="" data-feather="save"></i></span>
				<span onclick="controller.goTo('load',true)"><i class="" data-feather="upload"></i></span>
				<span onclick="controller.goTo('tertiary',false)"><i class="" data-feather="help-circle"></i>
				</span>
			`,
			onclick:(evt)=>{


			evt.currentTarget.parentElement.classList.toggle('wan');

			}
		}

	}

}
