import styled from "styled-components";

export const FormCommentContainer = styled.div`
	background: white;
	border-radius: 8px;
	display: flex;
	max-width: 730px;
	width: 100%;
`

export const FormComment = styled.form`
	display: flex;
	gap: 16px;
	padding: 1.5rem;
	width: 100%;
`

export const StyledTextAreaComment = styled.textarea`
	border: 1px solid var(--light-gray);
	border-radius: 8px;
	min-height: 70px;
	padding-top: 1rem;
	padding-inline: 1.25rem;
	width: 100%;
`

export const SendCommentButton = styled.button`
	background-color: var(--moderate-blue);
	border: none;
	border-radius: 8px;
	color: white;
	height: fit-content;
	padding: 0.875rem 1.5rem;
`
