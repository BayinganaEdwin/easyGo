import Head from 'next/head';
import { Fragment, ReactElement, useState } from 'react';
import { NextPage } from 'next';
import AuthLayout from '@layouts/auth';
import Typography from '@components/shared/typography';
import { Flex, Button, Input } from 'antd';
import { HiUser, HiOutlineMail, HiOutlinePhone, HiOutlineLogout, HiArrowLeft } from 'react-icons/hi';
import { FiEdit, FiCheck } from 'react-icons/fi';
import { useRouter } from 'next/router';

const UserProfile: NextPage & { getLayout?: (page: ReactElement) => ReactElement } = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("@divine");
  const [email, setEmail] = useState("birasadivinelaura2@gmail.com");
  const [phone, setPhone] = useState("+250 123 456 789");
  const router = useRouter();

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleLogout = () => {
    console.log("User logged out");
    router.push("/login");
  };

  return (
    <Fragment>
      <Head>
        <title>User Profile | EasyGo</title>
      </Head>
      
      <Flex className="h-16 bg-white px-6 items-center shadow-md sticky top-0 z-10">
        <Button icon={<HiArrowLeft size={24} />} className="bg-transparent border-none" />
        <Typography variant="header" className="text-gray-900 text-lg font-semibold ml-4">
          Profile
        </Typography>
      </Flex>

      <Flex justify="center" className="h-screen bg-[#f5f5f5] p-6 flex-col items-center">
        <Flex className="w-full max-w-lg bg-white p-6 rounded-3xl shadow-lg relative mt-6 flex-col items-center">
          {isEditing ? (
            <Input value={username} onChange={(e) => setUsername(e.target.value)} className="mb-2 text-center" />
          ) : (
            <Typography variant="header" className="text-gray-900 text-2xl font-bold">
              {username}
            </Typography>
          )}
          
          {isEditing ? (
            <Input value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2 text-center" />
          ) : (
            <Typography variant="subTitle" className="text-gray-500 text-lg">
              {email}
            </Typography>
          )}

          {isEditing ? (
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} className="mb-4 text-center" />
          ) : (
            <Typography className="text-gray-600 text-base mt-2">
              {phone}
            </Typography>
          )}

          <Button 
            icon={isEditing ? <FiCheck size={20} /> : <FiEdit size={20} />} 
            className={`mt-4 ${isEditing ? 'bg-green-500 hover:bg-green-600' : 'bg-indigo-500 hover:bg-indigo-600'} text-white px-6 py-2 rounded-full`} 
            onClick={handleEditClick}
          >
            {isEditing ? 'Save' : 'Edit Profile'}
          </Button>
          
          <Flex className="w-full bg-indigo-100 p-4 rounded-lg mt-6">
            <Typography className="text-gray-800">
              <strong>Route:</strong> Kigali - Musanze <br />
              <strong>Date:</strong> 24th March 2025 <br />
              <strong>Ticket ID:</strong> #123456
            </Typography>
          </Flex>
          
          <Button 
            icon={<HiOutlineLogout size={24} />} 
            className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Flex>
      </Flex>
    </Fragment>
  );
};

UserProfile.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default UserProfile;
