import React from "react";
import styled from "styled-components";
const Credit = () => {
	return (
		<CreditContainer>
			<Link href="https://rwishav-ghosh.web.app/" target="_blank">
				Rwishav
			</Link>
		</CreditContainer>
	);
};

const CreditContainer = styled.div`
	padding: 5px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
	user-select: none;
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	z-index: 12;
	bottom: 5px;
	right: 5px;
	color: black;
	font-size: 1rem;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Link = styled.a`
	color: black;
`;
export default Credit;
