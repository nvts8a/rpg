/* eslint-env browser */
import React, {ChangeEvent, FunctionComponent, ReactNode, useEffect, useState} from 'react';
import PageLayout from '../layouts/PageLayout';
import {qualityMap, Quality} from '../utils/QualitiesUtil';
import QualityAccordion from './QualityAccordion';
import {useLocalStorage} from '../utils/react-local-storage';
import {Stack, Typography, Box} from '@mui/material';

type QualitiesPageProps = {
  setTotalKarma: Function
}

const QualitiesPage: FunctionComponent<QualitiesPageProps> = (props) => {
  const [qualities, setQualities] = useLocalStorage('q.qualities', {});
  const [expanded, setExpanded] = useState<string | false>(false);
  const [qualityList, setQualityList] = useState(new Map());

  useEffect(() => {
    qualityMap(setQualityList);
  }, []);

  const calculateKarma: Function = (): number => {
    let total = 50; // @ts-ignore
    Object.keys(qualities).forEach(key => { if(qualities[key]) total = total + qualityList.get(key).value });
    return total;
  };

  const handleExpandChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean): void => { // @ts-ignore
    qualities[event.target.value] = checked;
    setQualities(qualities);
    props.setTotalKarma(calculateKarma());
  };

  const generateAccordions = (positive: boolean): ReactNode[] => {
    let accordions: ReactNode[] = [];
    qualityList.forEach((quality: Quality, qualityName: string) => {
      if(quality.positive == positive) {
        accordions.push(
          QualityAccordion( // @ts-ignore
            qualityName, quality, expanded, qualities[qualityName],
            handleExpandChange, handleSwitchChange)
        );
      }
    });
    return accordions
  }

  return (
    <PageLayout>
      <Stack direction="row" spacing={5}>
        <Box sx={{ width: '47%' }}>
          <Typography component='div' variant='button' align='center' gutterBottom={true} sx={{ fontSize: '1.5em'}}>Positive Qualities</Typography>
          {generateAccordions(true)}
        </Box>
        <Box sx={{ width: '47%' }}>
          <Typography component='div' variant='button' align='center' gutterBottom={true} sx={{ fontSize: '1.5em'}}>Negative Qualities</Typography>
          {generateAccordions(false)}
        </Box>
      </Stack>
    </PageLayout>);
}

export default QualitiesPage;