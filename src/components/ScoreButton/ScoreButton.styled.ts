import styled from "styled-components";

export const StyledScoreButton = styled.div`
	align-items: center;
	background-color: var(--very-light-gray);
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding 4px 6px; 
	width: fit-content;	
`

export const ScoreButtonComment = styled.button`
	background: transparent;
	border: none;
	color: var(--light-grayish-blue);
	font-size: 16px;
`

export const ScoreText = styled.span`
	color: var(--moderate-blue);
	font-weight: 400;
`
