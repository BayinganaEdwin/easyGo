import Head from 'next/head';
import { Fragment, ReactElement, useState } from 'react';
import { NextPage } from 'next';
import AuthLayout from '@layouts/auth';
import Typography from '@components/shared/typography';
import { Flex, Button, Input, Checkbox, Divider } from 'antd';
import { HiArrowLeft, HiOutlineLogout, HiTicket, HiHome } from 'react-icons/hi';
import { FiEdit, FiCheck } from 'react-icons/fi';
import { BsShieldLock, BsGear } from 'react-icons/bs';
import { useRouter } from 'next/router';

const SettingsPage: NextPage & { getLayout?: (page: ReactElement) => ReactElement } = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("@divine");
  const [email, setEmail] = useState("birasadivinelaura2@gmail.com");
  const [phone, setPhone] = useState("+250 123 456 789");
  const [activeSection, setActiveSection] = useState<'account' | 'security' | 'preferences' | 'tickets'>('account');
  const [confirmDelete, setConfirmDelete] = useState(false);
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
      
      <Flex className="min-h-screen bg-gray-50 text-gray-800">
        {/* Header */}
        <Flex className="fixed top-0 left-0 right-0 h-16 bg-white px-6 items-center z-20 border-b border-gray-200 shadow-sm">
          <Button 
            icon={<HiHome size={20} />} 
            className="bg-transparent border-none text-gray-600 hover:text-gray-900"
            onClick={() => router.push('/')}
          />
          <Typography className="text-gray-500 text-sm mx-2">/</Typography>
          <Typography className="text-gray-800 text-lg font-medium">
            Settings
          </Typography>
        </Flex>

        {/* Main Content */}
        <Flex className="w-full pt-16">
          {/* Sidebar */}
          <Flex className="w-64 bg-white min-h-screen flex-col pt-8 fixed left-0 border-r border-gray-200">
            <Typography variant="header" className="text-gray-800 font-bold text-2xl px-6 mb-8">
              User Settings
            </Typography>

            <Flex 
              className={`px-6 py-3 mb-1 flex items-center cursor-pointer ${activeSection === 'account' ? 'bg-indigo-50 text-indigo-600 border-r-4 border-indigo-500' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveSection('account')}
            >
              <Flex className="w-8 h-8 rounded-full bg-indigo-100 items-center justify-center mr-3">
                <FiEdit size={16} className={activeSection === 'account' ? 'text-indigo-600' : 'text-gray-500'} />
              </Flex>
              <Typography className="font-medium">Account</Typography>
            </Flex>

            <Flex 
              className={`px-6 py-3 mb-1 flex items-center cursor-pointer ${activeSection === 'security' ? 'bg-indigo-50 text-indigo-600 border-r-4 border-indigo-500' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveSection('security')}
            >
              <Flex className="w-8 h-8 rounded-full bg-indigo-100 items-center justify-center mr-3">
                <BsShieldLock size={16} className={activeSection === 'security' ? 'text-indigo-600' : 'text-gray-500'} />
              </Flex>
              <Typography className="font-medium">Security</Typography>
            </Flex>

            <Flex 
              className={`px-6 py-3 mb-1 flex items-center cursor-pointer ${activeSection === 'tickets' ? 'bg-indigo-50 text-indigo-600 border-r-4 border-indigo-500' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveSection('tickets')}
            >
              <Flex className="w-8 h-8 rounded-full bg-indigo-100 items-center justify-center mr-3">
                <HiTicket size={16} className={activeSection === 'tickets' ? 'text-indigo-600' : 'text-gray-500'} />
              </Flex>
              <Typography className="font-medium">My Tickets</Typography>
            </Flex>
          </Flex>

          {/* Main Content Area */}
          <Flex className="ml-64 p-8 flex-col flex-1">
            {activeSection === 'account' && (
              <Flex className="flex-col w-full max-w-3xl">
                <Typography variant="header" className="text-gray-800 font-bold text-3xl mb-6">
                  Account
                </Typography>

                <Flex className="bg-white rounded-lg p-6 mb-6 flex-col shadow-sm border border-gray-200">
                  <Flex className="justify-between items-center mb-4">
                    <Typography variant="header" className="text-gray-800 font-semibold text-xl">
                      Edit Account
                    </Typography>
                    <Flex className='gap-4 justify-between items-center'>
                      <Button 
                        className={`${isEditing ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} ${isEditing ? 'text-white' : ''} rounded-md px-4`}
                        onClick={handleEditClick}
                      >
                        {isEditing ? 'Save' : 'Edit'}
                      </Button>
                      <Button 
                        className="bg-red-500 hover:bg-red-600 text-white rounded-md"
                        disabled={!confirmDelete}
                      >
                        Log Out
                      </Button>
                    </Flex>
                  </Flex>
                  
                  <Typography className="text-gray-500 mb-4">
                    You can temporary pause your account from being viewable, this action can be undone anytime
                  </Typography>

                  <Flex className="flex-col gap-4 mt-2">
                    <Flex className="flex-col">
                      <Typography className="text-gray-600 mb-1">Username</Typography>
                      {isEditing ? (
                        <Input 
                          value={username} 
                          onChange={(e) => setUsername(e.target.value)} 
                          className="border-gray-300"
                        />
                      ) : (
                        <Typography className="text-gray-800 text-lg">{username}</Typography>
                      )}
                    </Flex>
                    
                    <Flex className="flex-col">
                      <Typography className="text-gray-600 mb-1">Email</Typography>
                      {isEditing ? (
                        <Input 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          className="border-gray-300"
                        />
                      ) : (
                        <Typography className="text-gray-800 text-lg">{email}</Typography>
                      )}
                    </Flex>
                    
                    <Flex className="flex-col">
                      <Typography className="text-gray-600 mb-1">Phone</Typography>
                      {isEditing ? (
                        <Input 
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)} 
                          className="border-gray-300"
                        />
                      ) : (
                        <Typography className="text-gray-800 text-lg">{phone}</Typography>
                      )}
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            )}

            {activeSection === 'security' && (
              <Flex className="flex-col w-full max-w-3xl">
                <Typography variant="header" className="text-gray-800 font-bold text-3xl mb-6">
                  Security
                </Typography>
                
                <Flex className="bg-white rounded-lg p-6 flex-col shadow-sm border border-gray-200">
                  <Typography variant="header" className="text-gray-800 font-semibold text-xl mb-4">
                    Password
                  </Typography>
                  
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white w-40 rounded-md">
                    Change Password
                  </Button>
                </Flex>
              </Flex>
            )}

            
            {activeSection === 'tickets' && (
              <Flex className="flex-col w-full max-w-3xl">
                <Typography variant="header" className="text-gray-800 font-bold text-3xl mb-6">
                  My Tickets
                </Typography>
                
                <Flex className="bg-white rounded-lg p-6 flex-col shadow-sm border border-gray-200">
                  <Flex className="w-full p-4 border border-gray-200 rounded-lg mb-4 hover:bg-gray-50 cursor-pointer">
                    <Typography className="text-gray-700">
                      <strong>Route:</strong> Kigali - Musanze <br />
                      <strong>Date:</strong> 24th March 2025 <br />
                      <strong>Ticket ID:</strong> #123456
                    </Typography>
                  </Flex>
                  
                  <Flex className="w-full p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <Typography className="text-gray-700">
                      <strong>Route:</strong> Kigali - Huye <br />
                      <strong>Date:</strong> 28th March 2025 <br />
                      <strong>Ticket ID:</strong> #123789
                    </Typography>
                  </Flex>
                </Flex>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Fragment>
  );
};

SettingsPage.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default SettingsPage;