/* eslint-env browser */
import {FunctionComponent} from 'react';
import {useLocalStorage} from '../utils/react-local-storage';
import Grid from '@mui/material/Unstable_Grid2';
import {Box, MenuItem} from '@mui/material';
import {CharacterSelectField, CharacterTextField} from './Feilds';

const PersonalData: FunctionComponent = () => {
  const [name, setName] = useLocalStorage('pd.name', '');
  const [role, setRole] = useLocalStorage('pd.role', '');
  const [metatype, setMetatype] = useLocalStorage('pd.metatype', '');
  const [ethnicity, setEthnicity] = useLocalStorage('pd.ethnicity', '');
  const [age, setAge] = useLocalStorage('pd.age', '');
  const [sex, setSex] = useLocalStorage('pd.sex', '');
  const [height, setHeight] = useLocalStorage('pd.height', '');
  const [weight, setWeight] = useLocalStorage('pd.weight', '');
  const [reputation, setReputation] = useLocalStorage('pd.reputation', '');
  const [heat, setHeat] = useLocalStorage('pd.heat', '');
  const [karma, setKarma] = useLocalStorage('pd.karma', '');
  const [totalKarma, setTotalKarma] = useLocalStorage('pd.total-karma', '');
  const [misc, setMisc] = useLocalStorage('pd.misc', '');

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <CharacterTextField label="Name / Primary Alias" value={name} setFunction={setName}/>
        </Grid>
        <Grid xs={6}>
          <CharacterSelectField label="Role" value={role} setFunction={setRole}>
            <MenuItem value="arcane-specialist">Arcane Specialist</MenuItem>
            <MenuItem value="street-samurai">Street Samurai</MenuItem>
            <MenuItem value="face">Face</MenuItem>
            <MenuItem value="technology-specialist">Technology Specialist</MenuItem>
          </CharacterSelectField>
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
          <CharacterTextField label="Ethnicity" value={ethnicity} setFunction={setEthnicity}/>
        </Grid>
        <Grid xs={3}>
          <CharacterTextField label="Age" value={age} setFunction={setAge}/>
        </Grid>
        <Grid xs={3}>
          <CharacterTextField label="Sex" value={sex} setFunction={setSex}/>
        </Grid>
        <Grid xs={3}>
          <CharacterTextField label="Height" value={height} setFunction={setHeight}/>
        </Grid>
        <Grid xs={3}>
          <CharacterTextField label="Weight" value={weight} setFunction={setWeight}/>
        </Grid>
        <Grid xs={6}>
          <CharacterTextField label="Reputation" value={reputation} setFunction={setReputation}/>
        </Grid>
        <Grid xs={6}>
          <CharacterTextField label="Heat" value={heat} setFunction={setHeat}/>
        </Grid>
        <Grid xs={4}>
          <CharacterTextField label="QualitiesUtil" value={karma} setFunction={setKarma}/>
        </Grid>
        <Grid xs={4}>
          <CharacterTextField label="Total QualitiesUtil" value={totalKarma} setFunction={setTotalKarma}/>
        </Grid>
        <Grid xs={4}>
          <CharacterTextField label="Misc" value={misc} setFunction={setMisc}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PersonalData;