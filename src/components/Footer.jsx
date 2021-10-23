import * as React from 'react';
// import styled from "styled-components";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import SourceIcon from '@mui/icons-material/Source';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Paper from '@mui/material/Paper';

// import styled from "styled-components";

export default function SimpleBottomNavigation({libraryStatus, setLibraryStatus, setDevStatus, devStatus}) {
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: -10, left: 0, right: 0, zIndex: 10, padding: '10px',borderRadius: '10px', backgroundColor: "#f1f1f183"}}>
      <BottomNavigation showLabels value={value} sx={{ borderRadius: '10px', bottom: 0}}onChange={(event, newValue) => { setValue(newValue); }}>
        <BottomNavigationAction sx={{zIndex: 10}} href="https://github.com/rwishavg/Ours" label="Source" icon={<SourceIcon />} />
        <BottomNavigationAction sx={{zIndex: 10}} onClick={() => setLibraryStatus(!libraryStatus)} label="Library" icon={<LibraryMusicIcon />} />
        <BottomNavigationAction sx={{zIndex: 10}} onClick={() => setDevStatus(!devStatus)} label="Developer" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  );
}