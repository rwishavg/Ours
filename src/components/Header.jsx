import React from "react";
import styled from "styled-components";
import logo from "../images/avatar/logo.png";

const Header = ({libraryStatus, devStatus}) => {
	return (
		<NavContainer>
			<IMG src={logo} alt="" libraryStatus={libraryStatus} devStatus={devStatus} />
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
		margin-left: 6%;
	}
`;

const H1 = styled.h2`
	/* margin-left: 5%; */
	margin-left: 10px;
	margin-top: 25px;
	transition: all 0.5s ease;
	margin-bottom: 20px;
	@media screen and (max-width: 768px) {
		visibility: ${(p) => (p.libraryStatus ? "hidden" : "visible")};
		opacity: ${(p) => (p.libraryStatus ? "0" : "100")};
		transition: all 0.5s ease;
	}
`;

const IMG = styled.img`
	margin-left: 5%;
	width: 30px;
	height: 30px;
	@media screen and (max-width: 768px) {
		margin-left: 0%;
		visibility: ${(p) => (p.libraryStatus ? "hidden" : "visible")};
		opacity: ${(p) => (p.libraryStatus ? "0" : "100")};
		transition: all 0.5s ease;
	}
`;

export default Header;
