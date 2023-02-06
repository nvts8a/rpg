/* eslint-env browser */
import {FunctionComponent, MouseEvent} from 'react';
import {Box, ToggleButton, ToggleButtonGroup, Tooltip} from '@mui/material';
import {useLocalStorage} from '../utils/react-local-storage';
import QualitiesUtil, {Quality} from '../utils/QualitiesUtil';

const QualityButton: Function = (quality: Quality) => {
  return (
    <ToggleButton value={quality.name}>
      <Tooltip title={quality.tooltip}>
        <Box>
          <span>{quality.icon}</span>
          <span>{quality.label}</span>
        </Box>
      </Tooltip>
    </ToggleButton>
  );
}

const Qualities: FunctionComponent = () => {
  const [totalKarma, setTotalKarma] = useLocalStorage('q.total-karma', 50);
  const [positiveQualities, setPositiveQualities] = useLocalStorage('q.positive-qualities', []);
  const handlePositiveChange = (event: MouseEvent<HTMLElement>, newQualities: string[]): void => {
    setPositiveQualities(newQualities);
    setTotalKarma(calculateKarma(newQualities, negativeQualities));
  };

  const [negativeQualities, setNegativeQualities] = useLocalStorage('q.negative-qualities', []);
  const handleNegativeChange = (event: MouseEvent<HTMLElement>, newQualities: string[]): void => {
    setNegativeQualities(newQualities);
    setTotalKarma(calculateKarma(positiveQualities, newQualities));
  };

  const calculateKarma: Function = (newPositiveQualities: string[], newNegativeQualities: string[]): number => {
    let total = 50;

    // eslint-disable-next-line no-console
    newPositiveQualities.forEach((quality: string) => {
      total = total - QualitiesUtil.positiveQualityMap().get(quality).value;
    })

    // eslint-disable-next-line no-console
    newNegativeQualities.forEach((quality: string) => {
      total = total + QualitiesUtil.negativeQualityMap().get(quality).value;
    })

    return total;
  };

  return (
    <Box>
      {totalKarma}
      <ToggleButtonGroup
        orientation="vertical"
        value={positiveQualities}
        onChange={handlePositiveChange}>
        { QualityButton(QualitiesUtil.Ambidextrous) }
        { QualityButton(QualitiesUtil.AnalyticalMind) }
      </ToggleButtonGroup>
      <ToggleButtonGroup
        orientation="vertical"
        value={negativeQualities}
        onChange={handleNegativeChange}>
        { QualityButton(QualitiesUtil.Addiction) }
        { QualityButton(QualitiesUtil.Allergy) }
      </ToggleButtonGroup>
    </Box>
  );
}
export default Qualities;