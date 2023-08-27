import { Link } from "react-router-dom";

export default function MovieDetail() {
	return (
		<div>
			Movie Detay
			<Link to='/'>Home</Link>
			<Link to='/movie-detail'>Movie Detay</Link>
		</div>
	);
}
