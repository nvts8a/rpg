/* eslint-env browser */
import {Quality} from '../utils/QualitiesUtil';
import React, {ChangeEvent, MouseEvent} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Switch, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const QualityAccordion: Function = (
  name: string,
  quality: Quality,
  expanded: string,
  isChecked: boolean,
  handleExpandChange: Function,
  onSwitchChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void) =>
{
  return (
    <Accordion key={name} expanded={expanded === name} onChange={handleExpandChange(name)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Switch value={name} checked={isChecked} onClick={(event: MouseEvent<HTMLButtonElement>): void => {event.stopPropagation()}} onChange={onSwitchChange} />
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          {quality.label}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>{quality.value} Points</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {quality.description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default QualityAccordion;