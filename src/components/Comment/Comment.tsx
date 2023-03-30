import { HeaderComment } from '../HeaderComment';
import ScoreButton from '../ScoreButton/ScoreButton';

import { StyledComment, CommentParagraph } from './Comment.styled';

import { CommentType } from "../../types";

interface Props {
	comment: CommentType
}

const Comment = ({comment}: Props) => {
	return (
		<StyledComment>
			<div>
				<ScoreButton score={comment.score} />
			</div>
			<div>
				<HeaderComment
					createdAt={comment.createdAt}
					user={comment.user}
				/>
				<CommentParagraph>
					{comment.content}
				</CommentParagraph>
			</div>
		</StyledComment>
	)
};

export default Comment;
