import React, {FunctionComponent} from 'react';
import {Typography} from '@mui/material';

const PageHeader: FunctionComponent<{title: string}> = (props: {title: string}) => {
  return(
    <Typography
      component='div' align='center' gutterBottom={true}
      sx={{ fontSize: '1.5em', fontFamily: 'Orbitron' }}>
      {props.title.toUpperCase()}
    </Typography>
  );
}

export default PageHeader