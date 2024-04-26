import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllUsers from "./pages/AllUsers";
import SingleUser from "./pages/SingleUser";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/users" element={<AllUsers />}></Route>
			<Route path="/user/:userId" element={<SingleUser />}></Route>
			<Route path="*" element={<NotFound />}></Route>
		</Routes>
	);
}

export default App;
