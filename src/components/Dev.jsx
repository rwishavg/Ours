import React from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import pic from "../images/avatar/pic.png";

const Dev = ({ devStatus }) => {
	return (
		<DevContainer devStatus={devStatus}>
			<Avatar
        alt="Rwishav Ghosh"
				src={pic}
				sx={{ width: 150, height: 150, marginTop: 30, marginLeft: 15 }}
      />
			<H1>Rwishav Ghosh</H1>
			<H3>Software Engineer</H3>
		</DevContainer>
	);
};
const DevContainer = styled.div`
	position: fixed;
	z-index: 9;
	top: 0;
	right: 0;
	width: 25rem;
	height: 100%;
	background-color: white;
	box-shadow: 2px 2px 50px rgb(204, 204, 204);
	user-select: none;
	overflow: scroll;
	transform: translateX(${(p) => (p.devStatus ? "0%" : "100%")});
	transition: all 0.3s ease;
	opacity: ${(p) => (p.devStatus ? "100" : "0")};
	scrollbar-width: thin;
	scrollbar-color: rgba(155, 155, 155, 0.5) tranparent;
	&::-webkit-scrollbar {
		width: 5px;
	}
	&::-webkit-scrollbar-track {
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background-color: rgba(155, 155, 155, 0.5);
		border-radius: 20px;
		border: transparent;
	}
	@media screen and (max-width: 768px) {
		height : 90%;
		box-shadow: none;
		width: 100%;
		z-index: 9;
		
	}
`;

const H1 = styled.h2`
	/* margin-top: 50%; */
	display: flex;
	justify-content: center;
	margin-top: 2rem;
	padding: 1rem;
`;

const H3 = styled.h3`
	display: flex;
	justify-content: center;
	/* transform: translateX(-30%); */
	/* padding: 2rem; */
`;

export default Dev;
