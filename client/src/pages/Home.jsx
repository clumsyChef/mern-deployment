import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<h2>
				<Link to="/users">All Users</Link>
			</h2>
		</div>
	);
};

export default Home;
