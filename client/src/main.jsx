import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AllUsers from "./pages/AllUsers.jsx";
import SingleUser from "./pages/SingleUser.jsx";
import React from "react";
import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},

	{
		path: "/users",
		element: <AllUsers />,
	},
	{
		path: "/user/:userId",
		element: <SingleUser />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	// <BrowserRouter>
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
	// </BrowserRouter>
);
