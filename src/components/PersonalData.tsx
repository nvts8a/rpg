/* eslint-env browser */
import {ChangeEvent, FunctionComponent, ReactNode} from 'react';
import {useLocalStorage} from './react-local-storage';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Box,
  FormControl,
  InputLabel, MenuItem,
  Select,
  SelectChangeEvent,
  TextField
} from '@mui/material';

const PersonalData: FunctionComponent = () => {
  const [name, setName] = useLocalStorage('name', '');
  const [metatype, setMetatype] = useLocalStorage('metatype', '');
  const [ethnicity, setEthnicity] = useLocalStorage('ethnicity', '');

  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <CharacterTextField label="Name / Primary Alias" value={name} setFunction={setName} />
        </Grid>
        <Grid xs={6}>
          <CharacterSelectField label="Metatype" value={metatype} setFunction={setMetatype}>
            <MenuItem value="human">Human</MenuItem>
            <MenuItem value="dwarf">Dwarf</MenuItem>
            <MenuItem value="elf">Elf</MenuItem>
            <MenuItem value="ork">Ork</MenuItem>
            <MenuItem value="troll">Troll</MenuItem>
          </CharacterSelectField>
        </Grid>
        <Grid xs={6}>
          <CharacterTextField label="Ethnicity" value={ethnicity} setFunction={setEthnicity} />
        </Grid>
      </Grid>
    </Box>
  );
  /**
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

type CharacterFieldProps = {
  children?: ReactNode,
  label: string,
  name?: string,
  value: string,
  setFunction: Function
}

const CharacterTextField: FunctionComponent<CharacterFieldProps> = (props: CharacterFieldProps) => {
  return (
    <TextField fullWidth id="outlined" label={props.label} defaultValue={props.value}
      onChange={(e: ChangeEvent<HTMLInputElement>): void => props.setFunction(e.target.value)}>
      {props.children}
    </TextField>
  );
}

const CharacterSelectField: FunctionComponent<CharacterFieldProps> = (props: CharacterFieldProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={props.name}>{props.label}</InputLabel>
      <Select labelId={props.name} id={props.name + '-select'}
        value={props.value}
        label={props.label}
        onChange={(e: SelectChangeEvent): void => props.setFunction(e.target.value)}
      >
        {props.children}
      </Select>
    </FormControl>
  )
}

export default PersonalData;