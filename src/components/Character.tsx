import React, {FunctionComponent, ReactElement, ReactNode, SyntheticEvent} from 'react';
import {useLocalStorage} from '../utils/react-local-storage';
import {Box, Tab, Tabs, Typography} from '@mui/material';
import HistoryPage from './HistoryPage';
import QualitiesPage from './QualitiesPage';
import PersonalDataPage from './PersonalDataPage';
import CharacterCard from './CharacterCard';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps): ReactElement {
  const { children, value, index, ...other } = props;

  return (
    <Box
      sx={{ width: '100%' }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number): any {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

type CharacterProps = {
  currentTab: number,
  setCurrentTab: Function
}

const Character: FunctionComponent<CharacterProps> = (props: CharacterProps) => {
  // Character Card Values
  const [name, setName] = useLocalStorage('pd.name', '');
  const [metatype, setMetatype] = useLocalStorage('pd.metatype', '');
  const [role, setRole] = useLocalStorage('pd.role', '');
  const [sex, setSex] = useLocalStorage('pd.sex', '');
  const [totalKarma, setTotalKarma] = useLocalStorage('q.total-karma', 50);

  const handleTabChange = (event: SyntheticEvent, newValue: number): void => {
    props.setCurrentTab(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={props.currentTab}
        onChange={handleTabChange}
        aria-label="Vertical Tabs"
        sx={{ borderRight: 1, minWidth: '12%', borderColor: 'divider' }}
      >
        <Tab label="Personal Data" {...a11yProps(0)} />
        <Tab label="History" {...a11yProps(1)} />
        <Tab label="Qualities" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={props.currentTab} index={0}>
        <PersonalDataPage
          metatype={metatype} name={name} role={role} sex={sex}
          setMetatype={setMetatype} setName={setName} setRole={setRole} setSex={setSex}/>
      </TabPanel>
      <TabPanel value={props.currentTab} index={1}>
        <HistoryPage />
      </TabPanel>
      <TabPanel value={props.currentTab} index={2}>
        <QualitiesPage setTotalKarma={setTotalKarma} />
      </TabPanel>
      <CharacterCard metatype={metatype} name={name} role={role} sex={sex} totalKarma={totalKarma} />
    </Box>
  );
}

export default Character;