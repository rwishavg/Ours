import React from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';

const Dev = ({ devStatus }) => {
	return (
		<DevContainer devStatus={devStatus}>
      <Avatar
        alt="Rwishav Ghosh"
        src="../images/avatar/pic.png"
        sx={{ width: 100, height: 100, marginTop: 35, marginLeft: 20 }}
      />
			<H1>Rwishav Ghosh</H1>
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
	transform: translateY(${(p) => (p.devStatus ? "0%" : "100%")});
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
	margin-left: 40%;
	transform: translateX(-30%);
	padding: 2rem;
`;

export default Dev;
