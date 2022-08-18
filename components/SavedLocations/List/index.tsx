import React, {useCallback} from 'react';
import CurrentLocationItem from './components/CurrentLocationItem';
import {DialogContent, Divider, List} from '@mui/material';
import LocationItem from './components/LocationItem';
import AddItem from './components/AddItem';
import {LocationId, SavedLocation} from '../../../core/definitions/types';
import {removeLocation, switchLocation} from '../../../core/actions';
import useStore from '../../../core/store';

interface Props {
  handleAddLocation(): void;
}

function LocationsList(props: Props) {
  const {savedLocations, activeLocation} = useStore(state => ({
    savedLocations: state.savedLocations,
    activeLocation: state.activeLocation,
  }));
  const {handleAddLocation} = props;

  const handleSelectLocation = useCallback((id: SavedLocation) => {
    switchLocation(id);
  }, []);

  const handleRemoveLocation = useCallback((id: LocationId) => {
    removeLocation(id);
  }, []);

  return (
    <DialogContent dividers>
      <List sx={{pt: 0}}>
        <AddItem onAdd={handleAddLocation} />
        <Divider />
        <CurrentLocationItem />
        <Divider />
        {savedLocations.map(location => (
          <LocationItem
            key={location.id}
            isActive={location.id === activeLocation?.id}
            name={location.name}
            onDelete={() => handleRemoveLocation(location.id)}
            onSelect={() => handleSelectLocation(location)}
          />
        ))}
      </List>
    </DialogContent>
  );
}

export default LocationsList;
