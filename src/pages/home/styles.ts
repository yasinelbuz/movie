import styled from "styled-components";

const StylesHome = styled.div`
	padding: 20px;
`;

const StyleFilters = styled.div`
	display: flex;
	gap: 20px;
	justify-content: flex-end;
	margin-bottom: 20px;

	.inputNumber {
		width: 200px;
	}

	.selectType {
		width: 200px;
	}

	.search {
		width: 400px;
	}
`;

export { StylesHome, StyleFilters };
