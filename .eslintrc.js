module.exports = {
	"env": {
		"node": true,
		"es6": true,
		"browser": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaVersion": 2017
	},
	"rules": {
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		],
		"no-unused-vars": "warn"
	}
};