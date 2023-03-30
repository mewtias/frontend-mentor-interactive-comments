import { 
	FormCommentContainer, 
	FormComment, 
	StyledTextAreaComment, 
	SendCommentButton } 
from "./TextAreaComment.styled";

import { ProfileImage } from '../HeaderComment/HeaderComment.styled';

interface TextAreaCommentProps {}

const TextAreaComment : React.FC<TextAreaCommentProps> = () => {
	return (
		<FormCommentContainer>
			<FormComment action="">
				<ProfileImage
					width={40}
					height={40}
					src="https://i.pravatar.cc/150?u=maxblagun"
				/>
				<StyledTextAreaComment placeholder="Add a comment..." />
				<SendCommentButton>SEND</SendCommentButton>
			</FormComment>
		</FormCommentContainer>
)};

export default TextAreaComment;
