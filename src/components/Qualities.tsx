/* eslint-env browser */
import {FunctionComponent, MouseEvent} from 'react';
import {Box, ToggleButtonGroup} from '@mui/material';
import {useLocalStorage} from '../utils/react-local-storage';
import QualitiesUtil from '../utils/QualitiesUtil';

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
        value={positiveQualities}
        onChange={handlePositiveChange}>
        {QualitiesUtil.Ambidextrous.Button}
        {QualitiesUtil.AnalyticalMind.Button}
      </ToggleButtonGroup>
      <ToggleButtonGroup
        value={negativeQualities}
        onChange={handleNegativeChange}>
        {QualitiesUtil.Addiction.Button}
        {QualitiesUtil.Allergy.Button}
      </ToggleButtonGroup>
    </Box>
  );
}
export default Qualities;