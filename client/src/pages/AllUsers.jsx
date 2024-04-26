import { useEffect, useState } from "react";
import { bePath } from "../helper";

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
							<a href={`/user/${user.id}`}>{user.sName}</a>
						</h2>
					</li>
				);
			})}
		</ul>
	);
};

export default AllUsers;
