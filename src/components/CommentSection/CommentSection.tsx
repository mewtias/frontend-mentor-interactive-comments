import { TextAreaComment } from '../TextAreaComment';
import Comment from '../Comment/Comment';

import { CommentType } from '../../types';

import { StyledComments } from './CommentSection.styled';

interface Props {
	comments: CommentType[]
}

export const CommentSection = ({comments}: Props) => {
	return (
		<StyledComments>
			{
				comments.map(comment => (
					<Comment 
						key={comment.id} 
						comment={comment} 
					/>
				))
			}
			<TextAreaComment />
		</StyledComments>	
	)
}