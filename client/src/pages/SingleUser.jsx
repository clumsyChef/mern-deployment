import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bePath } from "../helper";

const SingleUser = () => {
	const { userId } = useParams();
	const [user, setUser] = useState(null);
	const [noUser, setNoUser] = useState(null);

	useEffect(() => {
		fetch(`${bePath}/api/user/${userId}`)
			.then(async (response) => {
				if (response.ok) {
					return response.json();
				} else {
					return response.json().then((errorData) => {
						throw new Error(errorData.error || "Something went wrong");
					});
				}
			})
			.then((result) => {
				if (result.status) {
					setUser(result.data);
				}
			})
			.catch((err) => {
				setUser({});
				setNoUser(err.message);
			});
		return () => {
			setUser(null);
		};
	}, []);

	if (!user) return <h1>Fetching...</h1>;

	if (noUser) return <h1>{noUser}</h1>;

	return (
		<div className="single-user">
			<p>
				Super Name: <b>{user.sName}</b>
			</p>
			<p>
				First Name: <b>{user.fName}</b>
			</p>
			<p>
				Last Name: <b>{user.lName}</b>
			</p>
		</div>
	);
};

export default SingleUser;
