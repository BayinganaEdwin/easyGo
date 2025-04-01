import React from 'react';
import { Flex, Form } from 'antd';
import Input from '@components/shared/input';
import Button from '@components/shared/button';
import { CgMail } from 'react-icons/cg';
import { HiOutlineLockClosed } from 'react-icons/hi';
import Typography from '@components/shared/typography';
import routes from '@utils/routes';
import useRedirection from '@utils/hooks/useRedirection';
import { useForm, Controller } from 'react-hook-form';

const LoginForm: React.FC = () => {
  const { redirectTo } = useRedirection();

  const {
    control,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const formLabelClassName = 'text-[9.5px] text-secondary mb-0.5 font-semibold';
  const inputIconSize = 17;

  return (
    <Form layout="vertical" className="h-full">
      <Flex vertical justify="space-between" className="h-full gap-4">
        <Typography variant="subTitle" className="self-center md:self-auto">
          Login
        </Typography>

        <Flex vertical className="gap-4">
          <Form.Item name="email" className="my-auto" validateStatus={errors.email ? 'error' : ''}>
            <Typography variant="body" className={formLabelClassName}>
              Email
            </Typography>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: 'Please input the Email!',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address!',
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  addonBefore={<CgMail className="text-primary" size={inputIconSize} />}
                  placeholder="Enter email"
                  className="bg-white"
                />
              )}
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </Form.Item>
          <Form.Item
            name="password"
            className="my-auto"
            validateStatus={errors.password ? 'error' : ''}>
            <Typography variant="body" className={formLabelClassName}>
              Password
            </Typography>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: 'Please input the Password!' }}
              render={({ field }) => (
                <Input
                  {...field}
                  type="primary"
                  inputType="password"
                  addonBefore={
                    <HiOutlineLockClosed className="text-primary" size={inputIconSize} />
                  }
                  placeholder="Enter password"
                  className="bg-white"
                />
              )}
            />
            {errors.password && <span className="error-message">{errors.password.message}</span>}
          </Form.Item>
        </Flex>

        <Flex className="flex-col md:flex-row md:items-center md:justify-between">
          <button onClick={() => redirectTo(routes.forgotPassword.url)}>
            <Typography
              variant="body"
              className="hidden md:inline underline font-bold cursor-pointer">
              Forgot Password?
            </Typography>
          </button>

          <Form.Item className="md:my-auto flex-end">
            <Button type="primary" htmlType="submit" className="w-full">
              Login
            </Button>
          </Form.Item>

          <button
            onClick={() => redirectTo(routes.forgotPassword.url)}
            className="flex self-center md:hidden">
            <Typography variant="body" className="underline font-bold cursor-pointer">
              Forgot Password?
            </Typography>
          </button>
        </Flex>
      </Flex>
    </Form>
  );
};

export default LoginForm;
