const express = require("express");
const route = express.Router();
const Joi = require("joi");

const genres = [{ name: "action", id: 1 }];

route.get("/", (req, res) => {
	res.send(genres);
});

route.get("/:id", (req, res) => {
	const { id } = req.params;
	const genre = genres.find((c) => c.id === parseInt(id));
	if (genre) {
		res.send(genre);
	} else {
		res.status(404).send("the genres you were looking for does not exist");
	}
});

route.post("/", (req, res) => {
	const schema = Joi.object({
		name: Joi.string().min(3).required(),
	});

	const result = schema.validate(req.body);
	if (result.error) {
		return res.status(400).send(result.error.details[0].message);
	}

	const genre = {
		id: genres.length + 1,
		name: req.body.name,
	};

	genres.push(genre);
	res.send(genres);
});

route.put("/:id", (req, res) => {
	const { id } = req.params;
	const schema = Joi.object({
		name: Joi.string().min(3).required(),
	});

	const result = schema.validate(req.body);
	if (result.error) {
		return res.status(400).send(result.error.details[0].message);
	}
	const genre = genres.find((c) => c.id === parseInt(id));
	if (genre) {
		genre.name = req.body.name;
		res.send(genres);
	} else {
		res.status(404).send("the genres you were looking for does not exist");
	}
});

route.delete("/:id", (req, res) => {
	const { id } = req.params;
	const genre = genres.find((c) => c.id === parseInt(id));

	if (!genre) {
		res.status(404).send("the genres you were looking for does not exist");
	}
	const index = genres.indexOf(genre);
	genres.splice(index, 1);
	res.send(genres);
});

module.exports = route;
