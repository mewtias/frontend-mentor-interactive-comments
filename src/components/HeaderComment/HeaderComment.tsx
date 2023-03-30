import { 
	StyledHeaderComment,
	ProfileImage,
	ProfileNameLink,
	CreatedAtText
} from './HeaderComment.styled';

import { User } from "../../types";

interface Props {
	createdAt: string
	user: User
}

const HeaderComment = ({ createdAt, user }: Props) => {
	return (
		<StyledHeaderComment>
			
			<a 
				href={`/${user.username}`}
			>
				<ProfileImage
					src={`https://i.pravatar.cc/150?u=${user.username}`}
					alt={`profile picture ${user.username}`}
				/>
			</a>

			<ProfileNameLink 
				href={`/${user.username}`}
			>
				{user.username}
			</ProfileNameLink>
			<CreatedAtText>
				{createdAt}
			</CreatedAtText>
		</StyledHeaderComment>
	)
};

export default HeaderComment;
