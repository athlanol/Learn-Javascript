const log = (req, res, next) => {
	console.log("NGOOPIIII");
	next();
};

module.exports = log;
