import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import SourceIcon from '@mui/icons-material/Source';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

export default function SimpleBottomNavigation({libraryStatus, setLibraryStatus}) {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Source" icon={<SourceIcon />} />
        <BottomNavigationAction onClick={() => setLibraryStatus(!libraryStatus)} label="Library" icon={<LibraryMusicIcon />} />
        <BottomNavigationAction label="Developer" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
}