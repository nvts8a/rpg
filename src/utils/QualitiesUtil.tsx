import {ReactElement} from 'react';
import {Psychology, Coronavirus, Vaccines, SignLanguage} from '@mui/icons-material';

interface Quality {
  name: string,
  label: string,
  value: number,
  icon: ReactElement,
  tooltip: string
}

class QualitiesUtil {
  static Ambidextrous: Quality = {
    name: 'ambidextrous',
    label: 'Ambidextrous',
    value: 4,
    icon: <SignLanguage />,
    tooltip: 'You are equally adept at using either your right ' +
      'or left side. Whether shooting a gun, throwing a ' +
      'grenade, or kicking a ball, you can switch it up ' +
      'with the best of them.'
  }

  static AnalyticalMind: Quality = {
    name: 'analytical-mind',
    label: 'Analytical Mind',
    value: 3,
    icon: <Psychology />,
    tooltip: 'You are a master problem solver. You can ' +
      'analyze information to help deduce solutions, ' +
      'while separating useful bits from the distractions ' +
      'and noise.'
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
    label: 'Addiction',
    value: 2,
    icon: <Vaccines />,
    tooltip: 'Some habits just can’t be kicked. It might be ' +
      'as simple as a need for a drag off that nic-stick to ' +
      'cool your nerves, or as life-twisting as a need for ' +
      'something better-than-life, but whatever it is, it’s ' +
      'got a firm grip on you.'
  }

  static Allergy: Quality = {
    name: 'allergy',
    label: 'Allergy',
    value: 2,
    icon: <Coronavirus />,
    tooltip: 'Maybe it’s a runny nose and poorly timed ' +
      'sneezes from pollen, or a full-blown anaphylactic ' +
      'reaction from some of those rare natural peanuts. ' +
      'Whatever it is, you suffer some level of discomfort ' +
      'from a substance found in the Sixth World.'
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
export type { Quality };