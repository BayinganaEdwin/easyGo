import Head from 'next/head';
import { Fragment, ReactElement, useState } from 'react';
import { NextPage } from 'next';
import AuthLayout from '@layouts/auth';
import Typography from '@components/shared/typography';
import { Flex, Button, Input } from 'antd';
import { HiArrowLeft, HiOutlineLogout, HiTicket } from 'react-icons/hi';
import { FiEdit, FiCheck } from 'react-icons/fi';
import { useRouter } from 'next/router';

const SettingsPage: NextPage & { getLayout?: (page: ReactElement) => ReactElement } = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("@divine");
  const [email, setEmail] = useState("birasadivinelaura2@gmail.com");
  const [phone, setPhone] = useState("+250 123 456 789");
  const [activeTab, setActiveTab] = useState<'profile' | 'tickets'>('profile');
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
        <title>Settings | EasyGo</title>
      </Head>
      
      <Flex className="h-16 bg-white px-6 items-center shadow-md sticky top-0 z-10">
        <Button icon={<HiArrowLeft size={24} />} className="bg-transparent border-none" />
        <Typography variant="header" className="text-gray-900 text-lg font-semibold ml-4">
          Settings
        </Typography>
      </Flex>

      <Flex className="min-h-screen bg-[#f5f5f5] p-4 flex-col">
        <Flex className="w-full bg-white p-6 rounded-xl shadow-lg mt-2 flex-col">
        
          <Flex className="w-full  mb-6 gap-4">
             <Flex onClick={() => setActiveTab('profile')}>
          <Typography 
              className={`px-6 py-2  text-lg font-semibold ${activeTab === 'profile' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
              Profile 
            </Typography>
          </Flex>
               <Flex onClick={() => setActiveTab('tickets')}>
               <Typography 
              className={`px-6 py-2  text-lg font-semibold ${activeTab === 'tickets' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-600'}`} 
              >
              My Tickets
            </Typography>
               </Flex>
          </Flex>
          
          
          {activeTab === 'profile' && (
            <Flex className="w-full flex-col gap-8">
              <Typography variant="header" className="text-indigo-500 font-bold text-2xl mb-6">
                Profile
              </Typography>
              {isEditing ? (
                <Input value={username} onChange={(e) => setUsername(e.target.value)} className="mb-4 text-left text-2xl font-bold w-full" />
              ) : (
                <Typography variant="header" className="text-gray-900 text-3xl font-bold mb-4">
                  {username}
                </Typography>
              )}
              {isEditing ? (
                <Input value={email} onChange={(e) => setEmail(e.target.value)} className="mb-4 text-left text-xl w-full" />
              ) : (
                <Typography variant="subTitle" className="text-gray-500 text-xl mb-3">
                  {email}
                </Typography>
              )}
              {isEditing ? (
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} className="mb-6 text-left text-xl w-full" />
              ) : (
                <Typography className="text-gray-600 text-lg mb-6">
                  {phone}
                </Typography>
              )}
              <Flex className="mt-2 gap-4">
                <Button 
                  icon={isEditing ? <FiCheck size={20} /> : <FiEdit size={20} />} 
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full"
                  onClick={handleEditClick}
                >
                  {isEditing ? 'Save' : 'Edit Profile'}
                </Button>
                <Button 
                  icon={<HiOutlineLogout size={20} />} 
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Flex>
            </Flex>
          )}

          {/* My Tickets Section */}
          {activeTab === 'tickets' && (
            <Flex className="flex-col w-full">
              <Typography variant="header" className="text-indigo-500 font-bold text-2xl mb-6">
                My Tickets
              </Typography>
              <Flex className="w-full bg-indigo-100 p-8 rounded-lg text-lg shadow-md">
                <Typography className="text-gray-800">
                  <strong>Route:</strong> Kigali - Musanze <br />
                  <strong>Date:</strong> 24th March 2025 <br />
                  <strong>Ticket ID:</strong> #123456
                </Typography>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Fragment>
  );
};

SettingsPage.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default SettingsPage;
