import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const app = express();

app.use(express.static(path.join(__dirname, "..", "client", "dist")));

app.use(cors());

const PORT = 8000;

const dummyData = [
	{
		id: 1,
		fName: "Tony",
		lName: "Stark",
		sName: "Ironman",
	},
	{
		id: 2,
		fName: "Steve",
		lName: "Rogers",
		sName: "Captain America",
	},
	{
		id: 3,
		fName: "Bruce",
		lName: "Banner",
		sName: "Hulk",
	},
	{
		id: 4,
		fName: "Thor",
		lName: "Odinson",
		sName: "Thor, The God Of Thunder",
	},
];

app.get("/api", (req, res) => {
	return res.status(200).json({ status: true, page: "home page" });
});

app.get("/api/users", (req, res) => {
	return res.status(200).json({ status: true, data: dummyData });
});

app.get("/api/user/:id", (req, res) => {
	const data = dummyData.find((user) => String(user.id) === String(req.params.id));
	if (!data) {
		return res.status(404).json({ status: false, error: "Yahan kuchh na hai" });
	}

	return res.status(200).json({ status: true, data });
});

app.use("*", (req, res) => {
	// return res.status(404).json({ status: false, error: "What are you trying to do?" });
	return res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

app.listen(PORT, () => {
	console.log(`Server is running on the port ${PORT}`);
});
