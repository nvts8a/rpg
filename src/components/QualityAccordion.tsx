/* eslint-env browser */
import {Quality} from '../utils/QualitiesUtil';
import React, {ChangeEvent, FunctionComponent, MouseEvent, ReactNode, useState} from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Switch,
  Typography,
  Divider,
  Pagination
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Techie from '@mui/icons-material/PsychologyTwoTone';
import Arcane from '@mui/icons-material/AutoFixHighTwoTone';
import Face from '@mui/icons-material/FaceRetouchingNaturalTwoTone';
import Samurai from '@mui/icons-material/SportsMmaTwoTone';
import Missing from '@mui/icons-material/HelpTwoTone';
import GameEffect from '@mui/icons-material/CasinoTwoTone';

const onSwitchClick = (event: MouseEvent<HTMLButtonElement>): void => { event.stopPropagation() }

const weightDisplay: Function = (weights: Array<string>): ReactNode => {
  let weightIcons: ReactNode[] = [];
  weights.forEach(weight => {
    switch (weight) {
    case 'a': weightIcons.push(<Arcane  color="primary" key='arcane' />);   break;
    case 'f': weightIcons.push(<Face    color="primary" key='face' />);     break;
    case 's': weightIcons.push(<Samurai color="primary" key='samurai' />);  break;
    case 't': weightIcons.push(<Techie  color="primary" key='techie' />);   break;
    default:  weightIcons.push(<Missing color="secondary" key='missing' />); }
  })

  return (
    <Typography>
      {weightIcons}
    </Typography>
  );
}

type QualityAccordionProps = {
  name: string;
  quality: Quality;
  expanded: string;
  isChecked: number;
  handleExpandChange: Function;
  handleSwitchChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

const QualityAccordion: FunctionComponent<QualityAccordionProps> = (props: QualityAccordionProps) => {
  return (
    <Accordion expanded={props.expanded === props.name} onChange={props.handleExpandChange(props.name)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Switch
          size='small' value={props.name} checked={!!props.isChecked}
          onClick={onSwitchClick} onChange={props.handleSwitchChange} />
        <Typography variant='button' sx={{ fontSize: '1em', minWidth: '48%', paddingLeft: '2%'}}>
          {props.quality.label}
        </Typography>
        <Typography variant='overline' sx={{ minWidth: '25%', color: 'text.secondary' }}>
          {props.quality.positive ? -props.quality.value : props.quality.value} Points
        </Typography>
        <Typography variant='subtitle2'>
          {weightDisplay(props.quality.weight)}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant='body1' gutterBottom={true} >
          {props.quality.description}
        </Typography>
        <Divider role='presentation'>
          <GameEffect />
        </Divider>
        <Typography variant='body2'>
          {props.quality.gameEffect}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

type RangeQualityAccordionProps = {
  name: string;
  quality: Quality;
  expanded: string;
  currentValue: number;
  handleExpandChange: Function;
  handleSwitchChange: (event: ChangeEvent<HTMLInputElement>, value: boolean) => void;
  handleRangeChange: (quality: string, rank: number) => void;
}

const RangeQualityAccordion: FunctionComponent<RangeQualityAccordionProps> = (props: RangeQualityAccordionProps) => {
  const [rank, setRank] = useState(props.currentValue);
  const calculatePointValue = (): number => {
    let totalPoints = props.quality.value;
    if(rank > 1) totalPoints = props.quality.value * rank;
    if(props.quality.positive) totalPoints = -totalPoints;
    return totalPoints;
  }

  const setRange = (event: ChangeEvent<unknown>, newRank: number): void => {
    setRank(newRank);
    props.handleRangeChange(props.name, newRank)
  }

  const setSwitch = (event: ChangeEvent<HTMLInputElement>, value: boolean): void => {
    setRank(value ? 1 : 0);
    props.handleSwitchChange(event, value);
  }

  const rangeDisplay: Function = (range: number): ReactNode => {
    if (range) return (
      <Pagination
        count={range} defaultPage={rank} disabled={rank == 0}
        onChange={setRange} size='small' shape='rounded' color='primary'
        sx={{ justifyContent: 'center', display: 'flex'}} />
    );
  }

  return (
    <Accordion expanded={props.expanded === props.name} onChange={props.handleExpandChange(props.name)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Switch
          size='small' value={props.name} checked={rank > 0}
          onClick={onSwitchClick} onChange={setSwitch} />
        <Typography variant='button' sx={{ fontSize: '1em', minWidth: '48%', paddingLeft: '2%'}}>
          {props.quality.label} {(rank > 0 ? rank : '')}
        </Typography>
        <Typography variant='overline' sx={{ minWidth: '25%', color: 'text.secondary' }}>
          {calculatePointValue()} Points
        </Typography>
        <Typography variant='subtitle2'>
          {weightDisplay(props.quality.weight)}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component='div' gutterBottom={true}>
          {rangeDisplay(props.quality.range)}
        </Typography>
        <Typography variant='body1' gutterBottom={true} >
          {props.quality.description}
        </Typography>
        <Divider role='presentation'>
          <GameEffect />
        </Divider>
        <Typography variant='body2'>
          {props.quality.gameEffect}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default QualityAccordion;
export {QualityAccordion, RangeQualityAccordion}