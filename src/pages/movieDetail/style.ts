import styled from "styled-components";

const StyleMovieDetail = styled.div`
	display: flex;
	gap: 20px;
	padding: 20px;

	.details div {
		margin-bottom: 20px;
		border-bottom: 1px dashed #ccc;
		padding: 10px 0;
		b {
			font-size: 18px;
			display: inline-block;
			margin-bottom: 5px;
		}
	}
`;

export { StyleMovieDetail };
