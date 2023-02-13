/* eslint-env browser */
import React, {ChangeEvent, FunctionComponent, ReactElement, ReactNode, useEffect, useState} from 'react';
import PageLayout from '../layouts/PageLayout';
import {qualityMap, Quality} from '../utils/QualitiesUtil';
import QualityAccordion, {RangeQualityAccordion} from './QualityAccordion';
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
    let total = 50;
    Object.keys(qualities).forEach(key => { // @ts-ignore
      if(qualities[key]) { total = total + (qualityList.get(key).value * qualities[key]) }
    });
    return total;
  };

  const handleExpandChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>, checked: boolean): void => { // @ts-ignore
    qualities[event.target.value] = 1 * checked;
    setQualities(qualities);
    props.setTotalKarma(calculateKarma());
  };

  const handleRangeChange = (quality: string, rank: number): void => { // @ts-ignore
    qualities[quality] = rank;
    setQualities(qualities);
    props.setTotalKarma(calculateKarma());
  };

  const skeletonAccordions: ReactElement =
    <Stack key='skeleton-stack' spacing={0.5}>
      <Skeleton key='skeleton-1' variant="rectangular" width='100%' height={53} />
      <Skeleton key='skeleton-2' variant="rectangular" width='100%' height={53} />
      <Skeleton key='skeleton-3' variant="rectangular" width='100%' height={53} />
      <Skeleton key='skeleton-4' variant="rectangular" width='100%' height={53} />
      <Skeleton key='skeleton-5' variant="rectangular" width='100%' height={53} />
      <Skeleton key='skeleton-6' variant="rectangular" width='100%' height={53} />
      <Skeleton key='skeleton-7' variant="rectangular" width='100%' height={53} />
      <Skeleton key='skeleton-8' variant="rectangular" width='100%' height={53} />
      <Skeleton key='skeleton-9' variant="rectangular" width='100%' height={53} />
    </Stack>

  const generateAccordions = (positive: boolean): ReactNode[] => {
    if(qualityList.size === 0) return [skeletonAccordions];
    let accordions: ReactNode[] = [];

    qualityList.forEach((quality: Quality, qualityName: string) => {
      if(quality.positive == positive) {
        if(quality.range) {
          accordions.push(
            <RangeQualityAccordion // @ts-ignore
              key={qualityName} name={qualityName} quality={quality} expanded={expanded} currentValue={qualities[qualityName]}
              handleExpandChange={handleExpandChange}
              handleSwitchChange={handleSwitchChange}
              handleRangeChange={handleRangeChange} />
          );
        } else {
          accordions.push(
            <QualityAccordion  // @ts-ignore
              key={qualityName} name={qualityName} quality={quality} expanded={expanded} isChecked={qualities[qualityName]}
              handleExpandChange={handleExpandChange}
              handleSwitchChange={handleSwitchChange} />
          );
        }
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