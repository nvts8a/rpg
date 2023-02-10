import {FunctionComponent, PropsWithChildren} from 'react';
import {Box} from '@mui/material';

const PageLayout: FunctionComponent<PropsWithChildren> = (props: PropsWithChildren) => {
  return(
    <Box width='100%' sx={{
      backgroundColor: 'WhiteSmoke',
      border: 6,
      borderColor: 'rgba(255,85,175,.1)',
      borderRadius: '8px',
      borderStyle: 'groove',
      boxShadow: '0 30px 40px rgba(0,0,0,.5)',
      padding: '0.5rem'
    }}>
      {props.children}
    </Box>
  );
}

export default PageLayout;