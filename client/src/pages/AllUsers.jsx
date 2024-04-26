import { useEffect, useState } from "react";
import { bePath } from "../helper";
import { Link } from "react-router-dom";

const AllUsers = () => {
	const [users, setUsers] = useState(null);

	useEffect(() => {
		fetch(`${bePath}/api/users`)
			.then((response) => response.json())
			.then((result) => {
				setUsers(result.data);
			});
		return () => {
			setUsers(null);
		};
	}, []);

	if (!users) return <h1>Fetching</h1>;

	return (
		<ul>
			{users.map((user) => {
				return (
					<li key={user.id}>
						<h2>
							<Link to={`/user/${user.id}`}>{user.sName}</Link>
						</h2>
					</li>
				);
			})}
		</ul>
	);
};

export default AllUsers;
