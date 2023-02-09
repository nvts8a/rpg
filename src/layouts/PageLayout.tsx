import {FunctionComponent, PropsWithChildren} from 'react';
import {Box} from '@mui/material';

const PageLayout: FunctionComponent<PropsWithChildren> = (props: PropsWithChildren) => {
  return(
    <Box width='100%' sx={{
      backgroundColor: 'WhiteSmoke',
      border: 5,
      borderColor: 'FloralWhite',
      borderRadius: '10px',
      boxShadow: '0 30px 40px rgba(0,0,0,.3)'
    }}>
      {props.children}
    </Box>
  );
}

export default PageLayout;