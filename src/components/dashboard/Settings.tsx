import { Fragment, useState } from 'react';
import Typography from '@components/shared/typography';
import { Flex, Input, Modal, message, Tabs } from 'antd';
import { FiEdit } from 'react-icons/fi';
import { BsShieldLock } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { TOKEN_NAME, USER_DATA } from '@utils/constants';
import Button from '@components/shared/button';

const { TabPane } = Tabs;

const SettingsComponent = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('@divine');
  const [email, setEmail] = useState<string>('birasadivinelaura2@gmail.com');
  const [phone, setPhone] = useState<string>('+250 123 456 789');
  const router = useRouter();

  const [isChangePasswordVisible, setIsChangePasswordVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_NAME);
    localStorage.removeItem(USER_DATA);
    router.push('/login');
  };

  const showChangePasswordModal = () => {
    setIsChangePasswordVisible(true);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setPasswordError('');
  };

  const handleChangePasswordCancel = () => {
    setIsChangePasswordVisible(false);
  };

  const handleChangePassword = () => {
    if (!currentPassword) {
      setPasswordError('Current password is required');
      return;
    }

    if (!newPassword) {
      setPasswordError('New password is required');
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords don't match");
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }

    message.success('Password changed successfully');
    setIsChangePasswordVisible(false);
  };

  return (
    <Fragment>
      <Flex className="bg-white w-full rounded-xl text-gray-800">
        <Flex className="w-full p-5">
          <Tabs tabPosition="top" defaultActiveKey="account" className="w-full">
            <TabPane
              tab={
                <Flex className="items-center">
                  <Flex className="w-8 h-8 rounded-full bg-indigo-100 items-center justify-center mr-3">
                    <FiEdit size={16} className="text-gray-500" />
                  </Flex>
                  <Typography className="font-medium">Account</Typography>
                </Flex>
              }
              key="account">
              <Flex className="flex-col w-full max-w-3xl">
                <Typography variant="header" className="text-gray-800 font-bold text-3xl mb-6">
                  Account
                </Typography>
                <Flex className="bg-white rounded-lg p-6 mb-6 flex-col shadow-sm border border-gray-200">
                  <Flex className="justify-between items-center mb-4">
                    <Typography variant="header" className="text-gray-800 font-semibold text-xl">
                      Edit Account
                    </Typography>
                    <Flex className="gap-4 justify-between items-center">
                      <Button
                        className={`${isEditing ? 'text-white' : ''} rounded-md px-4`}
                        onClick={handleEditClick}>
                        {isEditing ? 'Save' : 'Edit'}
                      </Button>
                    </Flex>
                  </Flex>
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
            </TabPane>

            <TabPane
              tab={
                <Flex className="items-center">
                  <Flex className="w-8 h-8 rounded-full bg-indigo-100 items-center justify-center mr-3">
                    <BsShieldLock size={16} className="text-gray-500" />
                  </Flex>
                  <Typography className="font-medium">Security</Typography>
                </Flex>
              }
              key="security">
              <Flex className="flex-col w-full max-w-3xl">
                <Typography variant="header" className="text-gray-800 font-bold text-3xl mb-6">
                  Security
                </Typography>
                <Flex className="bg-white rounded-lg p-6 flex-col shadow-sm border border-gray-200">
                  <Typography variant="header" className="text-gray-800 font-semibold text-xl mb-4">
                    Password
                  </Typography>
                  <Button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white w-40 rounded-md"
                    onClick={showChangePasswordModal}>
                    Change Password
                  </Button>
                </Flex>
              </Flex>
            </TabPane>

            {/* <TabPane
              tab={
                <Flex className="items-center">
                  <Flex className="w-8 h-8 rounded-full bg-indigo-100 items-center justify-center mr-3">
                    <HiTicket size={16} className="text-gray-500" />
                  </Flex>
                  <Typography className="font-medium">My Tickets</Typography>
                </Flex>
              }
              key="tickets">
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
            </TabPane> */}
          </Tabs>
        </Flex>
      </Flex>

      {/* Change Password Modal */}
      <Modal
        title="Change Password"
        open={isChangePasswordVisible}
        onCancel={handleChangePasswordCancel}
        footer={[
          <Button key="cancel" onClick={handleChangePasswordCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleChangePassword}>
            Change Password
          </Button>,
        ]}>
        <Flex className="flex-col gap-4 mt-4">
          {passwordError && (
            <div className="bg-red-100 text-red-700 p-2 rounded mb-2">{passwordError}</div>
          )}
          <Flex className="flex-col">
            <Typography className="text-gray-600 mb-1">Current Password</Typography>
            <Input.Password
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter your current password"
            />
          </Flex>
          <Flex className="flex-col">
            <Typography className="text-gray-600 mb-1">New Password</Typography>
            <Input.Password
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
            />
          </Flex>
          <Flex className="flex-col">
            <Typography className="text-gray-600 mb-1">Confirm New Password</Typography>
            <Input.Password
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your new password"
            />
          </Flex>
        </Flex>
      </Modal>
    </Fragment>
  );
};

export default SettingsComponent;
