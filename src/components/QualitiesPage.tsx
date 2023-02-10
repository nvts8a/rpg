/* eslint-env browser */
import React, {ChangeEvent, FunctionComponent, ReactElement, ReactNode, useEffect, useState} from 'react';
import PageLayout from '../layouts/PageLayout';
import {qualityMap, Quality} from '../utils/QualitiesUtil';
import QualityAccordion from './QualityAccordion';
import {useLocalStorage} from '../utils/react-local-storage';
import {Stack, Box, Skeleton} from '@mui/material';
import PageHeader from './PageHeader';

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

  const skeletonAccordions: ReactElement =
    <Stack spacing={0.5}>
      <Skeleton variant="rectangular" width='100%' height={53} />
      <Skeleton variant="rectangular" width='100%' height={53} />
      <Skeleton variant="rectangular" width='100%' height={53} />
      <Skeleton variant="rectangular" width='100%' height={53} />
    </Stack>

  const generateAccordions = (positive: boolean): ReactNode[] => {
    if(qualityList.size == 0) return [skeletonAccordions];
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
    return accordions;
  }

  const listStyle = {
    width: '50%',
    padding: '10px'
  }

  return (
    <PageLayout>
      <Stack direction="row">
        <Box sx={listStyle}>
          <PageHeader title='Positive Qualities' />
          {generateAccordions(true)}
        </Box>
        <Box sx={listStyle}>
          <PageHeader title='Negative Qualities' />
          {generateAccordions(false)}
        </Box>
      </Stack>
    </PageLayout>);
}

export default QualitiesPage;