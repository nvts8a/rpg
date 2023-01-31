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
  const [age, setAge] = useLocalStorage('age', '');
  const [sex, setSex] = useLocalStorage('sex', '');
  const [height, setHeight] = useLocalStorage('height', '');
  const [weight, setWeight] = useLocalStorage('weight', '');
  const [reputation, setReputation] = useLocalStorage('reputation', '');
  const [heat, setHeat] = useLocalStorage('heat', '');
  const [karma, setKarma] = useLocalStorage('karma', '');
  const [totalKarma, setTotalKarma] = useLocalStorage('totalKarma', '');
  const [misc, setMisc] = useLocalStorage('misc', '');


  return (
    <Box>
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
        <Grid xs={3}>
          <CharacterTextField label="Age" value={age} setFunction={setAge} />
        </Grid>
        <Grid xs={3}>
          <CharacterTextField label="Sex" value={sex} setFunction={setSex} />
        </Grid>
        <Grid xs={3}>
          <CharacterTextField label="Height" value={height} setFunction={setHeight} />
        </Grid>
        <Grid xs={3}>
          <CharacterTextField label="Weight" value={weight} setFunction={setWeight} />
        </Grid>
        <Grid xs={6}>
          <CharacterTextField label="Reputation" value={reputation} setFunction={setReputation} />
        </Grid>
        <Grid xs={6}>
          <CharacterTextField label="Heat" value={heat} setFunction={setHeat} />
        </Grid>
        <Grid xs={4}>
          <CharacterTextField label="Karma" value={karma} setFunction={setKarma} />
        </Grid>
        <Grid xs={4}>
          <CharacterTextField label="Total Karma" value={totalKarma} setFunction={setTotalKarma} />
        </Grid>
        <Grid xs={4}>
          <CharacterTextField label="Misc" value={misc} setFunction={setMisc} />
        </Grid>
      </Grid>
    </Box>
  );
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
      <Select labelId={props.name} id={`${props.name}-select`}
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