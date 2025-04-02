import Typography from '@components/shared/typography';
import { Flex } from 'antd';
import React from 'react';
import { PiBellSimple } from 'react-icons/pi';
import StatsCard from '@components/shared/card/StatsCard';
import RevenueGraph from '@components/chart/revenueGraph';
import TopCustomersTable from './tables/TopCustomers';
import { LoggedInUserLogo } from '@components/home/Navbar';

const AnalyticsComponent = () => {
  const stats = [
    {
      title: 'Total Amount Spent',
      value: 95000,
      image:
        'https://png.pngtree.com/element_our/png/20181227/online-payment-icon-designed-creatively-and-simple-for-freshness-for-application-png_293646.jpg',
    },
    {
      title: 'Total Trips',
      value: 43,
      image:
        'https://image.similarpng.com/file/similarpng/original-picture/2021/09/Bus-logo-temokate-on-transparent-background-PNG.png',
    },
    // {
    //   title: 'Total Customers',
    //   value: 3018,
    //   image: 'https://iconape.com/wp-content/png_logo_vector/users.png',
    // },
    {
      title: 'Total Travel Hours',
      value: 135,
      image:
        'https://png.pngtree.com/png-vector/20230815/ourmid/pngtree-clock-icon-simple-flat-vector-png-image_9182653.png',
    },
  ];

  return (
    <Flex gap={20} className="flex-col w-full text-black px-2 pt-1">
      <Flex justify="space-between">
        <Flex className="rounded-2xl">
          <Typography variant="subTitle">Welcome back, Edwin 👋🏽</Typography>
        </Flex>

        <Flex gap={10} align="center" className="rounded-2xl cursor-pointer">
          <PiBellSimple size={24} />
          <LoggedInUserLogo />
        </Flex>
      </Flex>

      <Flex gap={10}>
        {stats.map((stat, index) => (
          <StatsCard key={index} item={stat} />
        ))}
      </Flex>

      <Flex vertical gap={5}>
        <Typography variant="subTitle">Amount Spent</Typography>

        <RevenueGraph />
      </Flex>

      <TopCustomersTable />
    </Flex>
  );
};

export default AnalyticsComponent;
