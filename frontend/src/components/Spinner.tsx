import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

const Spinner = () => {
  return (
    <Backdrop open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Spinner;
