import { Fragment, useEffect, useState } from 'react';
import Typography from '@components/shared/typography';
import { Input as AntdInput, Flex, Modal, message, Tabs } from 'antd';
import { FiEdit } from 'react-icons/fi';
import { BsShieldLock } from 'react-icons/bs';
import Button from '@components/shared/button';
import Input from '@components/shared/input';
import { USER_DATA } from '@utils/constants';

const { TabPane } = Tabs;

const SettingsComponent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<any>();
  const [phone, setPhone] = useState<string>();
  const [isChangePasswordVisible, setIsChangePasswordVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Load user data from localStorage
  useEffect(() => {
    const storedUserData = localStorage.getItem(USER_DATA);
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUsername(userData.name || '');
      setEmail(userData.email || '');
      setPhone(userData.phone || '+250788112233');
    }
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
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
                      <Typography className="text-gray-600 mb-1 font-bold">Username</Typography>
                      {isEditing ? (
                        <Input
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          defaultValue="divine"
                          className="border-gray-300"
                        />
                      ) : (
                        <Typography className="text-gray-800 text-lg">{username}</Typography>
                      )}
                    </Flex>
                    <Flex className="flex-col">
                      <Typography className="text-gray-600 mb-1 font-bold">Email</Typography>
                      {isEditing ? (
                        <Input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          defaultValue="birasadivinelaura2@gmail.com"
                          className="border-gray-300"
                        />
                      ) : (
                        <Typography className="text-gray-800 text-lg">{email}</Typography>
                      )}
                    </Flex>
                    <Flex className="flex-col">
                      <Typography className="text-gray-600 mb-1 font-bold">Phone</Typography>
                      {isEditing ? (
                        <Input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          defaultValue="+250 123 456 789"
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
          </Tabs>
        </Flex>
      </Flex>

      {/* Change Password Modal */}
      <Modal
        title="Change Password"
        open={isChangePasswordVisible}
        onCancel={handleChangePasswordCancel}
        footer={[
          <Button key="cancel" type="secondary" onClick={handleChangePasswordCancel}>
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
            <Typography className="mb-1 text-white">Current Password</Typography>
            <AntdInput.Password
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter your current password"
            />
          </Flex>
          <Flex className="flex-col">
            <Typography className="text-white mb-1">New Password</Typography>
            <AntdInput.Password
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your new password"
            />
          </Flex>
          <Flex className="flex-col">
            <Typography className="text-white mb-1">Confirm New Password</Typography>
            <AntdInput.Password
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
