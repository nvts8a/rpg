/* eslint-env browser */
import {ChangeEvent, FunctionComponent} from 'react';
import {useLocalStorage} from './react-local-storage';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Character: FunctionComponent = () => {
  return (
    <div>
      <PersonalData />
    </div>
  );
}
const PersonalData: FunctionComponent = () => {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
      <div>
        <TextField id="outlined" label="Name / Primary Alias" defaultValue={name}
          onChange={ (e: ChangeEvent<HTMLInputElement>): void => setName(e.target.value) } />
      </div>
      {name}
    </Box>
  );
  /**
   <div>
   <TextField id="outlined" label="Metatype" />
   <TextField id="outlined" label="Ethnicity" />
   </div>
   <div>
   <TextField id="outlined" label="Age" />
   <TextField id="outlined" label="Sex" />
   <TextField id="outlined" label="Height" />
   <TextField id="outlined" label="Weight" />
   </div>
   <div>
   <TextField id="outlined" label="Reputation" />
   <TextField id="outlined" label="Heat" />
   </div>
   <div>
   <TextField id="outlined" label="Karma" />
   <TextField id="outlined" label="Total Karma" />
   <TextField id="outlined" label="Misc" />
   </div>
   **/
}

export default Character;