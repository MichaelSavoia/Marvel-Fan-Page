$(document).ready(function()
{	

	var comics = [];

	function Comic(){};

	$.ajax({
		url: `https://gateway.marvel.com:443/v1/public/comics?limit=25&apikey=bb4992bf8afca36328dedaf07c450fc5`,
		success: function(resp)
		{ 
			loadComics(resp); 
		},
	})

	function loadComics(data)
	{

		var comicList = data.data.results;
		console.log(comicList)

		comicList.forEach(function(comicList)
		{
			var comic = new Comic();

			let comicImage = comicList.thumbnail.path + '.' + comicList.thumbnail.extension;

			comic.id = comicList.id;
			comic.name = comicList.title;
			comic.description = comicList.description;
			comic.image = comicImage;

			comics.push(comic);

		});

		displaycomics();
	}

	function displaycomics()
	{
		var comicList = $('.allComics');
		var comicClass = "";

		for(let i = 0; i < comics.length; i++)
		{	
			var comic = comics[i];

			comicClass += 
			`
				<div class="featuredComic col-xs-12 col-sm-6 col-md-4">
					<img src="${comic.image}" alt="${comic.name}">
					<h4>${comic.name}</h4>
					<span>${comic.description}</span>
				</div>
			`;
		}

		comicList.append(comicClass);
	}
	

});