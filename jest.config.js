module.exports = {
	"roots": [
		"<rootDir>/",
		"<rootDir>/src"
	],
	"testRegex": "(/__tests__/.*|(\\.|/)(jest))\\.jsx?$",
	"transformIgnorePatterns": [
		"/node_modules(?!/(lci-.*|reusable-webpack-config))/"
	],
	"collectCoverageFrom": [
		"src/**/*.{js,jsx}",
		"!src/develop.js",
		"!src/exampleContainer.js"
	],
	"coverageThreshold": {
		"global": {
			"branches": 95,
			"functions": 95,
			"lines": 95,
			"statements": 95
		}
	},
	"moduleNameMapper": {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "node_modules/reusable-webpack-config/statics/jest/__mocks__/fileMock.js",
		"\\.(css|less|scss)$": "node_modules/reusable-webpack-config/statics/jest/__mocks__/styleMock.js"
	},
	"testURL": "http://localhost/"
};
