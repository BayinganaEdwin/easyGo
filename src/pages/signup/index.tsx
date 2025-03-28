import Head from 'next/head';
import { Fragment, ReactElement } from 'react';
import { NextPage } from 'next';
import AuthLayout from '@layouts/auth';
import { Flex } from 'antd';
import Typography from '@components/shared/typography';
import { EasyBus, EasyLogo } from '@utils/images';
import Input from '@components/shared/input';
import { Form, Button, Checkbox } from 'antd';
import Image from 'next/image';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { CgMail } from 'react-icons/cg';
import { FiUser } from 'react-icons/fi';
import { useRouter } from 'next/router';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const Signup: NextPageWithLayout = () => {
  const router = useRouter();
  const handleBackToWebsiteClick = () => {
    router.push('/');
  };
  return (
    <Fragment>
      <Head>
        <title>Signup | EasyGo</title>
      </Head>
      <Flex className="absolute top-4 left-4 z-10">
        <Image src={EasyLogo} alt="logo" width={80} height={40} className="object-contain" />
      </Flex>
      <Flex justify="space-between" className="h-screen bg-[#2c2638] p-2">
        {/* Left Panel */}
        <Flex
          vertical
          justify="space-between"
          className="hidden md:flex w-1/2 rounded-3xl m- overflow-hidden">
          <Image
            src={EasyBus}
            alt="logo"
            className="object-cover w-full h-full relative opacity-50"
          />
          <Flex justify="flex-end" className="absolute w-[50%]">
            <Typography
              className="font-medium text-base text-black px-8 py-3 hover:bg-orange-500 hover:text-gray-900 rounded-e-3xl bg-orange-400 cursor-pointer"
              onClick={handleBackToWebsiteClick}>
              Back to website<span>-</span>
            </Typography>
          </Flex>
        </Flex>

        {/* Right-panel */}
        <Flex className="w-full md:w-1/2 items-center">
          <Flex
            justify="center"
            className="m-8 p-4 shadow-inner hover:shadow-lg rounded-3xl w-full">
            <Flex vertical style={{ gap: '2rem' }}>
              <Typography variant="header" className="text-white">
                Create an account
              </Typography>
              <Typography variant="subTitle" className="text-white">
                Already have an account?{' '}
                <span>
                  <a href="login" className="text-indigo-400 italic hover:text-indigo-600">
                    Log in
                  </a>
                </span>
              </Typography>
              <Form
                autoComplete="off"
                // onFinish={(values) => {
                //   log({ values });
                // }}
              >
                <Flex className="gap-4">
                  <Form.Item
                    name={'firstName'}
                    rules={[
                      { required: true, message: 'Please enter your firstName' },
                      { whitespace: true },
                      { min: 3 },
                    ]}
                    hasFeedback>
                    <Input
                      addonBefore={<FiUser size={20} className="text-gray-500" />}
                      placeholder="First Name"
                      className="text-black text-base bg-gray-300 rounded-md border-none p-4"
                    />
                  </Form.Item>
                  <Form.Item
                    name={'lastName'}
                    rules={[
                      { required: true, message: 'Please enter your lastName' },
                      { whitespace: true },
                      { min: 3 },
                    ]}
                    hasFeedback>
                    <Input
                      addonBefore={<FiUser size={20} className="text-gray-500" />}
                      placeholder="Last Name"
                      className="text-black text-base bg-gray-300 rounded-md border-none p-4"
                    />
                  </Form.Item>
                </Flex>
                <Form.Item
                  name={'Email'}
                  rules={[
                    { required: true, message: 'Please enter a valid email' },
                    { type: 'email', message: 'Please enter a valid email' },
                  ]}
                  hasFeedback>
                  <Input
                    addonBefore={<CgMail className="text-gray-500 mt-1" size={20} />}
                    placeholder="Email"
                    className="text-black text-base bg-gray-300 rounded-md border-none p-4"
                  />
                </Form.Item>
                <Form.Item
                  name={'Password'}
                  rules={[
                    { required: true },
                    { min: 8, message: 'Password must be at least 8 characters long' },
                    // eslint-disable-next-line no-empty-pattern
                    ({}) => ({
                      validator(_, value) {
                        if (!/[A-Z]/.test(value)) {
                          return Promise.reject(new Error('Include at least one uppercase letter'));
                        }
                        if (!/\d/.test(value)) {
                          return Promise.reject(new Error('Include at least one number'));
                        }
                        if (value.replace(/[A-Za-z0-9]/g, '').length !== 1) {
                          return Promise.reject(new Error('Include exactly one special character'));
                        }

                        return Promise.resolve();
                      },
                    }),
                  ]}
                  hasFeedback>
                  <Input
                    inputType="password"
                    className="text-black text-base bg-gray-300"
                    addonBefore={<HiOutlineLockClosed className="text-gray-500" size={20} />}
                    placeholder="Enter your password"
                  />
                </Form.Item>
                <Form.Item
                  name={'confirmPassword'}
                  dependencies={['Password']}
                  rules={[
                    { required: true },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('Password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error('The two passwords that you entered do not match!'),
                        );
                      },
                    }),
                  ]}
                  hasFeedback>
                  <Input
                    inputType="password"
                    className="text-black text-base bg-gray-300"
                    addonBefore={<HiOutlineLockClosed className="text-gray-500" size={20} />}
                    placeholder="Confirm your password"
                  />
                </Form.Item>
                <Form.Item
                  name="checkbox"
                  valuePropName="checked"
                  rules={[
                    // eslint-disable-next-line no-empty-pattern
                    ({}) => ({
                      validator(_, value) {
                        if (value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error('To proceed, you should agree to the terms and conditions'),
                        );

                        return Promise.resolve();
                      },
                    }),
                  ]}>
                  <Flex gap={4}>
                    <Checkbox className="text-base">
                      I agree to the{' '}
                      <a className="text-indigo-400 hover:text-indigo-600" href="#">
                        Terms&Conditions
                      </a>
                    </Checkbox>
                  </Flex>
                </Form.Item>
                <Form.Item>
                  <Flex>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="w-full text-lg font-semibold p-6 bg-indigo-400 hover:bg-indigo-500">
                      Create account
                    </Button>
                  </Flex>
                </Form.Item>
              </Form>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Fragment>
  );
};

Signup.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Signup;
