/* eslint-env browser */

import React, {FunctionComponent, ReactElement, ReactNode, useEffect, useState} from 'react';
import PageLayout from '../layouts/PageLayout';
import PageHeader from './PageHeader';
import {skillMap, Skill} from '../utils/SkillsUtil';
import {Box, Skeleton, Stack, Typography} from '@mui/material';

const SkillsPage: FunctionComponent = () => {
  const [skillList, setSkillList] = useState(new Map());

  useEffect(() => {
    skillMap(setSkillList);
  }, []);

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

  const generateAccordions = (): ReactNode[] => {
    if(skillList.size === 0) return [skeletonAccordions];
    let accordions: ReactNode[] = [];

    skillList.forEach((skill: Skill, skillName: string) => {
      accordions.push(
        <Box key={skillName}>
          <Typography>{skill.label}</Typography>
          <Typography>{skill.description}</Typography>
          <Typography>{JSON.stringify(skill.specializations)}</Typography>
        </Box>);
    });
    return accordions;
  }

  return (
    <PageLayout>
      <PageHeader title='Skills' />
      {generateAccordions()}
    </PageLayout>
  )
}

export default SkillsPage;