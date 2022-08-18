import React from 'react';
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {Add as AddIcon} from '@mui/icons-material';

interface Props {
  onAdd: () => void;
}

function AddItem(props: Props) {
  const {onAdd} = props;

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onAdd}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Location" />
      </ListItemButton>
    </ListItem>
  );
}

export default AddItem;
