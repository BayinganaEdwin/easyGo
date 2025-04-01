import { Flex } from 'antd';
import React from 'react';
import Typography from '../typography';
import Image from '../image';
import formatNumber from '@utils/helpers/formatNumber';

type StatProps = {
  title: string;
  value: number;
  image: string;
};

const StatsCard = ({ item }: { item: StatProps }) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      className="p-3 md:w-[20vw] border border-neutral-200 bg-white rounded-xl">
      <Flex vertical gap={10} justify="space-between">
        <Typography>{item.title}</Typography>
        <Typography variant="subTitle">
          {formatNumber(item.value)} {item.title === 'Amount Spent' && 'RWF'}
        </Typography>
      </Flex>

      <Image src={item.image} alt={item.title} className="h-20 w-20 object-cover" />
    </Flex>
  );
};

export default StatsCard;
