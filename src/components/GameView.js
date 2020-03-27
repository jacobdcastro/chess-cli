const React = require("react");
const importJsx = require("import-jsx");
const { Box } = require("ink");
const Board = importJsx("./Board");
const SetupQuestions = importJsx("./SetupQuestions");
const { useInput } = require("ink");

const GameView = ({ player }) => {
	useInput((value, key) => {});

	if (player) {
		return (
			<Box height={15}>
				<Board />
			</Box>
		);
	} else {
		return (
			<Box height={15}>
				<SetupQuestions />
			</Box>
		);
	}
};

module.exports = GameView;
