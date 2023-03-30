import styled from "styled-components";

export const StyledHeaderComment = styled.header`
	display: flex;
	align-items: center;
	gap: 1rem;
`
export const ProfileImage = styled.img.attrs(props => ({
	width: props.width || 30,
	height: props.height || 30
}))`
	border-radius: 50%;
	display: block;
`

export const ProfileNameLink = styled.a`
	color: black;	
	font-weight: 500;
	text-decoration: none;
`

export const CreatedAtText = styled.span`
	color: #92949B;
	font-weight: 400;
`