import React from 'react';
import {IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {Delete as DeleteIcon, NearMe} from '@mui/icons-material';

interface Props {
  isActive?: boolean;
  name: string;
  onSelect: () => void;
  onDelete: () => void;
}

function LocationItem(props: Props) {
  const {isActive, name, onDelete, onSelect} = props;

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton selected={isActive} onClick={onSelect}>
        <ListItemIcon>
          <NearMe />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}

export default LocationItem;
