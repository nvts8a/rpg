import {FunctionComponent, ReactElement, ReactNode, SyntheticEvent} from 'react';
import {useLocalStorage} from './react-local-storage';
import {Box, Tab, Tabs, Typography} from '@mui/material';
import PersonalData from './PersonalData';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps): ReactElement {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number): any {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Character: FunctionComponent = () => {
  const [value, setValue] = useLocalStorage('currentTab', 0);

  const handleChange = (event: SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, minWidth: '12%', borderColor: 'divider' }}
      >
        <Tab label="Personal Data" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PersonalData />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
  /*

  const handleChange = (e: SyntheticEvent, newValue: string): void => {
    setValue(newValue);
  };

   *     <Box sx={{ typography: 'body1' }}>
   *       <TabContext value={value}>
   *         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
   *           <TabList orientation="vertical" onChange={handleChange} aria-label="lab API tabs example">
   *             <Tab aria-orientation="vertical" id="vertical-tab-personal-data" label="Personal Data" value="personal-data" />
   *             <Tab label="Item Two" value="2" />
   *             <Tab label="Item Three" value="3" />
   *           </TabList>
   *         </Box>
   *         <TabPanel id="vertical-tabpanel-personal-data" value="personal-data"><PersonalData/></TabPanel>
   *         <TabPanel value="2">Item Two</TabPanel>
   *         <TabPanel value="3">Item Three</TabPanel>
   *       </TabContext>
   *     </Box>
   */
}

export default Character;