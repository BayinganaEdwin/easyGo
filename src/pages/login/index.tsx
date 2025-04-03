import Head from 'next/head';
import { Fragment, ReactElement } from 'react';
import { NextPage } from 'next';
import AuthLayout from '@layouts/auth';
import Typography from '@components/shared/typography';
import { Flex } from 'antd';
import { EasyBus } from '@utils/images';
import { EasyLogo } from '@utils/images';
import Input from '@components/shared/input';
import { Form, Button, Checkbox } from 'antd';
import Image from 'next/image';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { CgMail } from 'react-icons/cg';
import { useRouter } from 'next/router';
import { useLoginMutation } from '@store/actions/auth';
import { TOKEN_NAME, USER_DATA } from '@utils/constants';
import { useDispatch } from 'react-redux';
import { setToken } from '@store/reducers/app';

const Login: NextPage & { getLayout?: (page: ReactElement) => ReactElement } = () => {
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleBackToWebsiteClick = () => {
    router.push('/');
  };
  const onSubmit = async (data: { email: string; password: string }) => {
    const { email, password } = data;
    const payload = { email, password };

    try {
      const res = await login(payload).unwrap();
      if (res?.data) {
        const { user } = res.data;
        const token = res.token;

        // Cookies.set(TOKEN_NAME, token, {
        //   expires: 7,
        // });

        dispatch(setToken(token));

        localStorage.setItem(TOKEN_NAME, token);
        localStorage.setItem(USER_DATA, JSON.stringify(user));

        router.push('/');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };
  return (
    <Fragment>
      <Head>
        <title>Login | EasyGo</title>
      </Head>
      <Flex justify="center" className="h-screen bg-[#2c2638] p-2 flex-col md:flex-row">
        <Flex
          vertical
          justify="space-between"
          className="hidden md:flex md:w-1/2 rounded-3xl overflow-hidden relative">
          <Image src={EasyBus} alt="logo" className="object-cover w-full h-full opacity-50" />
          <Flex justify="space-between" className="absolute w-full">
            <Flex>
              <Image src={EasyLogo} alt="logo" className="object-cover w-[15%] py-4 px-1" />
            </Flex>
            <Flex align="center" className="py-3 bg-orange-400 hover:bg-orange-500 rounded-3xl">
              <Typography
                className="font-medium text-base text-black px-8 hover:text-gray-900 cursor-pointer"
                onClick={handleBackToWebsiteClick}>
                Back to website<span>-</span>
              </Typography>
            </Flex>
          </Flex>
        </Flex>

        <Flex className="w-full md:w-1/2 items-center justify-center">
          <Flex
            justify="center"
            className="m-8 p-4 shadow-inner hover:shadow-lg rounded-3xl w-full">
            <Flex vertical style={{ gap: '2rem' }} className="w-[55%]">
              <Typography variant="header" className="text-white">
                Login
              </Typography>
              <Typography variant="subTitle" className="text-white">
                Your first time?{' '}
                <span>
                  <a href="signup" className="text-indigo-400 italic hover:text-indigo-600">
                    Sign up
                  </a>
                </span>
              </Typography>
              <Form autoComplete="off" onFinish={onSubmit}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter a valid email' },
                    { type: 'email', message: 'Please enter a valid email' },
                  ]}
                  hasFeedback>
                  <Input
                    addonBefore={<CgMail className="text-gray-500 mt-1" size={20} />}
                    placeholder="Email"
                    className="text-black text-base bg-white rounded-md border-none p-4 w-full"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
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
                    className="text-black text-base bg-white"
                    addonBefore={<HiOutlineLockClosed className="text-gray-500" size={20} />}
                    placeholder="Enter your password"
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
                      loading={isLoading}
                      disabled={isLoading}
                      className="w-full text-lg font-semibold p-6 bg-indigo-400 hover:bg-indigo-500">
                      Login
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

Login.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Login;
