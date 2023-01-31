/* eslint-env browser */
import {ChangeEvent, FunctionComponent, ReactNode} from 'react';
import {FormControl, InputLabel, Select, SelectChangeEvent, Slider, TextField} from '@mui/material';

type CharacterFieldProps = {
  children?: ReactNode,
  label: string,
  name?: string,
  value: any,
  setFunction: Function
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
const CharacterTextField: FunctionComponent<CharacterFieldProps> = (props: CharacterFieldProps) => {
  return (
    <TextField fullWidth id={props.name} label={props.label} defaultValue={props.value}
      onChange={(e: ChangeEvent<HTMLInputElement>): void => props.setFunction(e.target.value)} />
  );
}

const CharacterMultiLineTextField: FunctionComponent<CharacterFieldProps> = (props: CharacterFieldProps) => {
  return (
    <TextField fullWidth multiline rows={4} variant="filled"
      id={props.name} label={props.label} defaultValue={props.value}
      onChange={(e: ChangeEvent<HTMLInputElement>): void => props.setFunction(e.target.value)} />
  )
}

const CharacterSliderField: FunctionComponent<CharacterFieldProps> = (props: CharacterFieldProps) => {
  return (
    <Slider
      aria-label={props.label}
      defaultValue={Number.parseInt(props.value)}
      valueLabelDisplay="auto"
      step={10}
      marks
      min={10}
      max={110}
    />
  )
}

export {CharacterSelectField, CharacterTextField, CharacterMultiLineTextField, CharacterSliderField};