$(document).ready(function()
{	



	// comic array to hold all comics returned from API
	var comics = [];

	// Function constructor for comic
	function Comic(){};

	// Call API to get comics
	$.ajax({
		url: `https://gateway.marvel.com:443/v1/public/comics?limit=25&apikey=bb4992bf8afca36328dedaf07c450fc5`,
		success: function(resp)
		{ 
			loadComics(resp); 
		},
	})



	// --------------------------------------------------
	// Load comic data from API into Object & array
	// --------------------------------------------------
	function loadComics(data)
	{
		// Load data path
		var comicList = data.data.results;
		console.log(comicList)

		// Loop through comics
		comicList.forEach(function(comicList)
		{
			// Create new comic object
			var comic = new Comic();

			// Concatenate image attributes
			let comicImage = comicList.thumbnail.path + '.' + comicList.thumbnail.extension;

			// Load data into object
			comic.id = comicList.id;
			comic.name = comicList.title;
			comic.description = comicList.description;
			comic.image = comicImage;

			// Load object into array
			comics.push(comic);

		});

		// Display featured comics
		displaycomics();
	}



	// --------------------------------------------------
	// Display comics
	// --------------------------------------------------
	function displaycomics()
	{
		var comicList = $('.allComics');
		var comicClass = "";

		// Loop through comics array
		for(let i = 0; i < comics.length; i++)
		{	
			// Set i index as target comic
			var comic = comics[i];

			// Build comics HTML
			comicClass += 
			`
				<div class="featuredComic col-xs-12 col-sm-6 col-md-4">
					<img src="${comic.image}" alt="${comic.name}">
					<h4>${comic.name}</h4>
					<span>${comic.description}</span>
				</div>
			`;
		}

		// Append comics to HTML
		comicList.append(comicClass);
	}
	

});