import { Link } from "react-router-dom";
import { StyleMovieDetail } from "./style";
import api from "@/api";
import { Skeleton } from "antd";

export default function MovieDetail() {
	const initialURL = new URL(window.location.href);
	const initialImdbID = initialURL.searchParams.get("imdbID");

	const { data, isLoading } = api.useGetMovieDetailQuery(initialImdbID);

	if (isLoading) {
		return (
			<StyleMovieDetail>
				<Skeleton paragraph={{ rows: 12 }} active />
			</StyleMovieDetail>
		);
	}

	return (
		<>
			<StyleMovieDetail>
				<Link to='/'>Go Back</Link>
				<div className='movie-image'>
					<img src={data?.Poster} alt='' />
				</div>
				<div className='details'>
					<div>
						<b>Title</b>
						<br />
						<span>{data?.Title}</span>
					</div>

					<div>
						<b>Plot</b>
						<br />
						<span>{data?.Plot}</span>
					</div>

					<div>
						<b>Languages</b>
						<br />
						<span>{data?.Language}</span>
					</div>

					<div>
						<b>Director</b>
						<br />
						<span>{data?.Director}</span>
					</div>

					<div>
						<b>Type</b>
						<br />
						<span>{data?.Type}</span>
					</div>

					<div>
						<b>Year</b>
						<br />
						<span>{data?.Year}</span>
					</div>

					<div>
						<b>Runtime</b>
						<br />
						<span>{data?.Runtime}</span>
					</div>

					<div>
						<b>Released</b>
						<br />
						<span>{data?.Released}</span>
					</div>
				</div>
			</StyleMovieDetail>
		</>
	);
}
