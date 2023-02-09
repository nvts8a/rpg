import './App.css';
import Character from './components/Character';
import {FunctionComponent} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {useLocalStorage} from './utils/react-local-storage';

const App: FunctionComponent = () => {
  const [currentTab, setCurrentTab] = useLocalStorage('currentTab', 0);

  const bannerStyle = {
    backgroundImage: `url(./banners/${currentTab}.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '25rem'
  }

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid xs={12} id='header' style={bannerStyle} />
        <Grid sx={{flexGrow: 1}}>
          <Character currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;