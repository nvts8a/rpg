/* eslint-env browser */
import React, {ChangeEvent, FunctionComponent, ReactNode} from 'react';
import PageLayout from '../layouts/PageLayout';
import QualitiesUtil from '../utils/QualitiesUtil';
import QualityAccordion from './QualityAccordion';
import {useLocalStorage} from '../utils/react-local-storage';

type QualitiesPageProps = {
  setTotalKarma: Function
}

const QualitiesPage: FunctionComponent<QualitiesPageProps> = (props) => {
  const [qualities, setQualities] = useLocalStorage('q.qualities', {});
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const calculateKarma: Function = (): number => {
    let total = 50; // @ts-ignore
    Object.keys(qualities).forEach(key => { if(qualities[key]) total = total + QualitiesUtil.qualityMap().get(key).value });
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
    QualitiesUtil.qualities.forEach(quality => { // @ts-ignore
      accordions.push(QualityAccordion(quality, expanded, qualities[quality.name], handleExpandChange, handleSwitchChange));
    });
    return accordions
  }

  return (
    <PageLayout>
      {generateAccordions()}
    </PageLayout>);
}

export default QualitiesPage;