import {styled, Box} from '@mui/material';

export const StyledBox = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  overflow: 'auto',
  padding: theme.spacing(2),
}));
