import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { SnackbarContent, Typography } from '@mui/material';

export default function AutohideSnackbar({ open, message, onClose, color }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      message={message}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
       <SnackbarContent
        sx={{ backgroundColor: '#78bee3', color: 'white' }}
        message={<div style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
        <Typography style={{ color }}> {message}</Typography>
        </div>}
      />
       
    </Snackbar>
  );
}
