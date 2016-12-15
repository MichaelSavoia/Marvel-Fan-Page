$(document).ready(function()
{	



	// Character array to hold all characters returned from API
	var characters = [];

	// Function constructor for Character
	function Character(){};

	// Call API to get characters
	$.ajax({
		url: `https://gateway.marvel.com:443/v1/public/characters?apikey=99259ddb87ee02a03bf6f38353eb1936`,
		success: function(resp)
		{ 
			loadCharacters(resp); 
		},
	})



	// --------------------------------------------------
	// Load character data from API into Object & array
	// --------------------------------------------------
	function loadCharacters(data)
	{
		// Load data path
		var characterList = data.data.results;
		console.log(characterList)

		// Loop through characters
		characterList.forEach(function(characterList)
		{
			// Create new character object
			var character = new Character();

			// Concatenate image attributes
			let characterImage = characterList.thumbnail.path + '.' + characterList.thumbnail.extension;

			// Load data into object
			character.id = characterList.id;
			character.name = characterList.name;
			character.description = characterList.description;
			character.image = characterImage;

			// Load object into array
			characters.push(character);

		});

		// Display featured characters
		displayCharacters();
	}



	// --------------------------------------------------
	// Display characters
	// --------------------------------------------------
	function displayCharacters()
	{
		var characterList = $('.allCharacters');
		var characterClass = "";

		// Loop through characters array
		for(let i = 0; i < characters.length; i++)
		{	
			// Set i index as target character
			var character = characters[i];

			// Build characters HTML
			characterClass += 
			`
				<div class="featuredCharacter col-xs-12 col-sm-6 col-md-4">
					<img src="${character.image}" alt="${character.name}">
					<h4>${character.name}</h4>
					<span>${character.description}</span>
				</div>
			`;
		}

		// Append characters to HTML
		characterList.append(characterClass);
	}
	

});