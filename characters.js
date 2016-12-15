$(document).ready(function()
{	

	var characters = [];

	function Character(){};

	$.ajax({
		url: `https://gateway.marvel.com:443/v1/public/characters?apikey=99259ddb87ee02a03bf6f38353eb1936`,
		success: function(resp)
		{ 
			loadCharacters(resp); 
		},
	})

	function loadCharacters(data)
	{
		var characterList = data.data.results;
		console.log(characterList)

		characterList.forEach(function(characterList)
		{
			var character = new Character();

			let characterImage = characterList.thumbnail.path + '.' + characterList.thumbnail.extension;

			character.id = characterList.id;
			character.name = characterList.name;
			character.description = characterList.description;
			character.image = characterImage;

			characters.push(character);

		});

		displayCharacters();
	}


	function displayCharacters()
	{
		var characterList = $('.allCharacters');
		var characterClass = "";

		for(let i = 0; i < characters.length; i++)
		{	
			var character = characters[i];

			characterClass += 
			`
				<div class="featuredCharacter col-xs-12 col-sm-6 col-md-4">
					<img src="${character.image}" alt="${character.name}">
					<h4>${character.name}</h4>
					<span>${character.description}</span>
				</div>
			`;
		}

		characterList.append(characterClass);
	}
	

});