import * as React from 'react';

//importing mui elements
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import SourceIcon from '@mui/icons-material/Source';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Paper from '@mui/material/Paper';

export default function SimpleBottomNavigation({libraryStatus, setLibraryStatus, setDevStatus, devStatus}) {
  const [value, setValue] = React.useState(0);
  return (
    <Paper sx={paper}>
      <BottomNavigation showLabels value={value} sx={nav} onChange={(event, newValue) => { setValue(newValue); }}>
        <BottomNavigationAction sx={{zIndex: 10}} href="https://github.com/rwishavg/Ours" label="Source" icon={<SourceIcon />} />
        <BottomNavigationAction sx={{zIndex: 10}} onClick={() => setLibraryStatus(!libraryStatus)} label="Library" icon={<LibraryMusicIcon />} />
        <BottomNavigationAction sx={{zIndex: 10}} onClick={() => setDevStatus(!devStatus)} label="Developer" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

//paper contains the botto nav
const paper = {
  position: 'fixed',
  bottom: -10,
  left: 0,
  right: 0,
  zIndex: 10,
  padding: '10px',
  backgroundColor: "rgba(140, 185, 185, 0)",
  boxShadow: 'none',
}

//style for bottom nav
const nav = {
  marginLeft: '50%',
  transform: 'translate(-50%)',
  borderRadius: '10px',
  bottom: 0,
  minWidth: '400px',
  maxWidth: '43vw',
}