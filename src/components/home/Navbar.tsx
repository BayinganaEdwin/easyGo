import Typography from '@components/shared/typography';
import { Flex } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { FiBell } from 'react-icons/fi';

const LoggedInUserLogo = () => {
  const router = useRouter();
  const handleDashboardNavigation = () => {
    router.push('/dashboard');
  };
  return (
    <Flex
      align="center"
      justify="center"
      className="bg-primary w-8 h-8 rounded-full"
      onClick={handleDashboardNavigation}>
      <Typography className="text-white">E</Typography>
    </Flex>
  );
};

const Navbar = () => {
  return (
    <Flex vertical justify="space-between">
      <Flex justify="space-between">
        <Typography variant="title">easyGo.</Typography>
        <Flex gap={20} align="center" className="cursor-pointer">
          <FiBell size={22} className="text-neutral-700" />
          <LoggedInUserLogo />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
