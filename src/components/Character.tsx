import {FunctionComponent, SyntheticEvent} from 'react';
import {useLocalStorage} from './react-local-storage';
import PersonalData from './PersonalData';
import {Box, Tab} from '@mui/material';
import {TabContext, TabList, TabPanel} from '@mui/lab';

const Character: FunctionComponent = () => {
  const [value, setValue] = useLocalStorage('currentTab', 'personal-data');

  const handleChange = (e: SyntheticEvent, newValue: string): void => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Personal Data" value="personal-data" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="personal-data"><PersonalData/></TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>

  );
}

export default Character;