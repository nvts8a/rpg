/* eslint-env browser */

import React, {FunctionComponent, useEffect, useState} from 'react';
import PageLayout from '../layouts/PageLayout';
import PageHeader from './PageHeader';
import {skillMap} from '../utils/SkillsUtil';
import {Box} from '@mui/material';

const SkillsPage: FunctionComponent = () => {
  const [skillList, setSkillList] = useState(new Map());

  useEffect(() => {
    skillMap(setSkillList);
  }, []);

  return (
    <PageLayout>
      <PageHeader title='Skills' />
      <Box>{JSON.stringify(skillList)}</Box>
    </PageLayout>
  )
}

export default SkillsPage;