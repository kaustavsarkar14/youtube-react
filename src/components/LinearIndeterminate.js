import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useSelector } from 'react-redux';

export default function LinearIndeterminate() {
  const isAppLoading = useSelector(state => state.app.isAppLoading)
  return (
    <div className='sticky top-0' >
      <Box sx={{ width: isAppLoading ? '100%' : '0' }}>
        <LinearProgress color='error' />
      </Box>
    </div>
  );
}