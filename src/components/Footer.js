import * as React from 'react';
import Box from '@mui/material/Box';
// import styled from "styled-components";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import SourceIcon from '@mui/icons-material/Source';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export default function SimpleBottomNavigation({libraryStatus, setLibraryStatus}) {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation showLabels value={value} onChange={(event, newValue) => { setValue(newValue); }}>
          <BottomNavigationAction sx={{zIndex: 100}} href="https://github.com/rwishavg/Ours" label="Source" icon={<SourceIcon />} />
          <BottomNavigationAction sx={{zIndex: 100}} onClick={() => setLibraryStatus(!libraryStatus)} label="Library" icon={<LibraryMusicIcon />} />
          <BottomNavigationAction sx={{zIndex: 100}} label="Developer" icon={<PersonIcon />} />
        </BottomNavigation>
      </Box>
  );
}
