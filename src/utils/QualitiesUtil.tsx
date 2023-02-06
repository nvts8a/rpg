import {ToggleButton} from '@mui/material';
import {ReactNode} from 'react';
import {Psychology, Coronavirus, Vaccines, SignLanguage} from '@mui/icons-material';

interface Quality {
  name: string
  value: number,
  Button: ReactNode
}

class QualitiesUtil {
  static Ambidextrous: Quality = {
    name: 'ambidextrous',
    value: 4,
    Button: <ToggleButton value='ambidextrous'><SignLanguage /></ToggleButton>
  }

  static AnalyticalMind: Quality = {
    name: 'analytical-mind',
    value: 3,
    Button: <ToggleButton value='analytical-mind'><Psychology /></ToggleButton>
  }

  static positiveQualities: Quality[] = [
    this.Ambidextrous,
    this.AnalyticalMind
  ]

  static positiveQualityMap: Function = () => {
    let map = new Map<string, Quality>();
    this.positiveQualities.forEach((quality: Quality) => map.set(quality.name, quality));
    return map;
  }

  static Addiction: Quality = {
    name: 'addiction',
    value: 2,
    Button: <ToggleButton value='addiction'><Vaccines /></ToggleButton>
  }

  static Allergy: Quality = {
    name: 'allergy',
    value: 2,
    Button: <ToggleButton value='allergy'><Coronavirus /></ToggleButton>
  }

  static negativeQualities: Quality[] = [
    this.Addiction,
    this.Allergy
  ]

  static negativeQualityMap: Function = () => {
    let map = new Map<string, Quality>();
    this.negativeQualities.forEach((quality: Quality) => map.set(quality.name, quality));
    return map;
  }
}

export default QualitiesUtil;