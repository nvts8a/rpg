/* eslint-env browser */
import {Quality} from '../utils/QualitiesUtil';
import React, {ChangeEvent, MouseEvent, ReactNode} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Switch, Typography, Divider} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Techie from '@mui/icons-material/PsychologyTwoTone';
import Arcane from '@mui/icons-material/AutoFixHighTwoTone';
import Face from '@mui/icons-material/FaceRetouchingNaturalTwoTone';
import Samurai from '@mui/icons-material/SportsMmaTwoTone';
import Missing from '@mui/icons-material/HelpTwoTone';
import GameEffect from '@mui/icons-material/CasinoTwoTone';

const QualityAccordion: Function = (
  name: string,
  quality: Quality,
  expanded: string,
  isChecked: boolean,
  handleExpandChange: Function,
  onSwitchChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void) =>
{
  const weightDisplay: Function = (weights: Array<string>): ReactNode => {
    let weightIcons: ReactNode[] = [];
    weights.forEach(weight => {
      switch (weight) {
      case 'a': weightIcons.push(<Arcane  color="primary" key='arcane' />);   break;
      case 'f': weightIcons.push(<Face    color="primary" key='face' />);     break;
      case 's': weightIcons.push(<Samurai color="primary" key='samurai' />);  break;
      case 't': weightIcons.push(<Techie  color="primary" key='techie' />);   break;
      default:  weightIcons.push(<Missing color="secondary" key='missing' />);
      }
    })

    return (
      <Typography>
        {weightIcons}
      </Typography>
    );
  }

  const onSwitchClick = (event: MouseEvent<HTMLButtonElement>): void => { event.stopPropagation() }

  return (
    <Accordion key={name} expanded={expanded === name} onChange={handleExpandChange(name)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Switch
          size="small" value={name} checked={isChecked}
          onClick={onSwitchClick} onChange={onSwitchChange} />
        <Typography variant="button" sx={{ fontSize: '1em', minWidth: '50%', flexShrink: 1}}>
          {quality.label}
        </Typography>
        <Typography variant="overline" sx={{ minWidth: '25%', color: 'text.secondary' }}>
          {quality.positive ? -quality.value : quality.value} Points
        </Typography>
        <Typography variant="subtitle2">
          {weightDisplay(quality.weight)}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1" gutterBottom={true} >
          {quality.description}
        </Typography>
        <Divider role="presentation">
          <GameEffect />
        </Divider>
        <Typography variant="body2">
          {quality.gameEffect}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default QualityAccordion;