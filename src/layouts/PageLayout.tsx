import {FunctionComponent, PropsWithChildren} from 'react';
import {Box} from '@mui/material';

const PageLayout: FunctionComponent<PropsWithChildren> = (props: PropsWithChildren) => {
  return(
    <Box width='100%'>
      {props.children}
    </Box>
  );
}

export default PageLayout;