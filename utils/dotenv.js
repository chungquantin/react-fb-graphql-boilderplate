module.exports = () => {
	if (process.env.NODE_ENV !== "production") {
		return require("dotenv").config();
	}
};
