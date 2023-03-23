<script>
	import { queenArianna } from './queenArianna';

	// Log the following values to the console

	// Example: Queen Arianna's name

	console.log(queenArianna.name);
	// 1. The ID of Queen Arianna (308)
	console.log(queenArianna._id);

	// 2. An image of Queen Arianna
	console.log(queenArianna.imageUrl);

	// 3. Queen Arianna's first film (Tangled)
	console.log(queenArianna.films[0]);

	// 4. Queen Arianna's last TV show (Tangled: The Series)
	console.log(queenArianna.tvShows[1]);

	// 5. Queen Arianna's second video game (Hidden Worlds)
	console.log(queenArianna.videoGames[1]);
</script>

<h1>Achievement: 1</h1>
<h2>Hers is some information about Queen Arianna</h2>

<figure>
	<h2>Queen Arianna</h2>
	<img src={queenArianna.imageUrl} alt="" />
	<figcaption>
		Her Id is {queenArianna._id}. Her first film was {queenArianna.films[0]} and {queenArianna
			.tvShows[1]} was her last tv show. And her last video game was {queenArianna.videoGames[1]}
	</figcaption>
</figure>

<h3>open console to also see these information</h3>

<style>
	figure {
		border: 5px solid black;
    width: max-content;
    padding: 0.5em 1em;
    margin: auto;
	}

	figcaption {
		width: 20ch;
	}
  h2 {
    text-align: center;
    color:darkgrey;
  }
</style>
