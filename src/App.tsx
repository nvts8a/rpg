import './App.css';
import Character from './components/Character';
import {FunctionComponent} from 'react';
import Grid from '@mui/material/Unstable_Grid2';

const App: FunctionComponent = () => {
  const bannerStyle = {
    backgroundImage: 'url(./banner.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'space',
    height: '25rem'
  }

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid xs={12} id='header' style={bannerStyle} />
        <Grid sx={{flexGrow: 1}}>
          <Character />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;