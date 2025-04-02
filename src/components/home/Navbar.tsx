import Typography from '@components/shared/typography';
import { TOKEN_NAME, USER_DATA } from '@utils/constants';
import { Flex, Menu, Popover } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FiBell } from 'react-icons/fi';

export const LoggedInUserLogo = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const userData = typeof window !== 'undefined' ? localStorage.getItem(USER_DATA) : null;
  const user = userData ? JSON.parse(userData) : null;

  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : 'U';

  const handleNavigation = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  const handleLogout = () => {
    localStorage.removeItem(USER_DATA);
    localStorage.removeItem(TOKEN_NAME);
    setOpen(false);
    router.push('/login');
  };

  const menuContent = (
    <Menu className="w-40 bg-transparent border-none">
      <Typography
        onClick={() => handleNavigation('/dashboard')}
        className="py-2 px-4 cursor-pointer hover:bg-secondaryBackground rounded-xl">
        Dashboard
      </Typography>
      <Typography
        onClick={() => handleNavigation('/dashboard')}
        className="py-2 px-4 cursor-pointer hover:bg-secondaryBackground rounded-xl">
        Profile
      </Typography>
      <Typography
        onClick={handleLogout}
        className="text-red-500 py-2 px-4 cursor-pointer hover:bg-red-100 rounded-xl">
        Logout
      </Typography>
    </Menu>
  );

  return (
    <>
      {!userData ? (
        <Typography className="text-black" onClick={() => router.push('/login')}>
          Log in
        </Typography>
      ) : (
        <Popover
          content={menuContent}
          trigger="click"
          open={open}
          onOpenChange={setOpen}
          placement="topRight"
          overlayInnerStyle={{
            backgroundColor: 'white',
            padding: 0,
            border: '0.5px solid #ffffff70',
          }}>
          <Flex
            align="center"
            justify="center"
            className="bg-primary w-8 h-8 rounded-full cursor-pointer">
            <Typography className="text-white">{userInitial}</Typography>
          </Flex>
        </Popover>
      )}
    </>
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
