import {FunctionComponent} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {MenuItem} from '@mui/material';
import {CharacterSelectField, CharacterTextField} from './Feilds';
import PageLayout from '../layouts/PageLayout';
import {useLocalStorage} from '../utils/react-local-storage';

type PersonalDataPageProps = {
  metatype: string,
  name: string,
  role: string,
  sex: string,
  setName: Function,
  setMetatype: Function,
  setRole: Function,
  setSex: Function
}

const PersonalDataPage: FunctionComponent<PersonalDataPageProps> = (props) => {
  const [ethnicity, setEthnicity] = useLocalStorage('pd.ethnicity', '');
  const [age, setAge] = useLocalStorage('pd.age', '');
  const [height, setHeight] = useLocalStorage('pd.height', '');
  const [weight, setWeight] = useLocalStorage('pd.weight', '');
  const [reputation, setReputation] = useLocalStorage('pd.reputation', '');
  const [heat, setHeat] = useLocalStorage('pd.heat', '');

  return (
    <PageLayout>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <CharacterTextField label="Name / Primary Alias" value={props.name} setFunction={props.setName}/>
        </Grid>
        <Grid xs={6}>
          <CharacterSelectField label="Role" value={props.role} setFunction={props.setRole}>
            <MenuItem value="arcane-specialist">Arcane Specialist</MenuItem>
            <MenuItem value="street-samurai">Street Samurai</MenuItem>
            <MenuItem value="face">Face</MenuItem>
            <MenuItem value="technology-specialist">Technology Specialist</MenuItem>
          </CharacterSelectField>
        </Grid>
        <Grid xs={6}>
          <CharacterSelectField label="Metatype" value={props.metatype} setFunction={props.setMetatype}>
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
          <CharacterSelectField label="Sex" value={props.sex} setFunction={props.setSex}>
            <MenuItem value="him">Male</MenuItem>
            <MenuItem value="her">Female</MenuItem>
          </CharacterSelectField>
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
      </Grid>
    </PageLayout>
  );
}

export default PersonalDataPage;