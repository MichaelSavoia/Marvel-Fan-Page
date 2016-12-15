// character api call
$.ajax({
	url: 'https://gateway.marvel.com:443/v1/public/characters?limit=25&apikey=bb4992bf8afca36328dedaf07c450fc5',
	success: function(result){
		console.log(result);
		var characters = result.data.results
		selectCharacter(characters);
	}
})

function selectCharacter(character){
	var featuredSelector = 10;
	var featuredCharacter = character[featuredSelector];

	var featuredSelector2 = 1;
	var featuredCharacter2 = character[featuredSelector2];

	var featuredSelector3 = 4;
	var featuredCharacter3 = character[featuredSelector3];

	console.log(featuredCharacter)

	$('.featuredCharacter').append(`
		<div class="featuredCharacter1 col-md-4">
		<img src="${featuredCharacter.thumbnail.path}.${featuredCharacter.thumbnail.extension}">
		<h4>${featuredCharacter.name}</h4>
		<span>${featuredCharacter.description}</span>
		</div>

		<div class="featuredCharacter2 col-md-4">
		<img src="${featuredCharacter2.thumbnail.path}.${featuredCharacter2.thumbnail.extension}">
		<h4>${featuredCharacter2.name}</h4>
		<span>${featuredCharacter2.description}</span>
		</div>

		<div class="featuredCharacter3 col-md-4">
		<img src="${featuredCharacter3.thumbnail.path}.${featuredCharacter3.thumbnail.extension}">
		<h4>${featuredCharacter3.name}</h4>
		<span>${featuredCharacter3.description}</span>
		</div>
	`)
}

// comic api call
$.ajax({
	url: 'https://gateway.marvel.com:443/v1/public/comics?limit=25&apikey=bb4992bf8afca36328dedaf07c450fc5',
	success: function(result){
		var comics = result.data.results
		selectComic(comics);
	}
})

function selectComic(comic){
	var featuredSelector = 4;
	var featuredComic = comic[featuredSelector];

	var featuredSelector2 = 12;
	var featuredComic2 = comic[featuredSelector2];

	var featuredSelector3 = 16;
	var featuredComic3 = comic[featuredSelector3];

	console.log(featuredComic)

	$('.featuredComic').append(`
		<div class="featuredComic1 col-md-4">
		<img src="${featuredComic.thumbnail.path}.${featuredComic.thumbnail.extension}">
		<h4>${featuredComic.title}</h4>
		<span>${featuredComic.description}</span>
		</div>

		<div class="featuredComic2 col-md-4">
		<img src="${featuredComic2.thumbnail.path}.${featuredComic2.thumbnail.extension}">
		<h4>${featuredComic2.title}</h4>
		<span>${featuredComic2.description}</span>
		</div>

		<div class="featuredComic3 col-md-4">
		<img src="${featuredComic3.thumbnail.path}.${featuredComic3.thumbnail.extension}">
		<h4>${featuredComic3.title}</h4>
		<span>${featuredComic3.description}</span>
		</div>
	`)
}
