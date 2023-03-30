import { 
	StyledScoreButton, 
	ScoreText, 
	ScoreButtonComment
} from "./ScoreButton.styled";

interface Props {
	score: number
}

const ScoreButton = ({score}: Props) => {
	return (
		<StyledScoreButton>
			<ScoreButtonComment>+</ScoreButtonComment>
			<ScoreText>{score}</ScoreText>
			<ScoreButtonComment>-</ScoreButtonComment>
		</StyledScoreButton>
	)
};

export default ScoreButton;
