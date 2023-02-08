/* eslint-env browser */
import React, {ChangeEvent, FunctionComponent, MouseEvent, ReactNode} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Switch, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QualitiesUtil, {Quality} from '../utils/QualitiesUtil';
import {useLocalStorage} from '../utils/react-local-storage';

const QualityAccordion: Function = (
  quality: Quality,
  expanded: string,
  isChecked: boolean,
  handleChange: Function,
  onSwitchChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void) =>
{
  return (
    <Accordion key={quality.name} expanded={expanded === quality.name} onChange={handleChange(quality.name)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Switch value={quality.name} checked={isChecked} onClick={(event: MouseEvent<HTMLButtonElement>) => {event.stopPropagation()}} onChange={onSwitchChange} />
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          {quality.label}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>{quality.value} Points</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {quality.tooltip}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

const Qualities: FunctionComponent = () => {
  const [totalKarma, setTotalKarma] = useLocalStorage('q.total-karma', 50);
  const [qualities, setQualities] = useLocalStorage('q.qualities', {});
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const onSwitchChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean): void => {
    // @ts-ignore
    qualities[event.target.value] = checked;
    setQualities(qualities);
    setTotalKarma(calculateKarma());
  };

  const calculateKarma: Function = (): number => {
    let total = 50;
    // @ts-ignore
    Object.keys(qualities).forEach(key => { if(qualities[key]) total = total + QualitiesUtil.qualityMap().get(key).value });

    return total;
  };


  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const generateAccordions = (): ReactNode[] => {
    let accordions: ReactNode[] = [];

    QualitiesUtil.qualities.forEach(quality => {
      // @ts-ignore
      accordions.push(QualityAccordion(quality, expanded, qualities[quality.name], handleChange, onSwitchChange));
    })

    return accordions
  }

  return (
    <div>
      <Box sx={{width: '100%', textAlign: 'center'}}>{totalKarma}</Box>
      {generateAccordions()}
    </div>);
}

export default Qualities;