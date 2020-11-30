import React from 'react';
import { Box, Typography, SvgIconProps } from '@material-ui/core';
import Icon from '../../components/Icon';
import block from 'bem-cn-lite';

import './ErrorPage.scss';

const b = block('error-page');

type PropType = {
  code?: number;
  errorMessage?: string;
};

const ErrorPage: React.FC<PropType> = ({ code, errorMessage }) => {
  return (
    <div className={b()}>
      <Box>
        <Icon name="sad" fontSize="large" color="secondary" />
      </Box>
      <Typography variant="h1" component="h3">
        {code || 404} Error
      </Typography>
      <Typography variant="body1"> {errorMessage || 'Ups'}</Typography>
      {!code && !errorMessage && (
        <code>Seems, this page doesn't exist. Sorry :(</code>
      )}
    </div>
  );
};

export default ErrorPage;
