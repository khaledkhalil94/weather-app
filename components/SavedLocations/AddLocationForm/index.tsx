import React, {useCallback, useState} from 'react';
import {Box, Button, ButtonGroup, DialogActions, DialogContent} from '@mui/material';
import CountrySelector from './components/CountrySelector';
import CitySelector from './components/CitySelector';
import {TempLocation} from '../../../core/definitions/types';
import {getCityCoordinates, getCountryCities} from '../../../core/api/geoApi';
import {addNewLocation} from '../../../core/actions';
import {enqueueSnackbar} from 'notistack';

interface Props {
  handleCancel(): void;
  handleClose(): void;
}

interface Country {
  name: string;
  code: string;
}

function AddLocationForm(props: Props) {
  const {handleCancel, handleClose} = props;
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [cities, setCities] = useState<string[]>([]);
  const [tempLocation, setTempLocation] = useState<TempLocation | null>(null);

  const handleSubmit = () => {
    if (tempLocation) {
      addNewLocation(tempLocation);
      handleClose();
    }
  };

  const handleSelectCountry = useCallback(async (country: {name: string; code: string}) => {
    try {
      setSelectedCountry(country);
      const response = await getCountryCities(country.name);
      if (response.error === true) {
        enqueueSnackbar(response.message, {
          variant: 'error',
        });
      } else if (response.error === false) {
        const {data} = response;
        setCities(data);
      }
    } catch (error) {
      enqueueSnackbar('Unknown error!', {
        variant: 'error',
      });
    }
  }, []);

  const handleSelectCity = useCallback(
    async (city: string) => {
      if (!selectedCountry) {
        return;
      }
      try {
        const data = await getCityCoordinates(selectedCountry.name, city);
        // Narrowing down the response
        if ('error' in data) {
          enqueueSnackbar(data.message, {
            variant: 'error',
          });
        } else if ('length' in data) {
          if (!data.length) {
            return;
          }
          setTempLocation({
            lng: data[0].lon,
            lat: data[0].lat,
            name: city,
          });
        }
      } catch (error) {
        enqueueSnackbar('Unknown error!', {
          variant: 'error',
        });
      }
    },
    [selectedCountry],
  );

  return (
    <>
      <DialogContent dividers>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Box>
            <CountrySelector onSelect={handleSelectCountry} />
          </Box>
          <Box mt={4}>
            <CitySelector cities={cities} onSelect={handleSelectCity} />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <ButtonGroup>
          <Button onClick={handleCancel} variant="outlined">
            Back
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </ButtonGroup>
      </DialogActions>
    </>
  );
}

export default AddLocationForm;
