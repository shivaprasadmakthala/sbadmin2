import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import SpeedIcon from '@mui/icons-material/Speed';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableRowsIcon from '@mui/icons-material/TableRows';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';

export const firstListItems=(

    <React.Fragment>
        <ListItemButton>
    <ListItemIcon>
      <SpeedIcon />
    </ListItemIcon>
    <ListItemText primary="Dashboard" />
  </ListItemButton>
    </React.Fragment>   
)

export const secondaryListItems = (
    <React.Fragment>
    <ListSubheader component="div" inset sx={{backgroundColor:"#4e73df",
color:"#f8f9fc",textAlign:"left"}} >
      INTERFACE
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Components" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BuildIcon  />
      </ListItemIcon>
      <ListItemText primary="Utilities" />
    </ListItemButton>
   
  </React.Fragment>
);

export const thirdListItems = (
    <React.Fragment>
    <ListSubheader component="div" inset  sx={{backgroundColor:"#4e73df",
color:"#f8f9fc",textAlign:"left"}}>
      ADDONS
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText primary="Pages" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon  />
      </ListItemIcon>
      <ListItemText primary="Charts" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TableRowsIcon  />
      </ListItemIcon>
      <ListItemText primary="Tables" />
    </ListItemButton>
   
  </React.Fragment>
);