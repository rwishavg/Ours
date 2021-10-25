import React from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import pic from "../images/avatar/pic.png";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const Dev = ({ devStatus }) => {
	return (
		<DevContainer devStatus={devStatus}>
			<Avatar
        alt="Rwishav Ghosh"
				src={pic}
				sx={{ width: 160, height: 160, marginTop: '10vh', marginLeft: 15 }}
      />
			<H1>Rwishav Ghosh</H1>
			<H3>Software Engineer</H3>
      <List sx={{marginTop: 5, marginLeft: 5}}>
        <ListItemButton>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary="Website" />
				</ListItemButton>
					
        <ListItemButton>
          <ListItemIcon>
            <LinkedInIcon />
          </ListItemIcon>
          <ListItemText primary="LinkedIn" />
				</ListItemButton>

				<ListItemButton>
          <ListItemIcon>
            <TwitterIcon />
          </ListItemIcon>
          <ListItemText primary="Twitter" />
				</ListItemButton>

				<ListItemButton>
          <ListItemIcon>
            <InstagramIcon />
          </ListItemIcon>
          <ListItemText primary="Instagram" />
				</ListItemButton>
					
      </List>
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
	@media screen and (max-width: 768px) {
		height : 100%;
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
