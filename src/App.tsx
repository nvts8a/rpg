import Character from './components/Character';
import {FunctionComponent} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {useLocalStorage} from './utils/react-local-storage';
import {createTheme, ThemeProvider} from '@mui/material';

const App: FunctionComponent = () => {
  const [currentTab, setCurrentTab] = useLocalStorage('currentTab', 0);

  const bannerStyle = {
    backgroundImage: `url(./banners/${currentTab}.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '22rem'
  }

  const theme = createTheme({
    palette: {
      primary:    { main: '#95116F' },
      secondary:  { main: '#f34697' }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container className='App' spacing={2}>
        <Grid xs={12} id='header' style={bannerStyle} />
        <Grid sx={{flexGrow: 0}}>
          <Character currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;