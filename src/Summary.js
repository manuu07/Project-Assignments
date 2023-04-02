import { useParams, useNavigate } from 'react-router-dom';

const Summary = ({ showData }) => {
	const navigate = useNavigate();

	function handleClick(showId) {
        navigate(`/form/${showId}`)
    }

	const { id } = useParams();
	console.log(id);
	let data = showData.find(show => show.show.id == id)
	console.log(data?.show.genres);

	let text = data?.show.summary.replace(/<p>|<b>|<\/p>|<\/b>/g, "");

	return (
		<>
			<header>
				<h1>{data?.show.name}</h1>
			</header>
			<main>
				<section>
					<h2>Summary</h2>
					<p>{text}</p>
				</section>
				<section>
					<h2>Genres</h2>
					<p>{data?.show.genres.join(", ")}</p>
				</section>
				<section>
					<h2>Premiered</h2>
					<p>{data?.show.premiered}</p>
				</section>
				<section>
					<h2>Type</h2>

					<p>{data?.show.type}</p>

				</section>
				<section>
					<h4><a href={data?.show.url}>Click for more..</a></h4>
				</section>

				<section>
					<button onClick={() => handleClick(id)}>Book Ticket !!</button>
				</section>
			</main>
		</>
	)
}

export default Summary;