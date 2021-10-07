import React from "react";
import styled from "styled-components";
const Credit = () => {
	return (
		<CreditContainer>
			<Link href="https://rwishav-ghosh.web.app/" target="_blank">
				Rwishav Ghosh
			</Link>
			<br></br>
			<Link href="#" target="_blank">
				Source
			</Link>
		</CreditContainer>
	);
};

const CreditContainer = styled.div`
	user-select: none;
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
	z-index: 12;
	bottom: 5px;
	right: 5px;
	color: rgb(155, 155, 155);
	font-size: 0.75rem;
`;

const Link = styled.a`
	color: rgb(155, 155, 155);
`;
export default Credit;
