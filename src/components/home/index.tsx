import Typography from '@components/shared/typography';
import { Flex } from 'antd';
import React, { FC } from 'react';

const HomeContent: FC = () => {
  return (
    <Flex>
      <Typography className="text-primary"> This is the home page</Typography>
    </Flex>
  );
};

export default HomeContent;
