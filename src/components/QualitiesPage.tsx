/* eslint-env browser */
import React, {ChangeEvent, FunctionComponent, ReactNode, useEffect, useState} from 'react';
import PageLayout from '../layouts/PageLayout';
import {qualityMap, Quality} from '../utils/QualitiesUtil';
import QualityAccordion from './QualityAccordion';
import {useLocalStorage} from '../utils/react-local-storage';

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

  const generateAccordions = (): ReactNode[] => {
    let accordions: ReactNode[] = [];
    qualityList.forEach((quality: Quality, qualityName: string) => { // @ts-ignore
      accordions.push(QualityAccordion(qualityName, quality, expanded, qualities[qualityName], handleExpandChange, handleSwitchChange));
    });
    return accordions
  }

  return (
    <PageLayout>
      {generateAccordions()}
    </PageLayout>);
}

export default QualitiesPage;