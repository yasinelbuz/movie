import styled from "styled-components";

const StyleHeader = styled.header`
	display: flex;
	align-items: center;
	justify-items: center;

	height: 90px;
	padding: 20px;
	background-color: ${(props) => props.theme.color.primaryColor};

	color: ${(props) => props.theme.color.secondaryTextColor};
`;

const StyleLogo = styled.div``;

export { StyleHeader, StyleLogo };
