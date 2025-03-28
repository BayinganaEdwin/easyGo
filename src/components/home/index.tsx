import React from 'react';
import { Flex } from 'antd';
import Typography from '@components/shared/typography';

const HomeContent: React.FC = () => {
  return (
    <Flex className="h-screen bg-primaryBackground w-full">
      <Typography>This is the home page</Typography>
    </Flex>
  );
};

export default HomeContent;
