import React from "react";
import styled from "styled-components";

const Header = ({libraryStatus, devStatus}) => {
	return (
		<NavContainer>
			<H1 libraryStatus={libraryStatus} devStatus={devStatus}>Ours</H1>
		</NavContainer>
	);
};

const NavContainer = styled.div`
	min-height: 10vh;
	display: flex;
	margin-left: 5%;
	/* justify-content: space-around; */
	align-items: center;
	@media screen and (max-width: 768px) {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
		margin-left: 10%;
		margin-top: 5%;
	}
`;

const H1 = styled.h1`
	margin-left: 5%;
	transition: all 0.5s ease;
	margin-bottom: 20px;
	@media screen and (max-width: 768px) {
		visibility: ${(p) => (p.libraryStatus ? "hidden" : "visible")};
		opacity: ${(p) => (p.libraryStatus ? "0" : "100")};
		transition: all 0.5s ease;
	}
`;

export default Header;
