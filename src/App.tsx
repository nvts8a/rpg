import Character from './components/Character';
import {FunctionComponent} from 'react';
import {Stack, Box} from '@mui/material';
import {useLocalStorage} from './utils/react-local-storage';
import {createTheme, ThemeProvider} from '@mui/material';
import '@fontsource/orbitron/500.css';

const App: FunctionComponent = () => {
  const [currentTab, setCurrentTab] = useLocalStorage('currentTab', 0);

  const theme = createTheme({
    palette: {
      primary:    { main: '#95116F' },
      secondary:  { main: '#f34697' }
    }
  });

  const bannerStyle = {
    backgroundImage: `url(./banners/${currentTab}.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderWidth: '5px 0px 5px 0px',
    borderStyle: 'dashed',
    borderColor: 'rgba(241,194,50,.75)',
    height: '22rem'
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack className='App'>
        <Box sx={bannerStyle} />
        <Box>
          <Character currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default App;