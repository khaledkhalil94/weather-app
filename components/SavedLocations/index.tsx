import React, {useCallback, useMemo, useState} from 'react';
import {Box} from '@mui/system';
import {Dialog, DialogTitle, IconButton, Tooltip} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocationsList from './List/';
import AddLocationForm from './AddLocationForm';

enum States {
  LIST,
  FORM,
}

function SavedLocations() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<States>(States.LIST);

  const handleClose = useCallback(() => {
    setState(States.LIST);
    setIsOpen(false);
  }, []);

  const {title, Component} = useMemo(() => {
    return {
      [States.LIST]: {
        title: 'Select Location',
        Component: () => <LocationsList handleAddLocation={() => setState(States.FORM)} />,
      },
      [States.FORM]: {
        title: 'Add Location',
        Component: () => (
          <AddLocationForm handleCancel={() => setState(States.LIST)} handleClose={handleClose} />
        ),
      },
    }[state];
  }, [state, handleClose]);

  return (
    <Box>
      <Tooltip title="Locations">
        <IconButton size="large" color="primary" onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </IconButton>
      </Tooltip>
      <Dialog maxWidth="sm" fullWidth onClose={handleClose} open={isOpen}>
        <DialogTitle>{title}</DialogTitle>
        <Component />
      </Dialog>
    </Box>
  );
}

export default SavedLocations;
