const express = require("express");
const genresRouter = require("./routes/genres");
const Joi = require("joi");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
	res.redirect("/api/courses");
});
app.use("/api/courses", genresRouter);
app.listen(port, () => {
	console.log(`Server running on ${port}`);
});
