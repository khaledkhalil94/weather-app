import React, {useCallback, useMemo} from 'react';
import {ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material';
import {GpsOff, LocationSearching, MyLocation as MyLocationIcon} from '@mui/icons-material';
import {getCurrentLocation} from '../../../../core/actions';
import useStore from '../../../../core/store';
import {CURRENT_LOCATION_ID} from '../../../../core/definitions/constants';

function CurrentLocationItem() {
  const {activeLocation, currentLocationStatus} = useStore(state => ({
    activeLocation: state.activeLocation,
    currentLocationStatus: state.currentLocationStatus,
  }));
  const isActive = activeLocation?.id === CURRENT_LOCATION_ID;

  const handleSelectCurrentLocation = useCallback(() => {
    getCurrentLocation();
  }, []);

  const {Icon, status, color} = useMemo(() => {
    switch (currentLocationStatus) {
      case 'LOADING':
        return {
          Icon: <LocationSearching />,
          status: 'Getting your location...',
        };
      case 'SUCCESS':
        return {
          Icon: <MyLocationIcon />,
          color: 'success.main',
          status: 'Location is active.',
        };
      case 'FAIL':
        return {
          Icon: <GpsOff />,
          color: 'error.main',
          status: "Couldn't get current location!",
        };
      default:
        return {
          Icon: null,
        };
    }
  }, [currentLocationStatus]);

  return (
    <ListItem disablePadding>
      <ListItemButton selected={isActive} onClick={handleSelectCurrentLocation}>
        <ListItemIcon>{Icon}</ListItemIcon>
        <ListItemText
          primary="Current Location"
          secondary={
            <Typography color={color} fontSize={14}>
              {status}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}

export default CurrentLocationItem;
