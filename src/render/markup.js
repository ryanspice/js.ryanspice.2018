const beer = {
    name: 'Belgian Wit',
    brewery: `Steam Whistle Brewery`,
    keywords: ['pale', 'cloudy', 'spiced', 'crisp']
};


const markup = ()=> {

	return `
	<div class="beer">
	    <h2>${beer.name}</h2>
	    <p class="brewery">${beer.brewery}</p>
	    ${renderKeywords(beer.keywords).join('')}
	</div>
	`;

};

export default markup;
