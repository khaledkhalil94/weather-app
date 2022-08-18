import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import countries from './countries.json';

interface Props {
  onSelect(country: {name: string; code: string}): void;
}

function CountrySelector(props: Props) {
  const {onSelect} = props;

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{width: 300}}
      options={Object.keys(countries)}
      autoHighlight
      getOptionLabel={option => option}
      onChange={(event, value) => {
        if (value) {
          onSelect({
            name: value,
            code: countries[value as keyof typeof countries],
          });
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
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

export default CountrySelector;
