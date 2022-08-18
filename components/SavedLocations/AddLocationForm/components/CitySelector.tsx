import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
  cities: string[];
  onSelect(city: string): void;
}

function CitySelector(props: Props) {
  const {cities, onSelect} = props;

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{width: 300}}
      options={cities}
      autoHighlight
      onChange={(event, value) => {
        if (value) {
          onSelect(value);
        }
      }}
      renderOption={(props, option) => (
        <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
          {option}
        </Box>
      )}
      renderInput={params => (
        <TextField
          {...params}
          label="Choose a city"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

export default CitySelector;
